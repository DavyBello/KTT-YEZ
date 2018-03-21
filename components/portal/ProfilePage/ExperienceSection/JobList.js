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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import DetailsModal from './DetailsModal'
import DeleteButton from './DeleteButton'

class JobList extends Component {
  constructor(props){
    super(props)
    this.state = {
      showConfirmModal: false,
      modalOpen: false,
      isEmpty: true,
      selectedjob: {},
      deleteJobId: ''
    }
    this.toggle = this.toggle.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
    this.save = this.save.bind(this);
  }
  toggle(job){
    // console.log(job);
    this.setState({selectedjob: job})
    this.setState({modalOpen: !this.state.modalOpen})
  }
  toggleConfirm(job){
    this.setState({deleteJobId: job._id || ''})
    this.setState({showConfirmModal: !this.state.showConfirmModal})
  }
  save(){
    //console.log('saving');
    setTimeout(()=>this.setState({modalOpen: !this.state.modalOpen}), 2000)
  }

 render(){
   const {viewerCandidate = {}} = this.props.data || {viewerCandidate: []};
   //console.log(viewerCandidate);
   return(
    <ListGroup>
      {viewerCandidate.candidate.experience.map((job, index)=>(
        <ListGroupItem key={index}>
          <ListGroupItemHeading>{job.role}
            <div className="float-right">
              <Button onClick={()=>this.toggle(job)} className="btn-sm" outline color="primary"><i className="icon-pencil"></i>&nbsp; Edit</Button>
              {' '}<Button onClick={()=>this.toggleConfirm(job)} className="btn-sm" outline color="danger"><i className="icon-trash"></i></Button>
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
      <Modal isOpen={this.state.showConfirmModal} toggle={()=>this.toggleConfirm({})} className='modal-md modal-info' centered={true}>
        <ModalBody className="text-center">
          <p className={'h5'}>Are you sure you want to delete this experience?</p>
        </ModalBody>
        <ModalFooter>
          <DeleteButton details={{id: this.state.deleteJobId}} toggleConfirm={()=>this.toggleConfirm({})}/>
          <Button color="secondary" onClick={this.toggleConfirm}>No thanks</Button>
        </ModalFooter>
      </Modal>
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
          fromYear
          fromMonth
          toYear
          toMonth
          address
          salary
          duration
          isWorkingHere
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
