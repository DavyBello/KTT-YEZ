import { Component } from 'react'
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

import DetailsModal from './DetailsModal'

class JobList extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      isEmpty: true,
      selectedjob: {}
    }
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }
  toggle(job){
    console.log(job);
    this.setState({selectedjob: job})
    this.setState({modalOpen: !this.state.modalOpen})
  }
  save(){
    console.log('saving');
    setTimeout(()=>this.setState({modalOpen: !this.state.modalOpen}), 2000)
  }

 render(){
   const {viewerCandidate = {}} = this.props.data || {viewerCandidate: []};
   //console.log(viewerCandidate);
   if (viewerCandidate.candidate.experience.length>0)
    this.props.setIsEmpty(false)
   return(
    <ListGroup>
      {viewerCandidate.candidate.experience.map((job, index)=>(
        <ListGroupItem key={index}>
          <ListGroupItemHeading>{job.role}
            <div className="float-right">
              <Button onClick={()=>this.toggle(job)} className="btn-sm" outline color="primary"><i className="icon-pencil"></i>&nbsp; Edit</Button>
              {/* {' '}<Button className="btn-sm" outline color="danger"><i className="icon-trash"></i></Button> */}
            </div>
          </ListGroupItemHeading>
          <div>
            <p style={{marginBottom: '0px'}}><i className="icon-briefcase"></i> {job.companyName}</p>
            <p style={{marginBottom: '0px'}}>{job.duration || 'Jan, 2016 - Present  |  2 Years.'}</p>
            <p >{job.address}</p>
          </div>
        </ListGroupItem>
      ))}
      <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} experience={this.state.selectedjob}/>
    </ListGroup>
   )
  }
}

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
