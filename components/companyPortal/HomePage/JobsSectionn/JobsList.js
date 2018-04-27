import { Component } from 'react'
import {Query} from 'react-apollo'
import moment from 'moment'

import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip
} from 'reactstrap';

import { prettifyState } from '../../../../utils/common'

import DetailsModal from './DetailsModal'
import DeleteButton from './DeleteButton'

export default class EducationList extends Component {
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
   return(
    <div>
      <ListGroup>
        {this.props.company.jobs.map((job, index)=>(
          <ListGroupItem key={index} className="animated fadeIn">
            <ListGroupItemHeading>
              <div className="float-right">
                <Button onClick={()=>this.toggle(job)} className="btn-sm" outline color="primary"><i className="icon-pencil"></i>&nbsp; Edit</Button>
                {' '}<Button onClick={()=>this.toggleConfirm(job)} className="btn-sm" outline color="danger"><i className="icon-trash"></i></Button>
              </div>
              <a href="#!" id={`UncontrolledTooltipExample${index}`}>
                <i className={job.isOnDisplay ? 'text-success icon-check' : 'text-danger icon-close'}></i>
              </a>
              <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample${index}`}>
                 {job.isOnDisplay ? 'is being displayed' : 'is not being displayed'}
               </UncontrolledTooltip>
              {' '}{job.role}
            </ListGroupItemHeading>
            <div>
              <p style={{marginBottom: '0px'}}><i className="icon-organization"></i> {this.props.company.name}</p>
              <p className="text-muted" style={{marginBottom: '0px', fontWeight: '300', lineHeight: '1.2'}}>
                {`${job.address}, ${prettifyState(job.state)}`}
              </p>
              <p style={{marginBottom: '0px', fontWeight: '300', lineHeight: '1.2'}}>
                {job.basicDescription}
              </p>
              <p className="text-muted">{`${moment(job.publishedDate).from(this.props.currentTime)}`}</p>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} job={this.state.selectedjob}/>
      <Modal isOpen={this.state.showConfirmModal} toggle={()=>this.toggleConfirm({})} className='modal-md modal-danger' centered>
        <ModalBody className="text-center">
          <p className={'display-4 text-danger'} style={{fontSize: '1.9rem'}}>Are you sure you want to delete this jobs?</p>
        </ModalBody>
        <ModalFooter>
          <DeleteButton details={{id: this.state.deleteJobId}} toggleConfirm={()=>this.toggleConfirm({})}/>
          <Button color="secondary" onClick={this.toggleConfirm}>No thanks</Button>
        </ModalFooter>
      </Modal>
    </div>
   )
  }
}
