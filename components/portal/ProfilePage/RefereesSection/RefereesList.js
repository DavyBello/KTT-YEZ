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
          <p style={{marginBottom: '0px'}}><i className="icon-envelope"></i> {education.degree} </p>
          <p><i className="icon-phone"></i> {education.field}</p>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
