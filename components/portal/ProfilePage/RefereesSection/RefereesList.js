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
    {props.education.map((education)=>(
      <ListGroupItem>
        <ListGroupItemHeading>{education.school} <i className="float-right text-success icon-check"></i></ListGroupItemHeading>
        <ListGroupItemText>
          <div><i className="icon-graduation"></i> {education.degree}, {education.field} </div>
          <div>{education.duration}</div>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
