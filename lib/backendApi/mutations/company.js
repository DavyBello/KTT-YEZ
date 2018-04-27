/**
* GraphQl Company Mutations
*/
import gql from 'graphql-tag'

export const LOGIN_COMPANY_MUTATION = gql `
  mutation Login($email: String!, $password: String!) {
    loginCompany ( email: $email, password: $password ) {
      jwt
      name
    }
  }
`

export const SIGNUP_COMPANY_MUTATION = gql `
mutation SignUpCompany($name: String!, $email: String!, $cacRegNo: String!, $password: String!) {
  signUpCompany ( name: $name, email: $email, cacRegNo: $cacRegNo, password: $password ) {
    jwt
    name
  }
}
`

export const UPDATE_COMPANY_MUTATION = gql `
mutation updateCompany(
  $id: MongoID!,
  $phone: String,
  $website: String,
  $address: String,
  $stateOfResidence: EnumCompanyStateOfResidence,
  $description: String,
  $yearFounded: Float,
  $staffSize: EnumCompanyStaffSize,
  $industry: MongoID
  $industries: [MongoID]
){
  companyUpdateById(record:{
    _id: $id,
    phone: $phone,
    website: $website,
    address: $address,
    stateOfResidence: $stateOfResidence,
    description: $description,
    yearFounded: $yearFounded,
    staffSize: $staffSize,
    industry: $industry
    industries: $industries,
  }){
    recordId
    record{
      _id
      name
      phone
      email
      website
      address
      stateOfResidence
      description
      cacRegNo
      yearFounded
      staffSize
      industry
      industries
      isVerified
    }
  }
}
`

export const ADD_COMPANY_JOB_MUTATION = gql `
  mutation AddJob(
    $role: String!,
    $state: EnumJobState!,
    $contactPhone: String!,
    $contactEmail: String!,
    $contactName: String!,
    $salary: String!,
    $industries: [MongoID],
    $employmentType: EnumJobEmploymentType!,
    $expiryDate: Date!,
    $basicDescription: String!,
    $fullDescription: String
  ){
  addJob(record:{
    role: $role,
    state: $state,
    contactPhone: $contactPhone,
    contactEmail: $contactEmail,
    contactName: $contactName,
    salary: $salary,
    industries: $industries,
    employmentType: $employmentType,
    expiryDate: $expiryDate,
    basicDescription: $basicDescription,
    fullDescription: $fullDescription
  }){
    recordId
    record{
      _id
      role
      state
      contactPhone
      contactEmail
      contactName
      salary
      industries
      employmentType
      expiryDate
      basicDescription
      fullDescription
    }
  }
}
`
