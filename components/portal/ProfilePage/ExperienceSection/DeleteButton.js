import { Component } from 'react'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { toast } from 'react-toastify';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import { ViewerCandidateExperienceQuery } from './JobList'

class DeleteButton extends Component {
  constructor(props){
    super(props)
    this.doDelete = this.doDelete.bind(this);
  }

  doDelete = () => {
    // console.log(this.props.details)
    // console.log('this.props.details')

    this.props.update(this.props.details,()=>{
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
      toast("Your Work History was deleted", {...toastStyle});
    })
    this.props.toggleConfirm();
  }

  shouldComponentUpdate(){
    return false
  }
  render(){
    return(
      <Button color="danger" onClick={this.doDelete}>Delete</Button>
    )
  }
}
//export default DeleteButton
//<Button onClick={()=>this.toggle()}/*{this.doDelete}*/ className="btn-sm" outline color="danger"><i className="icon-trash"></i></Button>

const gqlWrapper = gql `
mutation CreateExperience(
  $id: MongoID!
) {
  deleteJobExperience(_id: $id){
    recordId
    record{
      _id
      companyName
      role
      fromYear
      fromMonth
      toYear
      toMonth
      address
      salary
      duration
      isWorkingHere
    }
  }
}
`
export default (graphql(gqlWrapper, {
  // Use an unambiguous name for use in the `props` section below
  name: 'updateJobExperience',
  // Apollo's way of injecting new props which are passed to the component
  props: ({ownProps, updateJobExperience}) => ({
    // `update` is the name of the prop passed to the component
    update: (data, onComplete) => {
      // console.log('data');
      // console.log(data);
      updateJobExperience({
        variables: {
          id: data.id
        },
        update: (proxy, { data: { deleteJobExperience } }) => {
          // Read the data from our cache for this query.
          const data = proxy.readQuery({ query: ViewerCandidateExperienceQuery });

          // Add our todo from the mutation to the end.
          //console.log(data.viewerCandidate.candidate);
          const index = data.viewerCandidate.candidate.experience.findIndex((experience)=>{
            return (experience._id==deleteJobExperience.recordId)
          });
          if (index > -1) {
            data.viewerCandidate.candidate.experience.splice(index, 1);
          }

          // Write our data back to the cache.
          proxy.writeQuery({ query: ViewerCandidateExperienceQuery, data });
        }
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   addJobExperience: {
        //     __typename: 'Post',
        //     id: ownProps.id,
        //     votes: ownProps.votes + 1
        //   }
        // }
      }).then(({data}) => {
        onComplete && onComplete();
      }).catch((error)=>{
        console.log(error.graphQLErrors);
        const toastStyle = {
          className: {
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5',
            background: '#f86c6b',
            color: "white"
          },progressClassName: {
            background: '#f5302e'
          }
        }
        toast("Something Went Wrong", {...toastStyle});
      })
    }
  })
})(DeleteButton))
