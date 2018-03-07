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
          <div><i className="icon-briefcase"></i> {job.company}</div>
          <div>{job.duration}</div>
          <div>{job.location}</div>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
