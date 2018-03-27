import {Component} from 'react'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardFooter,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  FormText,
  Input
} from 'reactstrap'
import { toast } from 'react-toastify';

const STATES = [
  "Abia",
  "Adamawa",
  "Anambra",
  "Akwa Ibom",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Enugu",
  "Edo",
  "Ekiti",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
]

class MoreDetails extends Component {
  constructor(props) {
    super(props)
    const date = new Date(props.user.dateOfBirth);
    function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
    this.state = {
      address: props.user.address || '',
      //bvn: props.user.bvn || '',
      nationality: props.user.nationality || '',
      gender: props.user.gender || '',
      origin: props.user.stateOfOrigin || '',
      stateOfResidence: props.user.stateOfResidence || '',
      dob: formatDate(date) || '',
      pob: props.user.placeOfBirth || '',
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(field, value){
    this.setState({[field]: value});
  };

  render(){
    const doUpdate = (e) => {
      // console.log('updating');
      // console.log(this.state);
      e.preventDefault()
      e.stopPropagation()

      this.props.update({
        id: this.props.user._id,
        // address: this.state.address,
        //bvn: this.state.bvn,
        nationality: this.state.nationality,
        gender: this.state.gender,
        stateOfOrigin: this.state.origin,
        stateOfResidence: this.state.stateOfResidence,
        dateOfBirth: this.state.dob,
        placeOfBirth: this.state.pob
      },()=>{
        //function runs if update is sucessfull
        const toastStyle = {
          className: {
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5',
            background: "#4dbd74",
            color: "white"
          },progressClassName: {
            background: "#3a9d5d"
          }
        }
        toast("Your Profile Details have been updated", {...toastStyle});
      })
    }

    const user = this.props.user || {};
    return (
      <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
      <Card>
        <CardBody >
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">Edit Additional Details</CardTitle>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label htmlFor="name">Address</Label>
                <Input onChange={(e)=>this.handleFieldChange('address', e.target.value)} type="text" id="name" placeholder="House address" required defaultValue={this.state.address.state}/>
              </FormGroup>
              <FormGroup row>
                <Col md="4">
                  <Label htmlFor="name">State of Residence</Label>
                  <Input onChange={(e)=>this.handleFieldChange('stateOfResidence', e.target.value)} type="select" id="name" placeholder="Select State" required defaultValue={this.state.stateOfResidence}>
                    {STATES.map((state, index)=><option key={index}>{state}</option>)}
                  </Input>
                </Col>
                <Col md="3">
                  <Label htmlFor="name">Gender</Label>
                  <Input onChange={(e)=>this.handleFieldChange('gender', e.target.value)} type="select" id="name" placeholder="Select Gender" required defaultValue={this.state.gender}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Input>
                </Col>
                <Col md="5">
                  <Label htmlFor="name">Nationality</Label>
                  <Input onChange={(e)=>this.handleFieldChange('nationality', e.target.value)} type="text" id="name" placeholder="Nationality" required defaultValue={this.state.nationality}/>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="name">Date of Birth</Label>
                  <Input onChange={(e)=>this.handleFieldChange('dob', e.target.value)} type="date" id="name" placeholder="Date of Birth" required defaultValue={this.state.dob}/>
                </Col>
                <Col md="6">
                  <Label htmlFor="name">Place of Birth</Label>
                  <Input onChange={(e)=>this.handleFieldChange('pob', e.target.value)} type="text" id="name" placeholder="Place of Birth"  required defaultValue={this.state.pob}/>
                </Col>
              </FormGroup>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <Button onClick={doUpdate} className="float-right" type="submit" size="sm" color="primary">
          <i className="fa fa-dot-circle-o"></i>
          Update Details</Button>
        </CardFooter>
      </Card>
    </Form>
    )
  }
}

export default MoreDetails
