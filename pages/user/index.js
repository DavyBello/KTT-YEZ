import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCandidatePortal from '../../components/withCandidatePortal'
import DetailsSection from '../../components/portal/HomePage/DetailsSection/DetailsSection'
import ProfileSection from '../../components/portal/HomePage/ProfileSection/ProfileSection'
import TestSection from '../../components/portal/HomePage/TestSection/TestSection'

class Page extends Component {
  render(){
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Home</title>
        </Head>
        <DetailsSection />
        <ProfileSection />
        <TestSection />
      </div>
    )
  }
}

// export default Page
export default withCandidatePortal(Page)
