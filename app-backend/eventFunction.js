const { AppnestFunctions, ResultData } = require('@aravinthan_p/appnest-sdk-utils');

const onSubmissionComplete = async ({ payload }) => {
  console.log('🚀 ~ onSubmissionComplete ~ payload:', payload);
  await AppnestFunctions.$db.string.create({
    key: 'submission_complete',
    value: payload
  })
  return {
    id: '123',
    email: 'test@test.com'
  };
};

const onContactCreate = async ({ payload }) => {
  console.log('Contact created with data:', payload);
  await AppnestFunctions.$db.string.create({
    key: 'contact_create_1',
    value: payload
  })
  return {
    responseCode: 200,
    responseBody: {
      message: 'Contact create event handled successfully',
    },
  };
};

module.exports = { onSubmissionComplete, onContactCreate };

