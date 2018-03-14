import {Component} from 'react'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import JobList from './JobList'
import SaveButton from './SaveButton'

const isEmpty = false;

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This space is lonely
  </p>
)

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }

  toggle(){
      this.setState({modalOpen: !this.state.modalOpen})
  }
  save(){
    console.log('saving');
    setTimeout(()=>this.setState({modalOpen: !this.state.modalOpen}), 2000)
  }

  render(){
    return (
      <Card>
        <CardBody >
          <CardTitle className="mb-0">
            Work Experience {
              (!isEmpty) && (
              <Button className="float-right" size="sm" color="primary" onClick={this.toggle}>
                <i className="icon-plus"></i> Add
              </Button>)
            }
          </CardTitle>
          <hr/> {
            (isEmpty)
            ? (<div className="text-center">
              <EmptySpace/>
              <Button size="lg" color="primary" onClick={this.toggle}>
                <i className="icon-plus"></i> Add Work Experience
              </Button>
            </div>)
            : (<div>
              <JobList />
            </div>)
          }
        </CardBody>
        <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} experience={{}}/>
      </Card>
    )
  }
}

class DetailsModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      role: props.experience.role || '',
      companyName: props.experience.companyName || '',
      address: props.experience.address || '',
      fromMonth: props.experience.fromMonth || '',
      fromYear: props.experience.fromYear || '',
      toMonth: props.experience.toMonth || '',
      toYear: props.experience.toYear || '',
      salary: props.experience.stateOfOrigin || '',
      isWorking: props.experience.isWorking || false,
      details: {}
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(field, value){
    //console.log(this.state);
    const details = this.state;
    delete details.details;
    details[field] = value;
    this.setState({[field]: value});
    this.setState({details: this.state});
  }

  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className='modal-lg modal-info'>
        <ModalHeader toggle={this.props.toggle}>Add Experience</ModalHeader>
        <ModalBody>
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <FormGroup>
              <Label htmlFor="name">Title</Label>
              <Input onChange={(e)=>this.handleFieldChange('role', e.target.value)} defaultValue={this.state.title} type="text" id="name" placeholder="Eg: Manager" required/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Company</Label>
              <Input onChange={(e)=>this.handleFieldChange('companyName', e.target.value)} defaultValue={this.state.company} type="text" id="name" placeholder="Eg: Google" required/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Location</Label>
              <Input onChange={(e)=>this.handleFieldChange('address', e.target.value)} defaultValue={this.state.location} type="text" id="name" placeholder="Eg: Kubwa, Abuja" required/>
            </FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label htmlFor="name">From</Label>
                <Input onChange={(e)=>this.handleFieldChange('fromMonth', e.target.value)} defaultValue={this.state.fromMonth} style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                <Input onChange={(e)=>this.handleFieldChange('fromYear', e.target.value)} defaultValue={this.state.fromYear} type="text" id="name" placeholder="Year" required/>
              </Col>
              <Col md="6">
                <Label htmlFor="name">To</Label>
                <Input onChange={(e)=>this.handleFieldChange('toMonth', e.target.value)} defaultValue={this.state.toMonth} style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                <Input onChange={(e)=>this.handleFieldChange('toYear', e.target.value)} defaultValue={this.state.toYear} type="text" id="name" placeholder="Year" required/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Salary (optional)</Label>
              <Input onChange={(e)=>this.handleFieldChange('salary', e.target.value)} defaultValue={this.state.salary} type="text" id="name" placeholder="Eg: $30 billion for the account" required/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <SaveButton details={this.state.details} close={this.props.toggle}/>{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
