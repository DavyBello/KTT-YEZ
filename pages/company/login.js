import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCompanyLogin from '../../components/withCompanyLogin'
//import withCompanyLogin from '../../components/withCompanyLogin'
import Login from '../../components/companyPortal/LoginPage/LoginPage'

class LoginPage extends Component {
  render(){
    // console.log('loginpage');
    // console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Company Login</title>
        </Head>
        {/* <Login /> */}
        <Login title={'login'} {...this.props}/>
      </div>
    )
  }
}

// export default LoginPage
export default withCompanyLogin(LoginPage)
