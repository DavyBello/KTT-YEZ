import {Component} from 'react'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'

import withCandidatePortal from '../../components/withCandidatePortal'
import DetailsSection from '../../components/portal/ProfilePage/DetailsSection/DetailsSection'
import ExperienceSection from '../../components/portal/ProfilePage/ExperienceSection/ExperienceSection'
import EducationSection from '../../components/portal/ProfilePage/EducationSection/EducationSection'
import ProfileSection from '../../components/portal/ProfilePage/ProfileSection/ProfileSection'
import MoreDetails from '../../components/portal/ProfilePage/MoreDetails/MoreDetails'
import CertificationsSection from '../../components/portal/ProfilePage/CertificationsSection/CertificationsSection'
import RefereesSection from '../../components/portal/ProfilePage/RefereesSection/RefereesSection'

class Page extends Component {
  render(){
  //  console.log('uaisodhpijspjdpithis.props');
//    console.log(this.props);
    //console.log('warstedyruftiygoulgkyfjhd');
//    console.log(this.props.candidateUpdateById);
    const { candidate } = this.props.data.viewerCandidate
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Profile</title>
        </Head>
        <Row>
          <Col md="8" xs="12">
            <ProfileSection user={candidate} update={this.props.update}/>
          </Col>
          <Col md="4" xs="12">
            <DetailsSection user={candidate}/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <MoreDetails user={candidate} update={this.props.update}/>
            <ExperienceSection />
            {/* <EducationSection />
            <CertificationsSection />
            <RefereesSection /> */}
          </Col>
        </Row>
      </div>
    )
  }
}

// export default Page
// export default withCandidatePortal(Page)

const gqlWrapper = gql `
mutation UpdateCandidate(
  $id: MongoID!, $email: String, $username: String, $bvn: String,
  $address: String, $nationality: String,
  $stateOfOrigin: String, $dateOfBirth: Date, $placeOfBirth: String
) {
  candidateUpdateById (record: {
    _id: $id, email: $email, username: $username, bvn: $bvn,
    address :$address, nationality :$nationality,
    stateOfOrigin :$stateOfOrigin, dateOfBirth :$dateOfBirth, placeOfBirth :$placeOfBirth
  }){
    recordId
    record{
      _id
      id
      name {
        first
        last
      }
      phone
      email
      username
      address
      bvn
      nationality
      gender
      stateOfOrigin
      dateOfBirth
      placeOfBirth
    }
  }
}
`

export default withCandidatePortal(graphql(gqlWrapper, {
  // Use an unambiguous name for use in the `props` section below
  name: 'updateCandidateFields',
  // Apollo's way of injecting new props which are passed to the component
  props: ({ownProps, updateCandidateFields}) => ({
    // `update` is the name of the prop passed to the component
    update: (data) => {
      const removeEmpty = (obj) => {
        Object.keys(obj).forEach(key => {
          if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
          else if (obj[key] == null) delete obj[key];
        });
      };
      removeEmpty(data);
      updateCandidateFields({
        variables: {
          ...data
        },
        /*update: (proxy, { data: { candidateUpdateById } }) => {
          // Read the data from our cache for this query.
          console.log(ownProps);
          const data = proxy.readQuery({ query: ownProps.ViewerCandidateQuery });

          // Add our todo from the mutation to the end.
          console.log(data.viewerCandidate.candidate);
          console.log('candidateUpdateById');
          console.log(candidateUpdateById);
          data.viewerCandidate.candidate = candidateUpdateById.record;

          // Write our data back to the cache.
          proxy.writeQuery({ query: ViewerCandidateQuery, data });
        }*/
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   candidateUpdateById: {
        //     __typename: 'Post',
        //     id: ownProps.id,
        //     votes: ownProps.votes + 1
        //   }
        // }
      })
    }
  })
})(Page))
