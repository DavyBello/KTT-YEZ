import { Component } from 'react'
import {graphql, withApollo, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { ViewerCandidateExperienceQuery } from './JobList'

import { Button } from 'reactstrap'

class SaveButton extends Component {
  constructor(props){
    super(props)
    this.save = this.save.bind(this);
  }

  save = () => {
    this.props.update(this.props.details)
    // console.log(this.props.details);
    // console.log('this.props.details');
    this.props.close();
  }

  shouldComponentUpdate(){
    return false
  }
  render(){
    return(
      <Button color="primary" onClick={this.save}>Save</Button>
    )
  }
}
//export default SaveButton

const gqlWrapper = gql `
mutation CreateExperience(
  $companyName: String, $role: String, $address: String,
  $salary: String, $fromYear: String,
) {
  addJobExperience(record: {companyName: $companyName, role: $role, address: $address, salary: $salary, from: {month: January, year: $fromYear}}) {
    recordId
    record{
      _id
      companyName
      role
      address
      salary
    }
  }
}
`
export default (graphql(gqlWrapper, {
  // Use an unambiguous name for use in the `props` section below
  name: 'addJobExperience',
  // Apollo's way of injecting new props which are passed to the component
  props: ({ownProps, addJobExperience}) => ({
    // `update` is the name of the prop passed to the component
    update: (data) => {
      const removeEmpty = (obj) => {
        Object.keys(obj).forEach(key => {
          if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
          else if (obj[key] == null) delete obj[key];
        });
      };
      removeEmpty(data);
      console.log(data);
      addJobExperience({
        variables: {
          ...data
        },
        update: (proxy, { data: { addJobExperience } }) => {
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
        }
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   addJobExperience: {
        //     __typename: 'Post',
        //     id: ownProps.id,
        //     votes: ownProps.votes + 1
        //   }
        // }
      })
    }
  })
})(SaveButton))
