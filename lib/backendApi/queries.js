/**
* GraphQl Queries
*/
import gql from 'graphql-tag'

export const HOME_VIEWER_CANDIDATE_QUERY = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        name {
          first
          last
        }
        phone
        email
        username
      }
    }
  }
`

export const PROFILE_VIEWER_CANDIDATE_QUERY = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        name {
          first
          last
        }
        phone
        email
        username
        address
        stateOfResidence
        experience{
          companyName
        }
        nationality
        gender
        stateOfOrigin
        dateOfBirth
        placeOfBirth
      }
    }
  }
`
export const VIEWER_CANDIDATE_EXPERIENCE_QUERY = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        experience{
         _id
         companyName
         role
         fromYear
         fromMonth
         toYear
         toMonth
         startDate
         address
         state
         salary
         duration
         isWorkingHere
        }
      }
    }
  }
`
