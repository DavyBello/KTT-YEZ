import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCompanyPortal from '../../components/withCompanyPortal'
import DetailsSection from '../../components/companyPortal/HomePage/DetailsSection/DetailsSection'
import MessageSection from '../../components/companyPortal/HomePage/MessageSection/MessageSection'
// import JobsSection from '../../components/companyPortal/HomePage/JobsSection/JobsSection'
import JobsSection from '../../components/companyPortal/HomePage/JobsSectionn/JobsSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    const { loggedInUser: {company = {}}} = this.props;
    // console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Home</title>
        </Head>
        <DetailsSection />
        <MessageSection company={company}/>
        {/* <JobsSection /> */}
        <JobsSection />
      </div>
    )
  }
}

// export default Page
export default withCompanyPortal(Page)
