/**
* GraphQl Queries
*/
import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql `
  mutation Login($phone: String, $password: String) {
    loginCandidate ( phone: $phone, password: $password ) {
      jwt
      name{
        last
      }
    }
  }
`

export const UPDATE_CANDIDATE_MUTATION = gql `
mutation UpdateCandidate(
  $id: MongoID!, $email: String, $username: String, $bvn: String, $address: String,
  $nationality: String, $gender: EnumCandidateGender, $stateOfResidence: EnumCandidateStateOfResidence,
  $stateOfOrigin: String, $dateOfBirth: Date, $placeOfBirth: String
) {
  candidateUpdateById (record: {
    _id: $id, email: $email, username: $username, bvn: $bvn, address: $address,
    nationality: $nationality, gender: $gender, stateOfResidence :$stateOfResidence,
    stateOfOrigin :$stateOfOrigin, dateOfBirth :$dateOfBirth, placeOfBirth :$placeOfBirth
  }){
    recordId
    record{
      _id
      id
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
      bvn
      nationality
      gender
      stateOfOrigin
      dateOfBirth
      placeOfBirth
    }
  }
}
`
export const CREATE_EXPERIENCE_MUTATION = gql `
mutation CreateExperience(
  $companyName: String!, $role: String!, $address: String!,
  $salary: String, $isWorkingHere: Boolean!, $state: EnumJobExperienceState!,
  $fromYear: String!, $fromMonth: EnumJobExperienceFromMonth!,
  $toYear: String, $toMonth: EnumJobExperienceToMonth,
) {
  # addJobExperience(record: {companyName: $companyName, role: $role, address: $address, salary: $salary, fromMonth: January, fromYear: $fromYear}) {
  addJobExperience(record: {
    companyName: $companyName,
    role: $role, address: $address, state: $state,
    salary: $salary, isWorkingHere: $isWorkingHere,
    fromMonth: $fromMonth, fromYear: $fromYear,
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
      startDate
      address
      state
      salary
      duration
      isWorkingHere
    }
  }
}
`
