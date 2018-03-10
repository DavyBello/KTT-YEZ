import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCandidateLogin from '../../components/withCandidateLogin'
//import withCandidateLogin from '../../components/withCandidateLogin'
import Login from '../../components/portal/LoginPage/LoginPage'

class LoginPage extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Login</title>
        </Head>
        {/* <Login /> */}
        <Login title={'login'} {...this.props}/>
      </div>
    )
  }
}

// export default LoginPage
export default withCandidateLogin(LoginPage)
