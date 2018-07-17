import gql from 'graphql-tag'


const ViewerCandidateQuery = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
      }
    }
  }
`

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      query ViewerCandidateQuery{
        viewerCandidate {
          candidate {
            _id
          }
        }
      }
    `
  }).then(({ data }) => {
    //console.log('data.viewerCandidate');
    //console.log(data.viewerCandidate);
    return { loggedInUser: data.viewerCandidate}
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
