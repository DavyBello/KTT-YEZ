import {Component} from 'react'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import Head from 'next/head'
import { Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';


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
            <ExperienceSection user={candidate}/>
            {/* <EducationSection />
            <CertificationsSection />
            <RefereesSection /> */}
          </Col>
        </Row>
        <ToastContainer />
      </div>
    )
  }
}

// export default Page
// export default withCandidatePortal(Page)
//Add $address: String,
const gqlWrapper = gql `
mutation UpdateCandidate(
  $id: MongoID!, $email: String, $username: String, $bvn: String,
  $nationality: String, $gender: EnumCandidateGender, $stateOfResidence: EnumCandidateStateOfResidence,
  $stateOfOrigin: String, $dateOfBirth: Date, $placeOfBirth: String
) {
  candidateUpdateById (record: {
    _id: $id, email: $email, username: $username, bvn: $bvn,
    nationality: $nationality, gender: $gender, stateOfResidence :$stateOfResidence,
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
      address {
        street1
        suburb
        state
        postcode
        country
      }
      stateOfResidence
      experience{
       _id
       companyName
       role
       fromYear
       fromMonth
       toYear
       toMonth
       address
       salary
       duration
       isWorkingHere
      }
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
    update: (data, onComplete) => {
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
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   candidateUpdateById: {
        //     __typename: 'Post',
        //     id: ownProps.id,
        //     votes: ownProps.votes + 1
        //   }
        // }
      }).then(({data}) => {
        onComplete && onComplete();
      }).catch((error)=>{
        console.log(error.graphQLErrors);
        const toastStyle = {
          className: {
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5',
            background: '#f86c6b',
            color: "white"
          },progressClassName: {
            background: '#f5302e'
          }
        }
        if (error.graphQLErrors.length==0)
          toast("Something Went Wrong With your request", {...toastStyle});

        error.graphQLErrors.forEach(error=>{
          switch(error.message) {
            case `E11000 duplicate key error collection: ktt-backend.candidates index: username_1 dup key: { : "${data.username}" }`:
            toast("This Username is taken", {...toastStyle});
            break;
            case `E11000 duplicate key error collection: ktt-backend.candidates index: email_1 dup key: { : "${data.email}" }`:
            toast("This Email is taken", {...toastStyle});
            break;
            default:
            toast("Something Went Wrong", {...toastStyle});
          }
        })
      })
    }
  })
})(Page))
