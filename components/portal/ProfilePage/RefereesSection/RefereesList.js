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
          <p style={{marginBottom: '0px'}}><i className="icon-graduation"></i> {education.degree}, {education.field} </p>
          <p>{education.duration}</p>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
