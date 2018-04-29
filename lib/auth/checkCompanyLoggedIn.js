import gql from 'graphql-tag'


export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      query ViewerCompanyQuery{
        viewerCompany {
          company {
            _id
          }
        }
      }
    `
  }).then(({ data }) => {
    //console.log('data.viewerCompany');
    //console.log(data.viewerCompany);
    return { loggedInUser: data.viewerCompany}
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
