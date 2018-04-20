/**
* GraphQl Candidate Queries
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
export const VIEWER_CANDIDATE_EDUCATION_QUERY = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        education {
          _id
          school
          degree
          field
          grade
          fromYear
          isSchoolingHere
          toYear
          startDate
          duration
        }
      }
    }
  }
`
