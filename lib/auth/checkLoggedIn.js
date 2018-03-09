import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      {
        viewerCandidate {
          candidate {
            _id
            name {
              first
              last
            }
            phone
            email
          }
        }
      }
    `
  }).then(({ data }) => {
    //console.log(data.viewerCandidate);
    return { loggedInUser: data.viewerCandidate }
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
