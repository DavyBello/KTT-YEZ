import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Badge
} from 'reactstrap';

 export default props => (
  <ListGroup>
    {props.jobs.map((job)=>(
      <ListGroupItem>
        <ListGroupItemHeading>{job.title}</ListGroupItemHeading>
        <ListGroupItemText>
          <div><i className="icon-briefcase"></i> {job.company}</div>
          <div>{job.duration}</div>
          <div>{job.location}</div>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
