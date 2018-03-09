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
const isEmpty = true;

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
  }

  toggle(){
      this.setState({modalOpen: !this.state.modalOpen})
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
              <JobList jobs={experiences}/>
            </div>)
          }
        </CardBody>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} className='modal-lg modal-info'>
          <ModalHeader toggle={this.toggle}>Add Experience</ModalHeader>
          <ModalBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup>
                <Label htmlFor="name">Title</Label>
                <Input type="text" id="name" placeholder="Eg: Manager" required/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Company</Label>
                <Input type="text" id="name" placeholder="Eg: Google" required/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Location</Label>
                <Input type="text" id="name" placeholder="Eg: Kubwa, Abuja" required/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">From</Label>
                  <Input style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                  <Input type="text" id="name" placeholder="Year" required/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">TO</Label>
                  <Input style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                  <Input type="text" id="name" placeholder="Year" required/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Salary (optional)</Label>
                <Input type="text" id="name" placeholder="Eg: $30 billion for the account" required/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Card>
    )
  }
}
