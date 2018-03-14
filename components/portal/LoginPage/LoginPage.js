import {Component} from 'react'
//import Router from 'next/router'

import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap';

class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone: '',
      password: '',
      displayError: '',
      errorMessage: ''
    }
  }

  handlePhoneChange = (event) => {
    const newState = {phone: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  handlePasswordChange = (event) => {
    const newState = {password: event.target.value};
    if (this.state.displayError) {
      newState.displayError = false
    }
    this.setState(newState);
  };

  render(){
    //console.log('this.props');
    const doLogin = (e) => {
      console.log('logging in');
      //console.log(this.state);
      e.preventDefault()
      e.stopPropagation()

      this.props.login({
        phone: this.state.phone,
        password: this.state.password //a
      })
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <Form>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.handlePhoneChange} type="text" placeholder="Phone Number"/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input onChange={this.handlePasswordChange} type="password" placeholder="Password"/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" onClick={doLogin} color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Page
