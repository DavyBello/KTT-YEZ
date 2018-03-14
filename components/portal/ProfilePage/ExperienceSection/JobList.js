import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Button
} from 'reactstrap';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Altitude Technology',
    duration: 'Jan, 2018 - Present  |  3 months.',
    location: 'Kubwa, Abuja.'
  },{
    title: 'CEO',
    company: 'The411ng',
    duration: 'Jan, 2016 - Present  |  2 Years.',
    location: 'Garki, Abuja.'
  }
]

 const JobList = props => {
   const {viewerCandidate = {}} = props.data || {viewerCandidate: []};
   //console.log(viewerCandidate);
   return(
  <ListGroup>
    {viewerCandidate.candidate.experience.map((job, index)=>(
      <ListGroupItem key={index}>
        <ListGroupItemHeading>{job.role} <Button className="btn-sm" outline color="primary float-right"><i className="icon-pencil"></i>&nbsp; Edit</Button></ListGroupItemHeading>
        <div>
          <p style={{marginBottom: '0px'}}><i className="icon-briefcase"></i> {job.companyName}</p>
          <p style={{marginBottom: '0px'}}>{job.duration || 'Jan, 2016 - Present  |  2 Years.'}</p>
          <p >{job.address}</p>
        </div>
      </ListGroupItem>
    ))}
  </ListGroup>
 )}

 export const ViewerCandidateExperienceQuery = gql`
   query ViewerCandidateQuery{
     viewerCandidate {
       candidate {
         _id
         id
         experience{
          _id
          companyName
          role
          address
          salary
         }
       }
     }
   }
 `

 export default graphql(ViewerCandidateExperienceQuery, {
   props: ({ data }) => ({
     data
   })
 })(JobList)
