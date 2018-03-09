import React from 'react'
import Head from 'next/head'
import { graphql, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import Link from 'next/link'
import gql from 'graphql-tag'
//import 'isomorphic-fetch'

import withData from '../lib/backendApi/withData'
import redirect from '../lib/auth/redirect'
import checkLoggedIn from '../lib/auth/checkLoggedIn'

export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient)
      }

      const { loggedInUser } = await checkLoggedIn(context, apolloClient)
      //console.log('loggedInUser---');
      //console.log(loggedInUser);
      if (loggedInUser.candidate) {
        // If signed in, send them somewhere more useful
        console.log('You are signed in');
        //console.log(context);
        const target = await context.query.from || `/user`;
        redirect(context, target)
      }

      return {
        ...ChildProps,
      }
    }

    render() {
      //console.log(opts);
      const opts = opts || {};
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/*<link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>*/}
            {/*<!-- Stylesheets-->*/}
            <link rel="stylesheet" href="/static/css/portal/style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
          </Head>
          <div>
            <Child {...this.props}/>
          </div>
        </div>
      )
    }
  }

  const gqlWrapper = gql `
  mutation Login($phone: String, $password: String) {
    loginCandidate ( phone: $phone, password: $password ) {
      jwt
    }
  }
  `

  //return withData(WrappedComponent)
  return compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
  )(graphql(
      gqlWrapper,
      {
        // Use an unambiguous name for use in the `props` section below
        name: 'loginWithEmail',
        // Apollo's way of injecting new props which are passed to the component
        props: ({
          loginWithEmail,
          // `client` is provided by the `withApollo` HOC
          ownProps: { client, url }
        }) => ({
          // `login` is the name of the prop passed to the component
          login: ({phone, password}) => {

            loginWithEmail({
              variables: {
                phone: phone,
                password: password
              }
            }).then(({ data }) => {
              /*console.log('data');
              console.log(data);*/
              // Store the token in cookie
              const {jwt} = data.loginCandidate
              document.cookie = cookie.serialize('token', jwt, {
                maxAge: 3 * 24 * 60 * 60 // 3 days
              })

              //console.log(ownProps);
              // Force a reload of all the current queries now that the user is
              // logged in
              client.resetStore().then(() => {
                // Now redirect to the homepage / from page
                const target = url.query.from || `/user`;
                redirect({}, target)
              })
            }).catch((error) => {
              // Something went wrong, such as incorrect password, or no network
              // available, etc.
              console.error(error)
            })
          }
        })
      }
    )(WrappedComponent))
}
