import { useCallback, useState } from 'react';
import {
  Alert,
  AlertDescription,
  Box,
  Button,
  FormInput,
  Heading,
  Separator,
  Text,
  Textarea,
  VStack,
} from '@sparrowengg/twigs-react';

const DEFAULT_PAYLOAD = '{\n  "foo": "bar"\n}';

function AppMain() {
  const [functionName, setFunctionName] = useState('myServerHandler');
  const [payloadJson, setPayloadJson] = useState(DEFAULT_PAYLOAD);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInvoke = useCallback(async () => {
    setError('');
    setResultText('');
    setLoading(true);

    let functionPayload = {};
    if (payloadJson.trim()) {
      try {
        functionPayload = JSON.parse(payloadJson);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Invalid JSON in payload');
        setLoading(false);
        return;
      }
    }

    try {
      const bridge = window.AppnestFunctions?.$appBackend;
      if (!bridge?.invoke) {
        throw new Error(
          'window.AppnestFunctions.$appBackend.invoke is not available. Open this app inside the Appnest host to call backend functions.'
        );
      }

      const result = await bridge.invoke({
        functionName,
        functionPayload,
      });

      setResultText(
        typeof result === 'string' ? result : JSON.stringify(result, null, 2)
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [functionName, payloadJson]);

  return (
    <Box
      css={{
        minHeight: '100vh',
        backgroundColor: '$neutral50',
        padding: '$10',
      }}
    >
      <VStack
        alignX="left"
        gap="$6"
        css={{
          width: '100%',
          minWidth: 'min(100%, 320px)',
          maxWidth: 640,
          margin: '0 auto',
        }}
      >
        <Heading size="h3">Backend function tester</Heading>
        <Text size="sm" css={{ color: '$neutral700' }}>
          Calls{' '}
          <Text as="span" weight="medium" css={{ color: '$neutral900' }}>
            window.AppnestFunctions.$appBackend.invoke
          </Text>{' '}
          with the function name and JSON payload you provide.
        </Text>

        <FormInput
          label="Function name"
          placeholder="e.g. myServerHandler"
          value={functionName}
          onChange={(e) => setFunctionName(e.target.value)}
          size="md"
        />

        <Textarea
          label="Function payload (JSON)"
          value={payloadJson}
          onChange={(e) => setPayloadJson(e.target.value)}
          resize="vertical"
          rows={6}
          size="md"
        />

        <Button
          type="button"
          size="md"
          color="primary"
          loading={loading}
          disabled={loading || !functionName.trim()}
          onClick={handleInvoke}
        >
          Invoke function
        </Button>

        {error ? (
          <Alert status="error" size="md">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}

        <Separator orientation="horizontal" />

        <Box>
          <Text size="sm" weight="medium" css={{ marginBottom: '$3' }}>
            Result
          </Text>
          <Box
            css={{
              borderRadius: '$md',
              borderWidth: '$xs',
              borderStyle: 'solid',
              borderColor: '$neutral200',
              backgroundColor: '$white900',
              padding: '$4',
              minHeight: 120,
              minWidth: 'min(100%, 320px)',
              width: '100%',
            }}
          >
            <Text
              as="pre"
              size="xs"
              css={{
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                color: '$neutral800',
              }}
            >
              {resultText || '—'}
            </Text>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default AppMain;
