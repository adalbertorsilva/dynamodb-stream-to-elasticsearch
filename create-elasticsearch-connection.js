const { Client } = require('@elastic/elasticsearch');


const host = process.env.ELASTICSEARCH_URL == undefined ? "localhost": process.env.ELASTICSEARCH_URL
console.log('Elastich Serahc URL Using: ', process.env.ELASTICSEARCH_URL), "++> ", host;
export const esClient = new Client({ node: `https://${host}` });