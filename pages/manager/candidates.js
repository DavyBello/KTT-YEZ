import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'

import withCenterManagerPortal from '../../components/withCenterManagerPortal'
import CandidatesSection from '../../components/centerManagerPortal/CandidatesPage/CandidatesSection/CandidatesSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Candidates</title>
        </Head>
        <CandidatesSection />
      </div>
    )
  }
}

// export default Page
export default withCenterManagerPortal(Page)
