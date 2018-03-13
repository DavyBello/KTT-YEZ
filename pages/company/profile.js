import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'

import withCandidatePortal from '../../components/withCandidatePortal'
import DetailsSection from '../../components/portal/ProfilePage/DetailsSection/DetailsSection'
import ExperienceSection from '../../components/portal/ProfilePage/ExperienceSection/ExperienceSection'
import EducationSection from '../../components/portal/ProfilePage/EducationSection/EducationSection'
import ProfileSection from '../../components/portal/ProfilePage/ProfileSection/ProfileSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Profile</title>
        </Head>
        <Row>
          <Col md="8">
            <ProfileSection />
            <ExperienceSection />
            <EducationSection />
          </Col>
          <Col md="4">
            <DetailsSection />
          </Col>
        </Row>
      </div>
    )
  }
}

// export default Page
export default withCandidatePortal(Page)
