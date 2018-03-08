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
    {props.education.map((education)=>(
      <ListGroupItem>
        <ListGroupItemHeading>{education.school} <Button className="btn-sm" outline color="primary float-right"><i className="icon-pencil"></i>&nbsp; Edit</Button></ListGroupItemHeading>
        <ListGroupItemText>
          <div><i className="icon-graduation"></i> {education.degree}, {education.field} </div>
          <div>{education.duration}</div>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
