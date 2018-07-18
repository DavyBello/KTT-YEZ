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
         endDate
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

export const VIEWER_CANDIDATE_CERTIFICATES_QUERY = gql`
  query ViewerCandidateQuery{
    viewerCandidate {
      candidate {
        _id
        certificates{
          _id
          name
          authority
          licenseNumber
          url
          fromMonth
          fromYear
          doesNotExpire
          toMonth
          toYear
          duration
          startDate
        }
      }
    }
  }
`

export const VIEWER_CANDIDATE_REFEREES_QUERY = gql`
query ViewerCandidateQuery{
  viewerCandidate {
    candidate {
      _id
      referees{
        _id
        name {
          first
          last
        }
        phone
        gender
        email
        occupation
        relationship
        isVerified
      }
    }
  }
}
`
