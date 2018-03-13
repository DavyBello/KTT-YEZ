import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      query ViewerCandidate{
        viewerCandidate {
          candidate {
            _id
            name {
              first
              last
            }
            phone
            email
            username
            address
            bvn
            nationality
            gender
            stateOfOrigin
            dateOfBirth
            placeOfBirth
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
