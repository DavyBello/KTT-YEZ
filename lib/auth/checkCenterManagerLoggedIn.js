import gql from 'graphql-tag'


export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      query ViewerCenterManagerQuery{
        viewerCenterManager {
          centerManager {
            _id
          }
        }
      }
    `
  }).then(({ data }) => {
    //console.log('data.viewerCenterManager');
    //console.log(data.viewerCenterManager);
    return { loggedInUser: data.viewerCenterManager}
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
