import {Card, CardBody, CardTitle, CardGroup, Row, Col} from 'reactstrap'

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

export default props => {
  const user = props.user || {};
  return (<CardGroup className="mb-4">
    <Card className="border-dark text-center">
      <CardBody>
        <Row>
          <Col sm="12">
            <img style={styles.image} src={'/static/images/5.jpg'} className="img-avatar" alt="bellooladipupo41@gmail.com"/>
            <CardTitle className="mb-0">{user ? `${user.name.first} ${user.name.last}` : `Lastname Firstname`}</CardTitle>
            <div className="small text-muted">{user.username ? `@${user.username}` : `@username`}</div>
          </Col>
        </Row>
        <hr/>
        {user.phone && (<div className="text-muted"><i className="icon-phone"></i> {user.phone}</div>)}
        {user.email && (<div className="text-muted"><i className="icon-envelope"></i> {user.email}</div>)}
      </CardBody>
    </Card>
    <Card className="text-white bg-dark text-center">
      <CardBody style={styles.steps}>
        <div style={{textAlign: 'left'}}>
          <p><i className="icon-check text-success text-large"></i> Fill in your Details</p>
          <p><i className="icon-check text-success"></i> Take the tests</p>
          <p><i className="icon-close text-danger"></i> Get Verified at any Job center nation wide</p>
          <p><i className="icon-close text-danger"></i> Profit $$</p>
        </div>
      </CardBody>
    </Card>
  </CardGroup>)
}
