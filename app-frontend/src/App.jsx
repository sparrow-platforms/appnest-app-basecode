import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, TooltipProvider } from '@sparrowengg/twigs-react';
import AppMain from './components/AppMain';

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <AppMain />
      </TooltipProvider>
    </ThemeProvider>
  );
}

const el = document.getElementById('root');
if (el) {
  createRoot(el).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export default App;
