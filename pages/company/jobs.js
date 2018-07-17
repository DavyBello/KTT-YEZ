import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCompanyPortal from '../../components/withCompanyPortal'
import JobsSection from '../../components/companyPortal/JobsPage/JobsSection/JobsSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Jobs</title>
        </Head>
        <JobsSection />
      </div>
    )
  }
}

// export default Page
export default withCompanyPortal(Page)
