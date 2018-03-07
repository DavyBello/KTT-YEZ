import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
<<<<<<< HEAD
      query getUser {
        user {
          id
          name
=======
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
>>>>>>> e1489d78f1e605d416d0b60312c421facc8927c0
        }
      }
    `
  }).then(({ data }) => {
<<<<<<< HEAD
    console.log('asgcdguvihbojsdhvgaio------------------------------------------');
    console.log(data);
    return { loggedInUser: data }
=======
    console.log(data.viewerCandidate);
    return { loggedInUser: data.viewerCandidate }
>>>>>>> e1489d78f1e605d416d0b60312c421facc8927c0
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
