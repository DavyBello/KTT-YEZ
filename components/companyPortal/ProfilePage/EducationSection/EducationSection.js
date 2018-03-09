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

import EducationList from './EducationList'

const education = [
  {
    school: "Redeemer's University",
    degree: 'Bachelor of Science - BSc(Hons)',
    field: 'Computer Science',
    duration: '2012 - 2016'
  }
]

const isEmpty = false;

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This Space is empty
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
            Education {
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
                <i className="icon-plus"></i> Add Education
              </Button>
            </div>)
            : (<div>
              <EducationList education={education}/>
            </div>)
          }
        </CardBody>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle} className='modal-lg modal-info'>
          <ModalHeader toggle={this.toggle}>Add Education</ModalHeader>
          <ModalBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup>
                <Label htmlFor="name">School</Label>
                <Input type="text" id="name" required/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Degree</Label>
                <Input type="text" id="name" required/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Field of study</Label>
                <Input type="text" id="name" required/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Grade</Label>
                <Input type="text" id="name" required/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">From Year</Label>
                  <Input type="text" id="name" required/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">To Year (or expected)</Label>
                  <Input type="text" id="name" required/>
                </Col>
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
