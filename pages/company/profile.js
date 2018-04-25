import {Component} from 'react'
import Head from 'next/head'
import { Query } from 'react-apollo'
import { Row, Col } from 'reactstrap'
import { toast } from 'react-toastify';

import { PROFILE_VIEWER_COMPANY_QUERY } from '../../lib/backendApi/queries'

import withCompanyPortal from '../../components/withCompanyPortal'
import DetailsSection from '../../components/companyPortal/ProfilePage/DetailsSection/DetailsSection'
import ProfileSection from '../../components/companyPortal/ProfilePage/ProfileSection/ProfileSection'
// import ExperienceSection from '../../components/companyPortal/ProfilePage/ExperienceSection/ExperienceSection'
// import EducationSection from '../../components/companyPortal/ProfilePage/EducationSection/EducationSection'
// import MoreDetails from '../../components/companyPortal/ProfilePage/MoreDetails/MoreDetails'
// import CertificatesSection from '../../components/companyPortal/ProfilePage/CertificatesSection/CertificatesSection'
// import RefereesSection from '../../components/companyPortal/ProfilePage/RefereesSection/RefereesSection'

class Page extends Component {
  render(){
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Profile</title>
        </Head>
        <Query query={PROFILE_VIEWER_COMPANY_QUERY}>
          {({loading, error, data}) => {
            if (loading)
              return "Loading...";
            if (error)
              return `Error! ${error.message}`;

            const {viewerCompany: {company}} = data;
            return (
              <div>
                <Row>
                  <Col md="8" xs="12">
                    <ProfileSection user={company} update={this.props.update}/>
                  </Col>
                  <Col md="4" xs="12">
                    <DetailsSection user={company}/>
                  </Col>
                </Row>
                {/* <Row>
                  <Col md="8">
                    <MoreDetails user={company} update={this.props.update}/>
                    <ExperienceSection />
                    <EducationSection />
                    <CertificatesSection />
                    <RefereesSection />
                    </Col>
                  </Row> */}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

// export default Page
export default withCompanyPortal(Page)
