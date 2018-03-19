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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import SaveButton from './SaveButton'
import UpdateButton from './UpdateButton'

export default class DetailsModal extends Component{
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      role: '',
      companyName: '',
      address: '',
      fromMonth: '',
      fromYear:  '',
      toMonth: '',
      toYear: '',
      salary: '',
      isWorking: false,
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
  const {experience = {}} = this.props
  this.state.details.id = experience._id || null;
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className='modal-lg modal-info'>
        <ModalHeader toggle={this.props.toggle}>Add Experience</ModalHeader>
        <ModalBody>
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <FormGroup>
              <Label htmlFor="name">Role/Position</Label>
              <Input onChange={(e)=>this.handleFieldChange('role', e.target.value)} defaultValue={experience.role} type="text" id="name" placeholder="Eg: Manager" required/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Company</Label>
              <Input onChange={(e)=>this.handleFieldChange('companyName', e.target.value)} defaultValue={experience.companyName} type="text" id="name" placeholder="Eg: Google" required/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Location</Label>
              <Input onChange={(e)=>this.handleFieldChange('address', e.target.value)} defaultValue={experience.address} type="text" id="name" placeholder="Eg: Kubwa, Abuja" required/>
            </FormGroup>
            <FormGroup row>
              <Col md="6">
                <Label htmlFor="name">From</Label>
                <Input onChange={(e)=>this.handleFieldChange('fromMonth', e.target.value)} defaultValue={experience.fromMonth} style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                <Input onChange={(e)=>this.handleFieldChange('fromYear', e.target.value)} defaultValue={experience.fromYear} type="text" id="name" placeholder="Year" required/>
              </Col>
              <Col md="6">
                <Label htmlFor="name">To</Label>
                <Input onChange={(e)=>this.handleFieldChange('toMonth', e.target.value)} defaultValue={experience.toMonth} style={{marginBottom: '10px'}} type="text" id="name" placeholder="Month" required/>
                <Input onChange={(e)=>this.handleFieldChange('toYear', e.target.value)} defaultValue={experience.toYear} type="text" id="name" placeholder="Year" required/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name">Salary (optional)</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ5Ni4yNjIgNDk2LjI2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2LjI2MiA0OTYuMjYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ3Ny44MzIsMjc0LjI4aC02Ny43NDN2LTY1LjEwNmg2Ny43NDNjMTAuMTc5LDAsMTguNDMtOC4yNDMsMTguNDMtMTguNDI0YzAtMTAuMTgyLTguMjUxLTE4LjQzLTE4LjQzLTE4LjQzaC02Ny43NDMgICBWODEuOTgyYzAtMTMuMTg3LTIuNjA2LTIyLjg2Ni03Ljc0My0yOC43NjJjLTQuODgyLTUuNjA5LTExLjMwMS04LjIxOS0yMC4xOS04LjIxOWMtOC40ODIsMC0xNC42NTksMi41OTItMTkuNDQ3LDguMTY2ICAgYy01LjA3Nyw1LjkwMi03LjY1NCwxNS41OTktNy42NTQsMjguODIxdjkwLjM0M0gyMjcuNjI3bC01NC4xODEtODEuOTg4Yy00LjYzNy03LjMxNy04Ljk5Ny0xNC4xNzEtMTMuMjMxLTIwLjc1ICAgYy0zLjgxMi01LjkyNS03LjUzLTEwLjc0OS0xMS4wNDItMTQuMzUxYy0zLjEwOS0zLjE4OS02LjY1Mi01LjY1Ny0xMC43OTYtNy41NTRjLTMuOTEtMS43ODUtOC44ODEtMi42ODEtMTQuNzYyLTIuNjgxICAgYy03LjUwMSwwLTE0LjMxLDIuMDU1LTIwLjgzLDYuMjc3Yy02LjQ1Miw0LjE3Ni0xMC45MTIsOS4zMzktMTMuNjM2LDE1Ljc4NWMtMi4zOTEsNi4xMjYtMy42NTYsMTUuNTEzLTMuNjU2LDI3LjYzdjc3LjYyNmgtNjcuMDcgICBDOC4yNDYsMTcyLjMyNiwwLDE4MC41NzQsMCwxOTAuNzU1YzAsMTAuMTgxLDguMjQ2LDE4LjQyNCwxOC40MjQsMTguNDI0aDY3LjA3djY1LjExM2gtNjcuMDdDOC4yNDYsMjc0LjI5MiwwLDI4Mi41MzgsMCwyOTIuNzIyICAgQzAsMzAyLjksOC4yNDYsMzExLjE0LDE4LjQyNCwzMTEuMTRoNjcuMDd2MTAzLjE0M2MwLDEyLjc5NywyLjY4OSwyMi4zNzgsOC4wMTUsMjguNDY2YzUuMDY1LDUuODA1LDExLjQ4Nyw4LjUsMjAuMjA4LDguNSAgIGM4LjQxNCwwLDE0Ljc4Ni0yLjcwNywyMC4wNy04LjUyM2M1LjQxMS01Ljk1OCw4LjE0OC0xNS41MzMsOC4xNDgtMjguNDQyVjMxMS4xNGgxMTUuMzA4bDYyLjM5OSw5NS42ODMgICBjNC4zMzksNi4zMjUsOC44MTksMTIuNzA5LDEzLjI4NywxOC45NjljNC4wMzEsNS42MjEsOC40MjksMTAuNTc0LDEzLjA2OSwxNC43MTFjNC4xNzksMy43NDIsOC42NTksNi40ODQsMTMuMzE2LDguMTU3ICAgYzQuNzk0LDEuNzI2LDEwLjM5NywyLjYwMSwxNi42MTUsMi42MDFjMTYuODc1LDAsMzQuMTU4LTUuMTY2LDM0LjE1OC00My40NzlWMzExLjE0aDY3Ljc0M2MxMC4xNzksMCwxOC40My04LjI1MiwxOC40My0xOC40MyAgIEM0OTYuMjYyLDI4Mi41MzIsNDg4LjAxMSwyNzQuMjgsNDc3LjgzMiwyNzQuMjh6IE0zNTUuMDU0LDIwOS4xNzN2NjUuMTA2aC02MC4wNDFsLTQzLjAyMS02NS4xMDZIMzU1LjA1NHogTTE0MS45MzYsMTM0LjM2NCAgIGwyNC43NiwzNy45NTZoLTI0Ljc2VjEzNC4zNjR6IE0xNDEuOTM2LDI3NC4yOHYtNjUuMTA2aDQ4LjgwMmw0Mi40NjYsNjUuMTA2SDE0MS45MzZ6IE0zNTUuMDU0LDM2NS4xNTNsLTM1LjY4My01NC4wMTNoMzUuNjgzICAgVjM2NS4xNTN6IiBmaWxsPSIjM2U1MTViIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input onChange={(e)=>this.handleFieldChange('salary', e.target.value)} defaultValue={experience.salary} type="text" id="name" placeholder="Eg: $30 billion for the account" required/>
              </InputGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {(this.props.isNew) ? (
            <SaveButton details={this.state.details} close={this.props.toggle}/>
          ) : (
            <UpdateButton details={this.state.details} close={this.props.toggle}/>
          )}{' '}
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
