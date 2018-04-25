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
      isVerified
    }
  }
}
`
