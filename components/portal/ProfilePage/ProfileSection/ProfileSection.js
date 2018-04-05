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
import { toast } from 'react-toastify';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ProfileSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.user.email || '',
      username: props.user.username || '',
      emailValid: EMAIL_REGEX.test(String(props.user.email).toLowerCase()),

    }
  }

  handleEmailChange = (event) => {
    if (EMAIL_REGEX.test(String(event.target.value).toLowerCase())){
      this.setState({email: event.target.value, emailValid: true});
    } else {
      this.setState({emailValid: false});
    }
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
      // console.log('updating');
      //console.log(this.state);
      e.preventDefault()
      e.stopPropagation()

      if (this.state.emailValid){
        this.props.update({
          id: this.props.user._id,
          email: this.state.email,
          username: this.state.username
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
      } else {
        const toastStyle = {
          className: {
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5',
            background: '#f86c6b',
            color: "white"
          },progressClassName: {
            background: '#f5302e'
          }
        }
        toast("Not succesful: Please Validate your inputs", {...toastStyle});
      }
    }

    const user = this.props.user || {};

    return (
      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
      <Card>
      <CardBody >
        <Row>
          <Col sm="5">
            <CardTitle className="mb-0">Edit Profile</CardTitle>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm="12">
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">First Name</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="First name" required value={user.name.first}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Last Name</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="Last name" required value={user.name.last}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Email</Label>
                <Input valid={this.state.emailValid} type="email" id="name" placeholder="Email address" required defaultValue={this.state.email} onChange={this.handleEmailChange}/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Phone</Label>
                  <Input type="text" id="name" disabled="disabled" placeholder="Phone number" required value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Username</Label>
                  <Input type="text" id="name" placeholder="Username" required defaultValue={this.state.username} onChange={this.handleUsernameChange}/>
                </Col>
              </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Button onClick={doUpdate} className="float-right" type="submit" size="sm" color="primary">
          <i className="fa fa-dot-circle-o"></i>
          Update Profile</Button>
      </CardFooter>
    </Card>
    </Form>
  )
  }
}

export default ProfileSection
