import React from 'react'
import Head from 'next/head'
import { withApollo, graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
//import 'isomorphic-fetch'

import withData from '../lib/backendApi/withData'
import redirect from '../lib/auth/redirect'
import checkCompanyLoggedIn from '../lib/auth/checkCompanyLoggedIn'

import { Container } from 'reactstrap'
// import Breadcrumb from './portal/Breadcrumb/Breadcrumb'
import Sidebar from './companyPortal/adminUI/Sidebar/Sidebar'
import Header from './companyPortal/adminUI/Header/Header'

export default function withLayout(Child, opts) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient)
      }

      const { loggedInUser } = await checkCompanyLoggedIn(context, apolloClient)
      //console.log('loggedInUser---');
      //console.log(loggedInUser);
      if (!loggedInUser.company) {
        // If not signed in, send them somewhere more useful
        console.log('You must be signed in');
        let target = `/company/login`
        if (context.pathname!=='/company')
          target = `${target}?from=${context.pathname}`
        redirect(context, target)
      }

      /*const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';
      //Loading articles from the411ng api
      let res = await fetch(`${baseUrl}/fetch-breaking-articles`);
      let results = await res.json();*/

      return {
        ...ChildProps,
        loggedInUser
      }
    }

    render() {
      const opts = opts || {};
      const { loading } = this.props.data
      // console.log(vi);
      //if (this.state.loading)
      if (!loading && this.props.loggedInUser){
        if(this.props.loggedInUser.company){
          return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            {/*<link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>*/}
            {/*<!-- Stylesheets-->*/}
            <link rel="stylesheet" href="/static/css/companyPortal/style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
          </Head>
          <div className="app">
            <Header client={this.props.client} />
            <div className="app-body">
              <Sidebar/>
              <main className="main" style={{paddingTop: '24px'}}>
                {/* <Breadcrumb/> */}
                <Container fluid>
                  <Child {...this.props}/>
                </Container>
              </main>
            </div>
          </div>
        </div>
      )
        }
      }
      return (<div>Loading Page</div>)
    }
  }

  const gqlWrapper = gql`
    query ViewerCompanyQuery{
      viewerCompany{
        company{
          _id
          name
          phone
          email
          website
          address
          stateOfResidence
          description
          cacRegNo
          staffSize
          isVerified
        }
      }
    }
  `

  return compose(
    // withData gives us server-side graphql queries before rendering
    withData,
    // withApollo exposes `this.props.client` used when logging out
    withApollo
  )(graphql(gqlWrapper, {props: ({ data }) => ({data})})(WrappedComponent))
}
