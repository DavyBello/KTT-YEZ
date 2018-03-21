import {Component} from 'react'
//import Router from 'next/router'
import {Container, Form, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: 'aa',
      displayError: '',
      errorMessage: '',
      messageType: '',
      proceed: false
    }

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
  }

  handleFieldChange(field, value){
    this.setState({[field]: value});
  }

  doCheck(){
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    console.log(password);
    console.log(confirmPassword);
  }

  handleConfirmPasswordChange = (field, value) => {
    this.setState({[field]: value});
    if (field==='password') {
      password = value
    }
    if (field==='confirmPassword') {
      confirmPassword = value
    }
    if (confirmPassword.length === password.length) {
      console.log('a');
      if (confirmPassword==password){
        console.log('match');
        this.setState({
          messageType: 'success',
          errorMessage: 'match',
        });
      } else {
        console.log('misMatch');
        this.setState({
          messageType: 'error',
          errorMessage: 'not a match',
        });
      }
    } else {
      console.log('b');
      this.setState({
        messageType: '',
        errorMessage: '',
      });
    }
  };

  render(){
    //console.log('this.props');
    const doRegister = (e) => {
      console.log('registering candidate');
      e.preventDefault()
      e.stopPropagation()

      if (this.state.proceed) {
        this.props.register({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password: this.state.password
        })
      }
    }
    return (
      <div className="app flex-row align-items-center">
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
                        onChange={(e)=>this.handleConfirmPasswordChange('invalidPassword', e.target.value)}
                        valid={(this.state.messageType==='success')?true:null}
                        inValid={(this.state.messageType==='error')?true:null}
                        type="password" placeholder="Repeat password"/>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
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
        </Container>
      </div>
    )
  }
}

export default Page
