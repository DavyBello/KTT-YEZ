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

const experiences = [
  {
    title: '',
    company: '',
    duration: '',
    location: ''
  }
]
const isEmpty = true;

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This Space is empty
  </p>
)

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  setModalState(val){
      this.setState({modalOpen: val})
  }

  render(){
    return (
      <Card>
        <CardBody >
          <CardTitle className="mb-0">
            Education {
              (!isEmpty) && (<Button className="float-right" size="sm" color="primary">
                <i className="icon-plus"></i> Add
              </Button>)
            }
          </CardTitle>
          <hr/> {
            (isEmpty)
            ? (<div className="text-center">
              <EmptySpace/>
              <Button size="lg" color="primary">
                <i className="icon-plus"></i> Add Education
              </Button>
            </div>)
            : (<div>
              Job List
            </div>)
          }
        </CardBody>
      </Card>
    )
  }
}
