import {Component} from 'react'
import Head from 'next/head'
import { Query } from 'react-apollo'
import { Row, Col } from 'reactstrap'
import { toast } from 'react-toastify';

import { COMPANY_SINGLE_JOB_QUERY } from '../../../lib/backendApi/queries'

import NoJobs from '../../../components/common/Error/NoJob/NoJob'
import withCompanyPortal from '../../../components/withCompanyPortal'
import JobDetails from '../../../components/companyPortal/JobsPage/JobDetails/JobDetails'

class Page extends Component {
  static async getInitialProps ({ query}) {
    return {query}
  }
  render(){
    console.log(this.props.query.id);
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Profile</title>
        </Head>
        <Query query={COMPANY_SINGLE_JOB_QUERY} variables={{ id: this.props.query.id}}>
          {({loading, error, data}) => {
            if (loading)
              return "Loading...";
            if (error){
              if (error.message == `GraphQL error: Cast to ObjectId failed for value "${this.props.query.id}" at path "_id" for model "Job"`)
                return <NoJobs />
              if (error.message == `GraphQL error: This company cannot view this document`)
                return <NoJobs />
              return `Error! ${error.message}`;
            }

            const {companyJobById} = data;
            if (!companyJobById) {
              return <NoJobs />
            }
            return (
              <div>
                <JobDetails isedit job={companyJobById}/>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default withCompanyPortal(Page)
