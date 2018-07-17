import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCandidateRegister from '../../components/withCandidateRegister'
import Register from '../../components/portal/RegisterPage/RegisterPage'

class RegisterPage extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT YEZ | Candidate Sign Up</title>
        </Head>
        <Register title={'register'} {...this.props}/>
      </div>
    )
  }
}

// export default RegisterPage
export default withCandidateRegister(RegisterPage)
