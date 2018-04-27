import {Component} from 'react'
import { Mutation, Query } from 'react-apollo'
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
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import Select from 'react-select'
import { toast } from 'react-toastify'

const employmentTypeOptions = [
	{ value: 'fullTime', label: 'Full-time' },
	{ value: 'partTime', label: 'Part-time' },
	{ value: 'contract', label: 'Contract' },
	{ value: 'temporary', label: 'Temporary' },
	{ value: 'volunteer', label: 'Volunteer' },
	{ value: 'internship', label: 'Internship' },
]
import {
  MONTHS, STATES, STAFF_SIZES, PHONE_REGEX, TOAST_STYLE, EMAIL_REGEX,
   prettifyState, enumifyState, formatDate
 } from '../../../../utils/common'
import { UPDATE_COMPANY_MUTATION } from '../../../../lib/backendApi/mutations'
import {PROFILE_INDUSTRY_MANY_QUERY} from '../../../../lib/backendApi/queries'

class ProfileSection extends Component {
  constructor(props) {
    super(props)
    const {job = {}} = this.props;
    const stateOfResidence = prettifyState(job.stateOfResidence);
    this.state = {
      role: job.role || '',
      address: job.address || '',
      state: stateOfResidence,
      contactPhone: job.contactPhone || '',
      contactEmail: job.contactEmail || '',
      contactName: job.contactName || '',
      salary: job.salary || '',
      employmentType: job.employmentType || '',
      basicDescription: job.basicDescription || '',
      fullDescription: job.fullDescription || '',
      industries: job.industries || [],
      //Validation
      roleValid: null,
      addressValid: null,
      stateValid: null,
      contactPhoneValid: null,
      contactEmailValid: null,
      contactNameValid: null,
      industriesValid: null,
      employmentTypeValid: null,
      basicDescriptionValid: null,
    }
    this.doUpdate = this.doUpdate.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleEmailChange = (event) => {
    if (EMAIL_REGEX.test(String(event.target.value).toLowerCase())){
      this.setState({email: event.target.value, contactEmailValid: true});
    } else {
      this.setState({contactEmailValid: null});
    }
  }

  handlePhoneChange = (event) => {
    if (PHONE_REGEX.test(String(event.target.value).toLowerCase())){
      this.setState({phone: event.target.value, contactPhoneValid: true});
    } else {
      this.setState({contactPhoneValid: null});
    }
  }

  handleFieldChange(field, value){
    const newState = {[field]: value}
    if (field==='role' && this.state.roleValid===false){
      newState.roleValid = null;
    }
    if (field==='address' && this.state.addressValid===false){
      newState.addressValid = null;
    }
    if (field==='address' && this.state.addressValid===false){
      newState.addressValid = null;
    }
    if (field==='state' && this.state.stateValid===false){
      newState.stateValid = null;
    }
    if (field==='contactName' && this.state.contactNameValid===false){
      newState.contactNameValid = null;
    }
    if (field==='industriesValid' && this.state.industriesValid===false){
      newState.industriesValid = null;
    }
    if (field==='employmentTypeValid' && this.state.employmentTypeValid===false){
      newState.employmentTypeValid = null;
    }
    if (field==='basicDescriptionValid' && this.state.basicDescriptionValid===false){
      newState.basicDescriptionValid = null;
    }
    this.setState(newState);
    // this.updateDetails(field, value);
  }



  doUpdate = (e, runMutation) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(this.state);
    const data = this.state;

    if (data.roleValid && data.addressValid && data.stateValid &&
        data.contactPhoneValid && data.contactEmailValid && data.contactNameValid &&
        data.industries && data.employmentTypeValid && data.basicDescriptionValid
      ) {
      // runMutation({ variables: {
      //   id: this.props.job._id,
      //   phone: this.state.phone || '',
      //   address: this.state.address || '',
      //   stateOfResidence: enumifyState(this.state.stateOfResidence) || 'Abia',
      //   website: this.state.website || '',
      //   staffSize: this.state.staffSize || 'a',
      //   yearFounded: this.state.yearFounded,
      //   industry: this.state.industries || '',
      // }})
    } else {
      const newState = {};
      !data.role && (newState.roleValid = false);
      !data.address && (newState.addressValid = false);
      !data.state && (newState.stateValid = false);
      !data.contactPhone && (newState.contactPhoneValid = false);
      !data.contactEmail && (newState.contactEmailValid = false);
      !data.contactName && (newState.contactNameValid = false);
      data.industries.length==0 && (newState.industriesValid = false);
      !data.employmentType && (newState.employmentTypeValid = false);
      !data.basicDescription && (newState.basicDescriptionValid = false);
      this.setState(newState);
      toast("Please Validate your inputs", {...TOAST_STYLE.fail});
    }
  }

  onCompleted = (data) => {
    toast("Your Company Details have been updated", {...TOAST_STYLE.success});
  }

