import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'

import withCandidatePortal from '../../components/withCandidatePortal'
import DetailsSection from '../../components/portal/ProfilePage/DetailsSection/DetailsSection'
import ExperienceSection from '../../components/portal/ProfilePage/ExperienceSection/ExperienceSection'
import EducationSection from '../../components/portal/ProfilePage/EducationSection/EducationSection'
import ProfileSection from '../../components/portal/ProfilePage/ProfileSection-/ProfileSection-'
import MoreDetails from '../../components/portal/ProfilePage/MoreDetails/MoreDetails'
import CertificationsSection from '../../components/portal/ProfilePage/CertificationsSection/CertificationsSection'
import RefereesSection from '../../components/portal/ProfilePage/RefereesSection/RefereesSection'

class Page extends Component {
  render(){
    //console.log(this.props);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Profile</title>
        </Head>
        <Row>
          <Col md="8" xs="12">
            <ProfileSection user={this.props.loggedInUser.candidate}/>
          </Col>
          <Col md="4" xs="12">
            <DetailsSection user={this.props.loggedInUser.candidate}/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <MoreDetails />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <RefereesSection />
          </Col>
        </Row>
      </div>
    )
  }
}

// export default Page
export default withCandidatePortal(Page)
