import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

// import withMediaAppLogin from '../components/withMediaAppLogin'
// import Login from '../components/MediaPortal/views/Login/Login'
//const Login = dynamic(import ('../components/MediaPortal/views/Login/Login'), { ssr: false })

class LoginPage extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Login</title>
        </Head>
        {/* <Login title={'login'} {...this.props}/> */}
      </div>
    )
  }
}

export default LoginPage
// export default withMediaAppLogin(LoginPage)