  onError = (error) => {
    console.log(error);
    if (error.graphQLErrors.length==0)
      toast("Something Went Wrong With your request", {...TOAST_STYLE.fail});

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `Invalid Phone Number`:
        toast("Invalid Phone number", {...TOAST_STYLE.fail});
        break;
        case `E11000 duplicate key error collection: ktt-backend.companys index: jobrole_1 dup key: { : "${this.state.jobrole}" }`:
        toast("This Userrole is taken", {...TOAST_STYLE.fail});
        break;
        case `E11000 duplicate key error collection: ktt-backend.companys index: email_1 dup key: { : "${this.state.email}" }`:
        toast("This Email is taken", {...TOAST_STYLE.fail});
        break;
        default:
        toast("Something Went Wrong", {...TOAST_STYLE.fail});
      }
    })
  }

  render() {
    return (
      <Form action="" encType="multipart/form-data" className="form-horizontal">
        <Mutation mutation={UPDATE_COMPANY_MUTATION} onCompleted={this.onCompleted} onError={this.onError}>
          {(companyUpdateById, {data, error}) => (
              <Card>
                <CardBody >
                  <Row>
                    <Col sm="5">
                      <CardTitle className="mb-0">Add Job Details</CardTitle>
                    </Col>
                  </Row>
                  <hr/>
                  <Row>
                    <Col sm="12">
                      <FormGroup>
                        <Label>Role/Position</Label>
                        <Input  type="text" placeholder="Name" required
                          valid={this.state.roleValid}
                          onChange={(e)=>this.handleFieldChange('role', e.target.value)}
                          defaultValue={this.state.role}/>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="9" xs="12">
                          <Label>Address</Label>
                          <Input type="text" placeholder="Office address" required="required"
                            valid={this.state.addressValid}
                            onChange={(e) => this.handleFieldChange('address', e.target.value)}
                            defaultValue={this.state.address}/>
                        </Col>
                        <Col md="3" xs="12">
                          <Label>State of Residence</Label>
                          <Input type="select" placeholder="Select State"
                            valid={this.state.stateValid}
                            onChange={(e) => this.handleFieldChange('state', e.target.value)} >
                            <option>Select a state</option>
                            {STATES.map((state, index) =>(<option
                              key={index}
                              selected={this.state.state==state}> {
                                state
                              }</option>))}
                          </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="6">
                          <Label>Contact Phone</Label>
                          <Input type="text" placeholder="Phone number" required
                            valid={this.state.contactPhoneValid}
                            defaultValue={this.state.contactPhone}
                            onChange={this.handlePhoneChange}/>
                        </Col>
                        <Col md="6">
                          <Label>Contact Email</Label>
                          <Input type="email" placeholder="Email address"
                            valid={this.state.contactEmailValid}
                            defaultValue={this.state.contactEmail}
                            onChange={this.handleEmailChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="6">
                          <Label>Contact Name</Label>
                          <Input type="text" placeholder="Contact name" required
                            valid={this.state.contactNameValid}
                            onChange={(e)=>this.handleFieldChange('contactName', e.target.value)}
                            defaultValue={this.state.contactName}/>
                        </Col>
                        <Col md="6">
                          <Label>Salary Range</Label>
                          <Input type="text" placeholder="Eg: 10,000 - 10,000,000,000" required
                            onChange={(e)=>this.handleFieldChange('salary', e.target.value)}
                            defaultValue={this.state.salary}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="6" xs="12">
                          <Label htmlFor="name">Industries</Label>
                          <Query query={PROFILE_INDUSTRY_MANY_QUERY}>
                            {({loading, error, data}) => {
                              if (loading)
                                return "Loading...";
                              if (error)
                                return `Error! ${error.message}`;

                              const { industryMany } = data;
                              const industryOptions = industryMany.map(industry=>({value: industry._id, label: industry.name}));
                              const defaultValues = [];
                              industryOptions.forEach(opt=>this.state.industries.find(ind=>ind==opt.value) && defaultValues.push(opt))
                              return (
                                <Select
                                  isMulti
                                  options={industryOptions}
                                  onChange={opts=>this.setState({
                                    industries: opts.map(opt=>opt.value),
                                    industriesValid: null
                                  })}
                                  defaultValue={defaultValues}
                                />
                              )
                            }}
                          </Query>
                          {(this.state.industriesValid == false) && <FormText className="mb-3" style={{fontSize: '12px'}} color="danger"><i>select at least one industry</i></FormText>}
                        </Col>
                        <Col md="6" xs="12">
                          <Label>Employment type</Label>
                          <Select
                            options={employmentTypeOptions}
                            onChange={(opt)=>this.setState({
                              employmentType: opt.value,
                              employmentTypeValid: null
                            })}
                            defaultValue={employmentTypeOptions.find(opt=>opt.value==this.state.staffSize)}
                          />
                          {(this.state.employmentTypeValid == false) && <FormText className="mb-3" style={{fontSize: '12px'}} color="danger"><i>select an employment type</i></FormText>}
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Label>Basic description</Label>
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="3"
                          placeholder="Short description of the role to be displayed in listings"
                          valid={this.state.basicDescriptionValid}
                          onChange={(e)=>this.handleFieldChange('basicDescription', e.target.value)}
                          value={this.state.basicDescription}/>
                      </FormGroup>
                      <FormGroup>
                        <Label>Full Job description</Label>
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                          placeholder="Describe the role, and help applicants learn what makes it a great opportunity."
                          onChange={(e)=>this.handleFieldChange('fullDescription', e.target.value)}
                          value={this.state.fullDescription}/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Button onClick={e=>this.doUpdate(e, companyUpdateById)} className="float-right" type="submit" size="sm" color="primary">
                    <i className="fa fa-dot-circle-o"></i>
                    Update Profile</Button>
                </CardFooter>
              </Card>
            )}
        </Mutation>
      </Form>
    )
  }
}

export default ProfileSection
