const { DynamoDB } = require('aws-sdk');

const createDynamoDbConnection = () => {
    const options = {
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      endpoint: process.env.AWS_ENDPOINT,
    };

    return new DynamoDB.DocumentClient(options);
};

module.exports = { createDynamoDbConnection };