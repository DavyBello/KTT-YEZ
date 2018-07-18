import React from 'react'
import Head from 'next/head'
import { Mutation, withApollo, compose } from 'react-apollo'
import cookie from 'cookie'
import Link from 'next/link'
import gql from 'graphql-tag'

import withData from '../lib/backendApi/withData'
import redirect from '../lib/auth/redirect'
import checkCompanyLoggedIn from '../lib/auth/checkCompanyLoggedIn'
import { LOGIN_COMPANY_MUTATION } from '../lib/backendApi/mutations'

import { ToastContainer, toast } from 'react-toastify'
import { TOAST_STYLE } from '../utils/common'

export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient)
      }

      //validate loggedin user
      const { loggedInUser } = await checkCompanyLoggedIn(context, apolloClient)
      if (loggedInUser.company) {
        // If signed in, send them somewhere more useful
        const target = await context.query.from || `/company`;
        redirect(context, target)
      }

      return {
        ...ChildProps,
      }
    }

    onCompleted = (data) => {
      // Store the token in cookie
      const {jwt, name} = data.loginCompany
      toast(`Welcome Back ${name}!`, {...TOAST_STYLE.success});
      document.cookie = cookie.serialize('token', jwt, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      })
      // Force a reload of all the current queries now that the user is
      // logged in
      this.props.client.resetStore().then(() => {
        const target = this.props.url.query.from || `/company`;
        redirect({}, target)
      })
    }

    onError = (error) => {
      // If you want to send error to external service?
      // console.log(error)
      if (error.graphQLErrors.length==0)
        toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});

      error.graphQLErrors.forEach(error=>{
        switch(error.message) {
          case `password incorrect`:
          toast("Incorrect Username/password", {...TOAST_STYLE.fail});
          break;
          case `email/company not found`:
          toast("Incorrect Username/password", {...TOAST_STYLE.fail});
          break;
          default:
          toast("Something Went Wrong", {...TOAST_STYLE.fail});
        }
      })
    }

    render() {
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
          <Mutation mutation={LOGIN_COMPANY_MUTATION}
            onCompleted={this.onCompleted}
            onError={this.onError}>
            {(loginCompany, {data, error}) => (
              <Child {...this.props} loginCompany={loginCompany}/>
            )}
            </Mutation>
            <ToastContainer />
        </div>
      )
    }
  }

  return compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
  )(WrappedComponent)
}
