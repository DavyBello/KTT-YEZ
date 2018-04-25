import {Component} from 'react'
import Head from 'next/head'

import withCandidateLogin from '../../components/withCandidateLogin'
import Login from '../../components/portal/LoginPage/LoginPage'

class LoginPage extends Component {
  render(){
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Candidate Login</title>
        </Head>
        {/* <Login /> */}
        <Login title={'login'} {...this.props}/>
      </div>
    )
  }
}

// export default LoginPage
export default withCandidateLogin(LoginPage)
