import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create(initialState, { getToken }) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql', // Server URL (must be absolute)
    //uri: 'https://ktt-backend.herokuapp.com/graphql',
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    //console.log('token-----------------------');
    //console.log(token);
    let returnHeaders = {...headers}
    const authorization = token ? `Bearer ${token}` : null
    if (authorization){
      returnHeaders.authorization = authorization
    }
    return {
      headers: returnHeaders
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
