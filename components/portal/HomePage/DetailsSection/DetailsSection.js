import {Card, CardBody, CardTitle, Row, Col} from 'reactstrap'

export default props => (
<Card>
  <CardBody>
    <Row>
      <Col sm="12">
        <CardTitle className="mb-0">Lastname Firstname</CardTitle>
        <div className="small text-muted">@username </div>
      </Col>
    </Row>
    <hr/>
    <Row>
      <Col sm="4">
        <div className="text-muted"><i className="icon-phone"></i> 08188555611 </div>
      </Col>
      <Col sm="4">
        <div className="text-muted"><i className="icon-envelope"></i> bellooladipupo41@gmail.com </div>
      </Col>
      <Col sm="4">
        <div className="text-muted"><i className="icon-globe"></i> website </div>
      </Col>
    </Row>
  </CardBody>
</Card>
)
