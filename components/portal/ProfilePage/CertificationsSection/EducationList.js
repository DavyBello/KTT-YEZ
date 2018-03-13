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
          <p style={{marginBottom: '0px'}}><i className="icon-graduation"></i> {education.degree}, {education.field} </p>
          <p>{education.duration}</p>
        </ListGroupItemText>
      </ListGroupItem>
    ))}
  </ListGroup>
 )
