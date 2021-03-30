'use strict';
require('dotenv').config();
const faker = require('faker');
const { createJob } = require('./create-job');
const { getESMappings } = require('./esMappings');
const { getEventBody } = require('./event-body');
const { esClient } = require('./create-elasticsearch-connection');

module.exports.streamToElasticsearch = async event => {
  console.log('STREAM EVENT --> ', JSON.stringify(event.Records[0].dynamodb, null, 2));

  const index = process.env.INDEX_NAME;

  try {
    const exists = await esClient.indices.exists({ index });
    if (!exists) {
      await esClient.indices.create(getESMappings(index));
    }

    const body = getEventBody(event);

    await esClient.index({
      index,
      id: body.id,
      body,
    });

    console.log('--- JOB INSERIDO NO ELASTICSEARCH ---')
  } catch (err) {
    throw err;
  }

}

module.exports.createJob = async () => {

  faker.locale = 'pt_BR';

  const id = faker.random.number(); 

  const job = {
    id,
    name: faker.name.jobTitle(),
    careerPageId: faker.random.number(),
    address: {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
    },
    isRemoteWork: faker.random.boolean(),
    type: faker.lorem.word(),
    applicationDeadline: id%2 === 0? '2021-12-31' : '2021-03-29',
    careerPageName: faker.company.companyName(),
    careerPageLogo: faker.image.avatar(),
    companyId: faker.random.number(),
    publishedDate: '2021-03-29',
    jobUrl: faker.internet.url(),
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
};
