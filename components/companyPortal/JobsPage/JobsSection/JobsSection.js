import { Component } from 'react'
import Router from 'next/router'
import { Query } from 'react-apollo'
import JwPagination from 'jw-react-pagination';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
} from 'reactstrap'

import {HOME_COMPANY_JOBS_QUERY} from '../../../../lib/backendApi/queries'

import JobsList from './JobsList'

const EmptySpace = props => (
  <p className="display-4" style={{padding: '10px 0px 10px'}}>
    <i className="icon-ghost"></i> This space is lonely
  </p>
)

export default class extends Component {
  constructor(props){
    super(props);
    var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      modalOpen: false,
      exampleItems,
      pageOfItems: []
    }
  }

  onChangePage(pageOfItems) {
    // update local state with new page of items
    this.setState({ pageOfItems });
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
                      <Button className="float-right" size="sm" color="primary"
                        onClick={()=>Router.push('/company/job/create')}>
                        <i className="icon-plus"></i> Add
                      </Button>)
                    }
                    Jobs Posted
                  </CardTitle>
                  <hr/> {
                    (!company.jobs.length>0)
                    ? (<div className="text-center">
                      <EmptySpace/>
                      <Button size="lg" color="primary" onClick={()=>Router.push('/company/job/create')}>
                        <i className="icon-plus"></i> Add Jobs
                      </Button>
                    </div>)
                    : (<div>
                      <JobsList company={company} currentTime={currentTime}/>
                    </div>)
                  }
                  <div className="float-center" style={{textAlign: 'center'}}>
                    <br/>
                    <JwPagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                  </div>
                </CardBody>
            )}}
          </Query>
      </Card>
    )
  }
}
