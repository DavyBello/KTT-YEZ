import {Component} from 'react'
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import Img from 'react-image'

export default class DetailsModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      fileName: '',
      fileURL: '',
      uploadedBy: '',
      details: {}
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState(){
    this.setState({
      fileName: '',
      fileURL: '',
      uploadedBy: '',
      details: {}
    })
  }

  componentWillReceiveProps(nextProps){
    // this.resetState();
    const {file = {}, isNew} = nextProps;
    // this.setState({})
    // if (!isNew && doc._id) {
    //   if (doc._id) {
    //     this.setState({
    //       ...doc,
    //       id: doc._id || null,
    //       firstName: doc.name.first || '',
    //       lastName: doc.name.last || '',
    //       details: {
    //         ...doc,
    //         id: doc._id || null,
    //         firstName: doc.name.first || '',
    //         lastName: doc.name.last || ''
    //       }
    //     })
    //   }
    // }
  }

  handleFieldChange(field, value){
    this.setState({[field]: value});
    this.updateDetails(field, value);

  }

  updateDetails(field, value){
    const details = this.state;
    delete details.details;
    details[field] = value;
    this.setState({details: this.state});
  }

  render(){
    // console.log(this.props.file);
    const {file={}} = this.props;
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className='modal-lg modal-teal'>
        <ModalHeader toggle={this.props.toggle}>Add Document</ModalHeader>
        <Form encType="multipart/form-data" className="form-horizontal">
        <ModalBody>
          <FormGroup>
            <Img
              src={file.preview}
              style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Document Name</Label>
              <Input type="text" id="name" placeholder="Eg: WAEC Result" required
                onChange={(e)=>this.handleFieldChange('fileName', e.target.value)}
                defaultValue={this.state.fileName}/>
              <FormText className="mb-3" style={{fontSize: '10px'}} color="danger"><i>Name of the document to be uploaded</i></FormText>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={this.props.toggle} disabled={this.state.fileName.length > 5 ? false: true}>Upload</Button>
          {' '}<Button type="reset" color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Form>
      </Modal>
    )
  }
}
