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
export const UPDATE_COMPANY_JOB_MUTATION = gql `
  mutation UpdateJob(
    $id: MongoID!,
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
  updateJob(record:{
    _id: $id,
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

export const DELETE_COMPANY_JOB_MUTATION = gql `
mutation DeleteJob(
  $id: MongoID!
) {
  deleteJob(_id: $id){
    recordId
    record{
      role
    }
  }
}
`

export const CREATE_COMPANY_MESSAGE_MUTATION = gql `
  mutation CreateMessage(
    $company: MongoID!,
    $title: String!,
    $message: String!
  ){
  createCompanyMessage(record:{
    company: $company,
    title: $title,
    message: $message,
  }){
    recordId
    record{
      title
    }
  }
}
`
