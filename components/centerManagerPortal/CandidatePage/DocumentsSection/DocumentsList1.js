import { Component } from 'react'
import dynamic from 'next/dynamic'
import {Query} from 'react-apollo'
import moment from 'moment'

import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip
} from 'reactstrap';
import Img from 'react-image'
// import Lightbox from 'react-image-lightbox'
import Dropzone from 'react-dropzone'

import { prettifyState } from '../../../../utils/common'

const Lightbox = dynamic(import('./LightBox');
// import DetailsModal from './DetailsModal'

export default class EducationList extends Component {
  constructor(props){
    super(props)
    this.state = {
      showConfirmModal: false,
      modalOpen: false,
      isEmpty: true,
      selecteddoc: {},
      deleteJobId: '',
      images: props.candidate.documents.map((doc)=>doc.fileURL),
      photoIndex: 0,
      isOpen: false,
      files: []
    }
    this.toggle = this.toggle.bind(this);
    this.toggleConfirm = this.toggleConfirm.bind(this);
    this.save = this.save.bind(this);
  }

  onDrop(files) {
    // console.log(files);
    this.setState({
      files
    });
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
   const { photoIndex, isOpen, images, files } = this.state;
   return(
    <div>
      <Row>
        <Col xs="12" sm="4" md="3">
          <Card className="border-teal">
            <CardHeader>
              <b>Upload Document</b>
            </CardHeader>
            <CardBody>
              <Dropzone onDrop={this.onDrop.bind(this)}
                style={{
                  borderStyle: 'inherit',
                  borderRadius: '5px'
                }}
                accept="image/*"
                multiple={false}>
                <div className="text-center">
                    <p className="display-3"><i className="icon-cloud-upload"></i></p>
                    <p>Drop a file here or click to upload</p>
                    {/* {files.map(file=><img src={file.preview}/>)} */}
                </div>
              </Dropzone>
            </CardBody>
          </Card>
        </Col>
        {this.props.candidate.documents.map((doc, index)=>(
          <Col xs="12" sm="4" md="3">
            <Card className="border-teal">
              <CardHeader>
                <b>{doc.fileTitle}</b>
                <div className="float-right">
                  <Button onClick={()=>this.toggleConfirm(doc)} className="btn-sm" outline color="danger"><i className="icon-close"></i></Button>
                </div>
              </CardHeader>
              <CardBody>
                <div style={{height: '160px', margin: 'auto'}}
                  onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
                  <Img src={doc.fileURL} />
                </div>
              </CardBody>
            </Card>
          </Col>
          )
        )}
        {/* {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            />
          )}
             */}
        {/* <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} doc={this.state.selecteddoc}/> */}
      </Row>
    </div>
   )
  }
}
