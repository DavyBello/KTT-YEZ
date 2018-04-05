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
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import DetailsModal from './DetailsModal'
import JobList from './JobList'
import SaveButton from './SaveButton'

const isEmpty = false;

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This space is lonely
  </p>
)

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      isEmpty: true
    }
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount(){
    if (this.props.user.experience.length>0)
     this.state.isEmpty=false
  }

  toggle(){
    this.setState({modalOpen: !this.state.modalOpen})
  }
  save(){
    //console.log('saving');
    setTimeout(()=>this.setState({modalOpen: !this.state.modalOpen}), 2000)
  }

  render(){
    //console.log(this.props.user.experience.length);
    return (
      <Card>
        <CardBody >
          <CardTitle className="mb-0">
            Work Experience {
              (this.props.user.experience.length>0) && (
              <Button className="float-right" size="sm" color="primary" onClick={this.toggle}>
                <i className="icon-plus"></i> Add
              </Button>)
            }
          </CardTitle>
          <hr/> {
            (!this.props.user.experience.length>0)
            ? (<div className="text-center">
              <EmptySpace/>
              <Button size="lg" color="primary" onClick={this.toggle}>
                <i className="icon-plus"></i> Add Work Experience
              </Button>
            </div>)
            : (<div>
              <JobList/>
            </div>)
          }
        </CardBody>
        <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} isNew/>
      </Card>
    )
  }
}
