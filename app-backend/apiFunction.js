const { AppnestFunctions, ResultData } = require('@aravinthan_p/appnest-sdk-utils');

const function1 = async ({ payload }) => {
  console.log("function1 is invoked");
  console.log('🚀 ~ function1 ~ payload:', payload);
  await AppnestFunctions.sampleFunction();
  return {
    "message": "function1 executed successfully..!!@@@@!!."
  }
};

const function2 = async ({ payload }) => {
  console.log("function2 is invoked");
  console.log('🚀 ~ function2 ~ payload:', payload);
  return new ResultData({
    body: { message: 'Function 2 executed successfully..!!@@@@!!.' },
    statusCode: 200,
  });
};

module.exports = { function1, function2 };