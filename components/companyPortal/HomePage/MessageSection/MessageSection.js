import { Component} from 'react'

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Label,
  Input,
  Form,
  FormText,
  FormGroup,
  Collapse,
  Button
} from 'reactstrap';

export default class NewMessage extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    }
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  render(){
    return (
      <Row>
        <Col xs="12" sm="12" md="12">
          <Card className="card-accent-dark">
            <CardHeader className="h4" style={{fontWeight: '300'}}>
              <i className="icon-envelope-letter"></i><strong>Send us a Message</strong>
              <Label className="switch switch-lg switch-text switch-info float-right mb-0">
                <Input type="checkbox" className="switch-input" onClick={this.toggle}/>
                <span className="switch-label" data-on="On" data-off="Off"></span>
                <span className="switch-handle"></span>
              </Label>
            </CardHeader>
            <Collapse isOpen={this.state.collapse}>
              <CardBody>
                <Row style={{padding: '30px'}}>
                  <Form action="" method="post" className="form-horizontal" style={{width: '100%'}}>
                    <FormGroup row>
                      <Col md="1">
                        <Label htmlFor="hf-password">From:</Label>
                      </Col>
                      <Col xs="12" md="5">
                        <Input type="text" id="hf-from" name="hf-password" placeholder="YOU  &lt;user@outlet.com&gt;"/>
                      </Col>
                      <Col md="1">
                        <Label htmlFor="hf-email">To:</Label>
                      </Col>
                      <Col xs="12" md="5">
                        <Input type="email" id="hf-email" name="hf-email" placeholder="KTT4President &lt;support@KTT4president.com&gt;"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="1">
                        <Label htmlFor="hf-password">Title:</Label>
                      </Col>
                      <Col xs="12" md="11">
                        <Input type="text" id="hf-from" name="hf-password" placeholder="Enter a Title"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md={{offset: 1, size: 11}}>
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                     placeholder="Type your message"/>
                      </Col>
                    </FormGroup>
                  </Form>
                  <div style={{width: '100%'}}>
                    <Button className="float-right" color="primary" /*onClick={this.toggle}*/ style={{marginBottom: '1rem'}}>Send Message</Button>
                  </div>
                </Row>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      </Row>
    )
  }
}
