const { LexModelBuildingService } = require("aws-sdk");

const getESMappings = (index) => {
    return {
      index,
      body: {
        properties: {
          id: { type: 'integer' },
          name: { 
            type: 'text',
            fields: {
              en: { type: 'text', analyzer: 'english' },
              es: { type: 'text', analyzer: 'spanish' },
              ptbr: { type: 'text', analyzer: 'brazilian' }
          } },
          careerPageId: { type: 'integer' },
          address: {
              type: 'object',
              properties: {
                  city: { type: 'keyword' },
                  state: { type: 'keyword' },
                  country: { type: 'keyword' }
              }
          },
          isRemoteWork: { type: 'boolean' },
          type: { type: 'keyword' },
          applicationDeadline:{ type: 'date'},
          careerPageName: { type: 'keyword', index: false },
          careerPageLogo: { type: 'keyword', index: false },
          companyId: { type: 'integer', index: false },
          publishedDate: { type: 'date', index: false },
          jobUrl: { type: 'keyword', index: false }
          },
      },
    };
  }

module.exports = { getESMappings }