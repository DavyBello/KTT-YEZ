import { Component } from 'react'
import { Query } from 'react-apollo'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
} from 'reactstrap'

import {HOME_COMPANY_JOBS_QUERY} from '../../../../lib/backendApi/queries'

import DetailsModal from './DetailsModal'
import JobsList from './JobsList'
import SaveButton from './SaveButton'

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
    }
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
  }

  toggle(){
    this.setState({modalOpen: !this.state.modalOpen})
  }
  save(){
    setTimeout(()=>this.setState({modalOpen: !this.state.modalOpen}), 2000)
  }

  render(){
    return (
      <Card>
        <Query query={HOME_COMPANY_JOBS_QUERY}>
          {({loading, error, data}) => {
            if (loading)
              return "Loading...";
            if (error)
              return `Error! ${error.message}`;

            const {viewerCompany: {company}, currentTime} = data;
            return(
              <CardBody >
                <CardTitle className="mb-0">
                    {
                    (company.jobs.length>0) && (
                      <Button className="float-right" size="sm" color="primary" onClick={this.toggle}>
                        <i className="icon-plus"></i> Add
                      </Button>)
                    }
                    Jobs Posted
                  </CardTitle>
                  <hr/> {
                    (!company.jobs.length>0)
                    ? (<div className="text-center">
                      <EmptySpace/>
                      <Button size="lg" color="primary" onClick={this.toggle}>
                        <i className="icon-plus"></i> Add Jobs
                      </Button>
                    </div>)
                    : (<div>
                      <JobsList company={company} currentTime={currentTime}/>
                    </div>)
                  }
                </CardBody>
            )}}
          </Query>
        <DetailsModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} isNew/>
      </Card>
    )
  }
}
