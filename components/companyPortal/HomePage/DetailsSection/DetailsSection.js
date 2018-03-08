import {Card, CardBody, CardTitle, CardGroup, Row, Col} from 'reactstrap'

const styles = {
  image: {
    maxHeight: '80px',
    marginBottom: '10px'
  },
  details: {
    marginLeft: '-15px',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  steps: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '19px',
    fontWeight: '500'
  }
}

export default props => (
  <CardGroup className="mb-4">
    <Card className="border-dark text-center">
      <CardBody>
        <Row>
          <Col sm="12">
            <img style={styles.image} className="img-logo" alt="bellooladipupo41@gmail.com" src={'https://media.licdn.com/mpr/mpr/shrink_200_200/AAMAAgQIAAkAAQAAAAAAAA8iAAAAJDRiNTM1YzIwLWU0YjQtNDE2MC1iYWRkLWYzOWQwMjRiODdiZQ.bin'}/>
            <CardTitle className="mb-0">Altitude Technology</CardTitle>
            <div className="small text-muted">Software • Wuse, Abuja </div>
          </Col>
        </Row>
        <hr/>
        <div className="text-muted"><i className="icon-phone"></i> 08188555611 </div>
        <div className="text-muted"><i className="icon-envelope"></i> bellooladipupo41@gmail.com </div>
        <div className="text-muted"><i className="icon-globe"></i> <a href="http://www.altitude-tech.com">altitude-tech.com</a> </div>
      </CardBody>
    </Card>
    <Card className="text-white bg-dark text-center">
      <CardBody style={styles.steps}>
        <div style={{textAlign: 'left'}}>
          <p><i className="icon-check text-success text-large"></i> Complete Your Company Profile</p>
          <p><i className="icon-check text-success"></i> Get Verified</p>
          <p><i className="icon-close text-danger"></i> Post Jobs</p>
          <p><i className="icon-close text-danger"></i> Profit $$</p>
        </div>
      </CardBody>
    </Card>
  </CardGroup>
)
