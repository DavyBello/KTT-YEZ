import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCandidatePortal from '../../components/withCandidatePortal'
import DetailsSection from '../../components/portal/HomePage/DetailsSection/DetailsSection'
import ProfileSection from '../../components/portal/HomePage/ProfileSection/ProfileSection'
import TestSection from '../../components/portal/HomePage/TestSection/TestSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    const { candidate } = this.props.data.viewerCandidate    
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Home</title>
        </Head>
        {/* <Login title={'login'} {...this.props}/> */}
        <DetailsSection user={candidate}/>
        <ProfileSection />
        <TestSection />
      </div>
    )
  }
}

// export default Page
export default withCandidatePortal(Page)
