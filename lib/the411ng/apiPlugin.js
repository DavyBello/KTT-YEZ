const { request } = require('graphql-request')

const API_ENDPOINT = 'https://the411ng-backend.herokuapp.com/graphql';
//request(API_ENDPOINT, query).then(data => return(data))

module.exports.getBreakingArticles = () => {
  //TODO sources list to include other news outlets
  const sourceIds = ["5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d","5965c0feb134570004e73681", "5a8ffb604a1a7400043cc57d", "5a8ffb9f4a1a7400043cc57e", "5a8ffbf34a1a7400043cc57f", "5a8ffcbc4a1a7400043cc597", "5a8ffcf74a1a7400043cc598"]
  //Stringify the array to use in the query bellow
  let sources = "";
  sourceIds.forEach((sourceId)=>{sources = sources + `"${sourceId}",`})
  const query = `{
    gistMany(limit: 10, sort: PUBLISHEDDATE_DESC, filter: {_operators: {source: {in: [${sources}]}}}) {
      _id
      title
      link
      brief
      publishedDate
    }
  }`
  //Fetching articles from the411ng api
  return request(API_ENDPOINT, query)
}
