'use strict';
require('dotenv').config();
const { createJob } = require('./create-job');
const faker = require('faker');

module.exports.createJob = async () => {

  const job = {
    id: faker.random.number(),
    name: faker.name.jobTitle(),
  };

  await createJob(job);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Job Created!',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
