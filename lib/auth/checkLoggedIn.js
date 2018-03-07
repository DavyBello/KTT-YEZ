import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      query getUser {
        user {
          id
          name
        }
      }
    `
  }).then(({ data }) => {
    console.log('asgcdguvihbojsdhvgaio------------------------------------------');
    console.log(data);
    return { loggedInUser: data }
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
