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
  Input
} from 'reactstrap'

class ProfileSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.user.email || '',
      username: props.user.username || '',
    }
  }

  handleEmailChange = (event) => {
    const newState = {
      email: event.target.value
    };
    // if (this.state.displayError) {
    //   newState.displayError = false
    // }
    this.setState(newState);
  };

  handleUsernameChange = (event) => {
    const newState = {
      username: event.target.value
    };
    // if (this.state.displayError) {
    //   newState.displayError = false
    // }
    this.setState(newState);
  };

  render() {
    // console.log('this.propsopo');
    // console.log(this.props);
    const doUpdate = (e) => {
      console.log('updating');
      //console.log(this.state);
      e.preventDefault()
      e.stopPropagation()

      this.props.update({
        id: this.props.user._id,
        email: this.state.email,
        username: this.state.username
      })
    }

    const user = this.props.user || {};

    return (<Card>
      <CardBody >
        <Row>
          <Col sm="5">
            <CardTitle className="mb-0">Edit Profile</CardTitle>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm="12">
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">First Name</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="First name" required="required" value={user.name.first}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Last Name</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="Last name" required="required" value={user.name.last}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Email</Label>
                <Input type="text" id="name" placeholder="Email address" required="required" defaultValue={this.state.email} onChange={this.handleEmailChange}/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Phone</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="Phone number" required="required" value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Username</Label>
                  <Input type="text" id="name" placeholder="Username" required="required" defaultValue={this.state.username} onChange={this.handleUsernameChange}/>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Button onClick={doUpdate} className="float-right" type="submit" size="sm" color="primary">
          <i className="fa fa-dot-circle-o"></i>
          Update Profile</Button>
      </CardFooter>
    </Card>)
  }
}

export default ProfileSection
