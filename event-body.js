const getEventBody = event => {
    const { NewImage } = event.Records[0].dynamodb
    return {
        id: parseInt(NewImage.id.N),
        name: NewImage.name.S,
        careerPageId: parseInt(NewImage.careerPageId.N),
        address: {
            city: NewImage.address.M.city.S,
            state: NewImage.address.M.state.S,
            country: NewImage.address.M.country.S,
        },
        isRemoteWork: NewImage.isRemoteWork.BOOL,
        type: NewImage.type.S,
        applicationDeadline: NewImage.applicationDeadline.S,
        careerPageName: NewImage.careerPageName.S,
        careerPageLogo: NewImage.careerPageLogo.S,
        companyId: NewImage.companyId.N,
        publishedDate: NewImage.publishedDate.S,
        jobUrl: NewImage.jobUrl.S,
    }
}

module.exports = { getEventBody };

// {
//     "ApproximateCreationDateTime": "2021-03-30T18:31:00.000Z",
//     "Keys": {
//       "id": {
//         "N": "80031"
//       }
//     },
//     "NewImage": {
//       "companyId": {
//         "N": "2652"
//       },
//       "address": {
//         "M": {
//           "country": {
//             "S": "Moldávia"
//           },
//           "city": {
//             "S": "undefined Ricardoundefined"
//           },
//           "state": {
//             "S": "Pará"
//           }
//         }
//       },
//       "name": {
//         "S": "Future Solutions Agent"
//       },
//       "jobUrl": {
//         "S": "http://larissa.net"
//       },
//       "id": {
//         "N": "80031"
//       },
//       "publishedDate": {
//         "S": "2021-03-29"
//       },
//       "isRemoteWork": {
//         "BOOL": true
//       },
//       "type": {
//         "S": "quia"
//       },
//       "careerPageLogo": {
//         "S": "https://s3.amazonaws.com/uifaces/faces/twitter/pcridesagain/128.jpg"
//       },
//       "careerPageName": {
//         "S": "Xavier - Santos"
//       },
//       "careerPageId": {
//         "N": "62716"
//       }
//     },
//     "SequenceNumber": "000000000000000000001",
//     "SizeBytes": 313,
//     "StreamViewType": "NEW_AND_OLD_IMAGES"
//   }
  


// {
//     "range": {
//       "applicationDeadline": {
//         "gte": "now/d"
//       }
//     }
//   }