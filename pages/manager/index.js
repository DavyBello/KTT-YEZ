import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCenterManagerPortal from '../../components/withCenterManagerPortal'
import DetailsSection from '../../components/centerManagerPortal/HomePage/DetailsSection/DetailsSection'
import MessageSection from '../../components/centerManagerPortal/HomePage/MessageSection/MessageSection'
import CandidatesSection from '../../components/centerManagerPortal/HomePage/CandidatesSection/CandidatesSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    const { loggedInUser: {centerManager = {}}} = this.props;
    // console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Home</title>
        </Head>
        <DetailsSection />
        <MessageSection centerManager={centerManager}/>
        <CandidatesSection />
      </div>
    )
  }
}

// export default Page
export default withCenterManagerPortal(Page)
