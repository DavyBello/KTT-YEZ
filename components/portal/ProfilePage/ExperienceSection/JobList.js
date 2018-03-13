import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Button
} from 'reactstrap';

 export default props => (
  <ListGroup>
    {props.jobs.map((job)=>(
      <ListGroupItem>
        <ListGroupItemHeading>{job.title} <Button className="btn-sm" outline color="primary float-right"><i className="icon-pencil"></i>&nbsp; Edit</Button></ListGroupItemHeading>
        <ListGroupItemText>
          <p style={{marginBottom: '0px'}}><i className="icon-briefcase"></i> {job.company}</p>
          <p style={{marginBottom: '0px'}}>{job.duration}</p>
          <p>{job.location}</p>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
