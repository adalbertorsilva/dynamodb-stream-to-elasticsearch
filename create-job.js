const { createDynamoDbConnection } = require('./create-dynamodb-connection');

const createJob = async (job) => {
    const dynamoConnection = createDynamoDbConnection();

    const params = {
      TableName: 'jobs-table',
      Item: job,
    }

    await dynamoConnection.put(params).promise();
};

module.exports = { createJob };