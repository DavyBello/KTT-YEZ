import {Component} from 'react'
//import Router from 'next/router'
import Head from 'next/head'
import { Query } from 'react-apollo'
import { Row, Col } from 'reactstrap'
import { toast } from 'react-toastify';

import { MANAGER_CANDIDATE_BY_ID_QUERY } from '../../lib/backendApi/queries'

import NoCandidate from '../../components/common/Error/NoCandidate/NoCandidate'
import withCenterManagerPortal from '../../components/withCenterManagerPortal'
import Widgets from '../../components/centerManagerPortal/CandidatePage/Widgets/Widgets'
import DetailsSection from '../../components/centerManagerPortal/CandidatePage/ProfilePage/DetailsSection/DetailsSection'
import ExperienceSection from '../../components/centerManagerPortal/CandidatePage/ProfilePage/ExperienceSection/ExperienceSection'
import EducationSection from '../../components/centerManagerPortal/CandidatePage/ProfilePage/EducationSection/EducationSection'
import CertificatesSection from '../../components/centerManagerPortal/CandidatePage/ProfilePage/CertificatesSection/CertificatesSection'
import RefereesSection from '../../components/centerManagerPortal/CandidatePage/ProfilePage/RefereesSection/RefereesSection'

class Page extends Component {
  static async getInitialProps ({ query}) {
    return {query}
  }

  render(){
    //console.log(this.props);
    if (!this.props.query.id)
      return <NoCandidate />

    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Manager</title>
        </Head>
        <Query query={MANAGER_CANDIDATE_BY_ID_QUERY} variables={{ id: this.props.query.id}}>
          {({loading, error, data}) => {
            if (loading)
              return "Loading...";
            if (error){
              if (error.message == `GraphQL error: Cast to ObjectId failed for value "${this.props.query.id}" at path "_id" for model "Candidate"`)
                return <NoCandidate />
              if (error.message == `GraphQL error: This company cannot view this document`)
                return <NoCandidate />
              return `Error! ${error.message}`;
            }

            const {managerCandidateById, currentTime} = data;
            // console.log(managerCandidateById);
            if (!managerCandidateById) {
              return <NoCandidate />
            }
            return (
              <div>
                <Widgets />
                <DetailsSection user={managerCandidateById} currentTime={currentTime}/>
                <ExperienceSection id={this.props.query.id} currentTime={currentTime}/>
                <EducationSection id={this.props.query.id} />
                <CertificatesSection id={this.props.query.id}/>
                <RefereesSection id={this.props.query.id}/>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

// export default Page
export default withCenterManagerPortal(Page)
