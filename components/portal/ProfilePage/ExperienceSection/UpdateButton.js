import { Component } from 'react'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { toast } from 'react-toastify';
import { Button } from 'reactstrap'

import { ViewerCandidateExperienceQuery } from './JobList'

class SaveButton extends Component {
  constructor(props){
    super(props)
    this.save = this.save.bind(this);
  }

  save = () => {
    console.log(this.props.details)
    console.log('this.props.details')
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
      toast("Your Work History has been updated", {...toastStyle});
    })
    // console.log(this.props.details);
    // console.log('this.props.details');
    this.props.close();
  }

  shouldComponentUpdate(){
    return false
  }
  render(){
    return(
      <Button color="primary" onClick={this.save}>Update</Button>
    )
  }
}
//export default SaveButton

const gqlWrapper = gql `
mutation CreateExperience(
  $id: MongoID!, $companyName: String, $role: String, $address: String,
  $salary: String, $isWorkingHere: Boolean,
  $fromYear: String, $fromMonth: EnumJobExperienceFromMonth,
  $toYear: String, $toMonth: EnumJobExperienceToMonth,
) {
  updateJobExperience(record: {
    _id: $id, companyName: $companyName,
    role: $role, address: $address,
    salary: $salary, isWorkingHere: $isWorkingHere,
    fromMonth: $fromMonth, fromYear: $fromYear
    toMonth: $toMonth, toYear: $toYear
    }) {
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
      const removeEmpty = (obj) => {
        Object.keys(obj).forEach(key => {
          if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
          else if (obj[key] == null) delete obj[key];
        });
      };
      removeEmpty(data);
      // console.log('data');
      // console.log(data);
      updateJobExperience({
        variables: {
          ...data
        },
        /*update: (proxy, { data: { addJobExperience } }) => {
          // Read the data from our cache for this query.
          console.log(addJobExperience);
          const data = proxy.readQuery({ query: ViewerCandidateExperienceQuery });

          // Add our todo from the mutation to the end.
          console.log(data.viewerCandidate.candidate);
          console.log('addJobExperience');
          console.log(addJobExperience);
          data.viewerCandidate.candidate.experience.push(addJobExperience.record);

          // Write our data back to the cache.
          proxy.writeQuery({ query: ViewerCandidateExperienceQuery, data });
        }*/
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
})(SaveButton))
