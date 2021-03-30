const { Client } = require('@elastic/elasticsearch');


const node = process.env.ELASTICSEARCH_URL === undefined ? "localhost": process.env.ELASTICSEARCH_URL
console.log('Elastich Serahc URL Using: ', process.env.ELASTICSEARCH_URL);
const esClient = new Client({ node });
module.exports =  { esClient };