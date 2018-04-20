/**
* GraphQl Candidate Mutations
*/
import gql from 'graphql-tag'

export const LOGIN_CANDIDATE_MUTATION = gql `
  mutation Login($phone: String!, $password: String!) {
    loginCandidate ( phone: $phone, password: $password ) {
      jwt
      name{
        last
      }
    }
  }
`
export const SIGNUP_CANDIDATE_MUTATION = gql `
mutation SignUpCandidate($firstName: String!, $lastName: String!, $phone: String!, $password: String!) {
  signUpCandidate ( lastName: $lastName, firstName: $firstName, phone: $phone, password: $password ) {
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
  $salary: String, $isWorkingHere: Boolean, $state: EnumJobExperienceState!,
  $fromYear: String!, $fromMonth: EnumJobExperienceFromMonth!,
  $toYear: String, $toMonth: EnumJobExperienceToMonth,
) {
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

export const UPDATE_EXPERIENCE_MUTATION = gql `
mutation UpdateExperience(
  $id: MongoID!, $companyName: String, $role: String, $address: String,
  $salary: String, $isWorkingHere: Boolean, $state: EnumJobExperienceState,
  $fromYear: String, $fromMonth: EnumJobExperienceFromMonth,
  $toYear: String, $toMonth: EnumJobExperienceToMonth,
) {
  updateJobExperience(record: {
    _id: $id, companyName: $companyName,
    role: $role, address: $address, state: $state,
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

export const DELETE_EXPERIENCE_MUTATION = gql `
mutation DeleteExperience(
  $id: MongoID!
) {
  deleteJobExperience(_id: $id){
    recordId
    record{
      companyName
    }
  }
}
`

export const CREATE_EDUCATION_MUTATION = gql `
mutation CreateEducation(
  $school: String!,
  $degree: String!,
  $field: String!,
  $grade: String,
  $fromYear: String!,
  $isSchoolingHere: Boolean,
  $toYear: String
) {
  addEducation(record: {
    school: $school,
    degree: $degree,
    field: $field,
    grade: $grade,
    fromYear: $fromYear,
    isSchoolingHere: $isSchoolingHere,
    toYear: $toYear
  }) {
    recordId
    record{
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
`

export const UPDATE_EDUCATION_MUTATION = gql `
mutation UpdateEducation(
  $id: MongoID!,
  $school: String,
  $degree: String,
  $field: String,
  $grade: String,
  $fromYear: String,
  $isSchoolingHere: Boolean,
  $toYear: String
) {
  updateEducation(record: {
    _id: $id,
    school: $school,
    degree: $degree,
    field: $field,
    grade: $grade,
    fromYear: $fromYear,
    isSchoolingHere: $isSchoolingHere,
    toYear: $toYear
  }) {
    recordId
    record{
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
`

export const DELETE_EDUCATION_MUTATION = gql `
mutation DeleteEducation(
  $id: MongoID!
) {
  deleteEducation(_id: $id){
    recordId
    record{
      school
    }
  }
}
`
