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
            <CardTitle className="mb-0">Edit Additional Details</CardTitle>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm="12">
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup>
                <Label htmlFor="name">Address</Label>
                <Input type="text" id="name" placeholder="Email address" required="required" value={user.email}/>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">BVN</Label>
                  <Input type="text" id="name" placeholder="Phone number" required="required" value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Nationality</Label>
                  <Input type="text" id="name"  required="required" value={user.username}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Gender</Label>
                  <Input type="text" id="name" required="required" value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">State of Origin</Label>
                  <Input type="text" id="name"  required="required" value={user.username}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Date Of Birth</Label>
                  <Input type="text" id="name" placeholder="Phone number" required="required" value={user.phone}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Place of Birth</Label>
                  <Input type="text" id="name"  required="required" value={user.username}/>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Button className="float-right" type="submit" size="sm" color="primary">
          <i className="fa fa-dot-circle-o"></i>
          Update Details</Button>
      </CardFooter>
    </Card>
  )
}
