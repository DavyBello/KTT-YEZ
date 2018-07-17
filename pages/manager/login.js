import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCenterManagerLogin from '../../components/withCenterManagerLogin'
//import withCenterManagerLogin from '../../components/withCenterManagerLogin'
import Login from '../../components/centerManagerPortal/LoginPage/LoginPage'

class LoginPage extends Component {
  render(){
    // console.log('loginpage');
    // console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Center-Manager Login</title>
        </Head>
        {/* <Login /> */}
        <Login title={'login'} {...this.props}/>
      </div>
    )
  }
}

// export default LoginPage
export default withCenterManagerLogin(LoginPage)
