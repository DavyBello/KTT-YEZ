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

// import DetailsModal from './DetailsModal'

export default class EducationList extends Component {
  constructor(props){
    super(props)
    this.state = {
      showConfirmModal: false,
      modalOpen: false,
      isEmpty: true,
      selecteddoc: {},
      deleteJobId: ''
    }
    this.toggle = this.toggle.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
    this.save = this.save.bind(this);
  }
  toggle(doc){
    // console.log(doc);
    this.setState({selecteddoc: doc})
    this.setState({modalOpen: !this.state.modalOpen})
  }
  toggleConfirm(doc){
    this.setState({deleteJobId: doc._id || ''})
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
        {this.props.candidate.documents.map((doc, index)=>(
          <ListGroupItem key={index} className="animated fadeIn">
            <ListGroupItemHeading>
              {/* <div className="float-right">
                <Button onClick={()=>this.toggle(doc)} className="btn-sm" outline color="primary"><i className="icon-pencil"></i>&nbsp; View</Button>
              </div>
              <a href="#!" id={`UncontrolledTooltipExample${index}`}>
                <i className={doc.isVerified ? 'text-success icon-check' : 'text-danger icon-close'}></i>
              </a>
              <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample${index}`}>
               {doc.isVerified ? 'has been verified' : 'has not been verified'}
             </UncontrolledTooltip> */}
              {` ${doc.fileTitle}- ${doc.fileURL}`}
            </ListGroupItemHeading>
            <ListGroupItemText>
              {/* <p style={{marginBottom: '0px'}}><i className="icon-envelope"></i> {doc.email} </p>
              <p><i className="icon-phone"></i> {doc.phone}</p> */}
            </ListGroupItemText>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} doc={this.state.selecteddoc}/> */}
    </div>
   )
  }
}
