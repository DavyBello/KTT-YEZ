import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCompanyRegister from '../../components/withCompanyRegister'
import Register from '../../components/companyPortal/RegisterPage/RegisterPage'

class RegisterPage extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Register</title>
        </Head>
        <Register title={'register'} {...this.props}/>
      </div>
    )
  }
}

// export default RegisterPage
export default withCompanyRegister(RegisterPage)
