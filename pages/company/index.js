import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCompanyPortal from '../../components/withCompanyPortal'
import DetailsSection from '../../components/companyPortal/HomePage/DetailsSection/DetailsSection'
import MessageSection from '../../components/companyPortal/HomePage/MessageSection/MessageSection'
import JobsSection from '../../components/companyPortal/HomePage/JobsSection/JobsSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Home</title>
        </Head>
        {/* <Login title={'login'} {...this.props}/> */}
        <DetailsSection />
        <MessageSection />
        <JobsSection />
      </div>
    )
  }
}

// export default Page
export default withCompanyPortal(Page)
