import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      {
        outletViewer {
          outlet {
            name
            description
            phone
            website
            email
            username
          }
        }
      }
    `
  }).then(({ data }) => {
    console.log(data.viewerCandidate);
    return { loggedInUser: data.viewerCandidate }
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
