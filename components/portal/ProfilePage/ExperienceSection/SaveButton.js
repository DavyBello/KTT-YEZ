import { Component } from 'react'
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify';
import { Button } from 'reactstrap'

import { TOAST_STYLE, removeEmpty } from '../../../../utils/common'
import { VIEWER_CANDIDATE_EXPERIENCE_QUERY } from '../../../../lib/backendApi/queries'
import { CREATE_EXPERIENCE_MUTATION } from '../../../../lib/backendApi/mutations'

export default class SaveButton extends Component {
  constructor(props){
    super(props)
    this.save = this.save.bind(this);
  }

  shouldComponentUpdate(){
    return false
  }

  save = (e, runMutation) => {
    // console.log(this.props.details);
    let data = this.props.details

    if (data.companyName && data.role && data.address && data.fromYear) {

      removeEmpty(data);

      if(data.isWorkingHere){
        delete data.toMonth;
        delete data.toYear;
      }
      runMutation({
        variables: { ...data },
        update: (proxy, { data: { addJobExperience } }) => {
          // Read the data from our cache for this query.
          const data = proxy.readQuery({ query: VIEWER_CANDIDATE_EXPERIENCE_QUERY });

          // Add our todo from the mutation to the end.
          data.viewerCandidate.candidate.experience.push(addJobExperience.record);

          // Write our data back to the cache.
          proxy.writeQuery({ query: VIEWER_CANDIDATE_EXPERIENCE_QUERY, data });
        },
        // optimisticResponse: {
        //   __typename: 'Mutation',
        //   addJobExperience: {
        //     __typename: 'Post',
        //     id: ownProps.id,
        //     votes: ownProps.votes + 1
        //   }
        // }
      })

    } else {
      let message ='Invalid inputs';
      if (!data.role) {
        message = 'Role/Position field is empty';
        toast(message, {...TOAST_STYLE.fail});
      } else if (!data.companyName) {
        message = 'Company Name field is empty';
        toast(message, {...TOAST_STYLE.fail});
      } else if (!data.address) {
        message = 'Address field is empty';
        toast(message, {...TOAST_STYLE.fail});
      } else
        toast(message, {...TOAST_STYLE.fail});
    }


    // console.log(data);

  }

  onCompleted = (data) => {
    toast("Your Work History has been updated", {...TOAST_STYLE.success});
    this.props.close();
  }

  onError = (error) => {
    console.log(error);
    toast("Something Went wrong", {...TOAST_STYLE.fail});
  }


  render(){
    return(
      <Mutation mutation={CREATE_EXPERIENCE_MUTATION} onCompleted={this.onCompleted} onError={this.onError}>
        {(addJobExperience)=>(
          <Button color="primary" onClick={e=>this.save(e, addJobExperience)}>Save</Button>
        )}
      </Mutation>
    )
  }
}
//export default SaveButton
