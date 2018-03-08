import {Card, CardBody, CardTitle, Row, Col} from 'reactstrap'

const styles = {
  image: {
    maxWidth: '90px',
    marginBottom: '10px'
  }
}
export default props => (
<Card className="text-center">
  <CardBody>
    <Row>
      <Col sm="12">
        <img style={styles.image} src={'/static/images/5.jpg'} className="img-avatar" alt="bellooladipupo41@gmail.com"/>
        <CardTitle className="mb-0">Lastname Firstname</CardTitle>
        <div className="small text-muted">@username </div>
      </Col>
    </Row>
    <hr/>
    <div className="text-muted"><i className="icon-phone"></i> 08188555611 </div>
    <div className="text-muted"><i className="icon-envelope"></i> bellooladipupo41@gmail.com </div>
  </CardBody>
</Card>
)
