const { createDynamoDbConnection } = require('./create-dynamodb-connection');

const createJob = async (job) => {
    const dynamoConnection = createDynamoDbConnection();

    if(!job.applicationDeadline) delete job.applicationDeadline;

    const params = {
      TableName: 'jobs-table',
      Item: job,
    }

    await dynamoConnection.put(params).promise();
};

module.exports = { createJob };