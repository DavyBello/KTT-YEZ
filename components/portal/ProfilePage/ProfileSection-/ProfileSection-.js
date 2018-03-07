import {Card, CardBody, Button, CardTitle, CardFooter, Row, Col, Form, FormGroup, Label, FormText, Input,} from 'reactstrap'

export default props => (
  <Card>
  <CardBody > <Row>
    <Col sm="5">
      <CardTitle className="mb-0">Edit Profile</CardTitle>
    </Col>
  </Row>
  <hr/>
  <Row>
    <Col sm="12">
      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
        <FormGroup row="row">
          <Col md="6">
            <Label htmlFor="name">FIRST NAME</Label>
            <Input type="text" id="name" placeholder="First name" required/>
          </Col>
          <Col md="6">
            <Label htmlFor="name">LAST NAME</Label>
            <Input type="text" id="name" placeholder="Last name" required/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">EMAIL</Label>
          <Input type="text" id="name" placeholder="Email address" required/>
        </FormGroup>
        <FormGroup row="row">
          <Col md="6">
            <Label htmlFor="name">PHONE</Label>
            <Input type="text" id="name" placeholder="Phone number" required/>
          </Col>
          <Col md="6">
            <Label htmlFor="name">USERNAME</Label>
            <Input type="text" id="name" placeholder="Username" required/>
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
