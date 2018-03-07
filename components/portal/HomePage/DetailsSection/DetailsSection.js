import {Card, CardBody, CardTitle, Row, Col} from 'reactstrap'

const styles = {
  image: {
    maxWidth: '60px',
    marginBottom: '10px'
  },
  details: {
    marginLeft: '-15px',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  }
}

export default props => (
<Card>
  <CardBody>
    <Row>
      <Col sm="12">
        <Row>
          <Col md="1">
            <img style={styles.image} src={'/static/images/5.jpg'} className="img-avatar" alt="bellooladipupo41@gmail.com"/>
          </Col>
          <Col md="11" style={styles.details}>
            <div>
              <CardTitle className="mb-0">Lastname Firstname</CardTitle>
              <div className="small text-muted">@username </div>
            </div>
          </Col>
        </Row>
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
