import { Component } from 'react'
import { Query } from 'react-apollo'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
} from 'reactstrap'

import {MANAGER_CANDIDATE_BY_ID_DOCUMENTS_QUERY} from '../../../../lib/backendApi/queries'

import DocumentsList1 from './DocumentsList1'

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
        <Query query={MANAGER_CANDIDATE_BY_ID_DOCUMENTS_QUERY} variables={{ id: this.props.id}}>
          {({loading, error, data}) => {
            if (loading)
              return (
                <CardBody >
                  <CardTitle className="mb-0">Documents</CardTitle>
                  <hr />
                  "Loading..."
                </CardBody>
              );
            if (error)
              return (
                <CardBody >
                  <CardTitle className="mb-0">Documents</CardTitle>
                  <hr />
                  Error! {error.message}
                </CardBody>
              );

              const {managerCandidateById} = data;
              const candidate = managerCandidateById;
              console.log(candidate);
            return(
              <CardBody >
                <CardTitle className="mb-0">
                  {
                  (candidate.documents.length>0) && (
                    <Button className="float-right" size="sm" color="primary" onClick={this.toggle}>
                      <i className="icon-plus"></i> Add
                    </Button>)
                  }
                  Documents
                </CardTitle>
                <hr/> {
                  (!candidate.documents.length>0)
                  ? (<div className="text-center">
                    <EmptySpace/>
                  </div>)
                  : (<div>
                    <DocumentsList1 candidate={candidate}/>
                  </div>)
                }
              </CardBody>
            )}}
          </Query>
      </Card>
    )
  }
}
