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

export default props => {
  const user = props.user || {};
  return (
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
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">First Name</Label>
                  <Input type="text" id="name" disabled placeholder="First name" required="required" value={user.name.first}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Last Name</Label>
                  <Input type="text" id="name" disabled placeholder="Last name" required="required" value={user.name.last}/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Email</Label>
                <Input type="text" id="name" placeholder="Email address" required="required" value={user.email}/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Phone</Label>
                  <Input type="text" id="name" disabled placeholder="Phone number" required="required" value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Username</Label>
                  <Input type="text" id="name" placeholder="Username" required="required" value={user.username}/>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Button className="float-right" type="submit" size="sm" color="primary">
          <i className="fa fa-dot-circle-o"></i>
          Update Profile</Button>
      </CardFooter>
    </Card>
  )
}
