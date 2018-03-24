import {Component} from 'react'
//import Router from 'next/router'
import {
  Container, Form, Row, Col,
  Card, CardBody, CardFooter,
  Button, Input, InputGroup,
  InputGroupAddon, InputGroupText,
  Modal, ModalBody, ModalFooter,
  ModalHeader
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      confirmPassword: '',
      displayError: '',
      errorMessage: '',
      messageType: '',
      showConfirmModal: false,
      valid: null
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
    this.toggleConfirm = this.toggleConfirm.bind(this)
  }

  handleFieldChange(field, value){
    this.setState({[field]: value});
  }

  handleConfirmPasswordChange = (field, value) => {
    //console.log(field + value);
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if (field==='password') {
      this.setState({password: value});
      // if (confirmPassword.length < password.length)
      //   this.setState({valid: false});
      password = value
    }
    if (field==='confirmPassword') {
      this.setState({confirmPassword: value});
      confirmPassword = value
    }
    if (confirmPassword.length >= password.length) {
      if (confirmPassword==password){
        // console.log('match');
        this.setState({
          valid: true,
          errorMessage: 'match',
        });
      } else {
        // console.log('misMatch');
        this.setState({
          valid: false,
          errorMessage: 'not a match',
        });
      }
    } else {
      this.setState({
        valid: (field==='password'&&confirmPassword)? false : null,
        messageType: '',
        errorMessage: '',
      });
    }
  };

  toggleConfirm(){
    //this.setState({deleteJobId: job._id || ''})
    this.setState({showConfirmModal: !this.state.showConfirmModal})
  }

  doRegister = (e) => {
    console.log('registering candidate');
    e.preventDefault()
    e.stopPropagation()

    if (this.state.proceed) {
      this.props.register({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        password: this.state.password
      },()=>{
        //function runs if update is sucessfull
        const toastStyle = {
          className: {
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5',
            background: "#4dbd74",
            color: "white"
          },progressClassName: {
            background: "#3a9d5d"
          }
        }
        toast("Your Profile Details have been updated", {...toastStyle});
      })
    }
  }

  render(){
    //console.log('this.props');
    return (
      <div className="app flex-row align-items-center">
        <ToastContainer />
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <Form>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e)=>this.handleFieldChange('firstName', e.target.value)} type="text" placeholder="First Name"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e)=>this.handleFieldChange('lastName', e.target.value)} type="text" placeholder="Last Name"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e)=>this.handleFieldChange('phone', e.target.value)} type="text" placeholder="Phone no."/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input onChange={(e)=>this.handleConfirmPasswordChange('password', e.target.value)} type="password" placeholder="Password"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(e)=>this.handleConfirmPasswordChange('confirmPassword', e.target.value)}
                        valid={this.state.valid}
                        type="password" placeholder="Repeat password"/>
                    </InputGroup>
                    <Button onClick={this.toggleConfirm} color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
          <Modal isOpen={this.state.showConfirmModal} toggle={()=>this.toggleConfirm({})} className='modal-md modal-info' centered={true}>
            <ModalBody className="text-center">
              <p className='display-4 text-primary' style={{fontSize: '1.6rem'}}>Take a second to confirm your details</p>
              <hr />
              <div className='display-4' style={{fontSize: '1.5rem'}}><i className="icon-user text-primary"></i> {`${this.state.lastName} ${this.state.firstName}`}</div>
              <div className='display-4' style={{fontSize: '1.5rem'}}><i className="icon-phone text-primary"></i> {this.state.phone}</div>
            </ModalBody>
            <ModalFooter>
              {/* <DeleteButton details={{id: this.state.deleteJobId}} toggleConfirm={()=>this.toggleConfirm({})}/> */}
              <Button color="primary" onClick={this.toggleConfirm}>Ok I'm Sure</Button>
              <Button color="danger" onClick={this.toggleConfirm}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    )
  }
}

export default Page
