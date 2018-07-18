/**
* GraphQl Company Queries
*/
import gql from 'graphql-tag'

export const HOME_VIEWER_COMPANY_QUERY = gql`
  query ViewerCompanyQuery{
    viewerCompany{
      company{
        _id
        name
        phone
        email
        website
        address
        stateOfResidence
        description
        cacRegNo
        isVerified
      }
    }
  }
`

export const HOME_COMPANY_JOBS_QUERY = gql`
  query {
    currentTime
    viewerCompany{
      company{
        _id
        name
        jobs(limit: 3){
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
          publishedDate
          isOnDisplay
        }
      }
    }
  }
`
export const COMPANY_JOBS_PAGINATION_QUERY = gql`
  query JobsPagination($page: Int, $perPage: Int){
    currentTime
    viewerCompany{
      company{
        _id
        name
        jobsPagination(page: $page, perPage: $perPage, sort: PUBLISHEDDATE_DESC) {
          items {
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
            publishedDate
            isOnDisplay
          }
          pageInfo {
            currentPage
            perPage
            pageCount
            itemCount
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  }
`

export const COMPANY_SINGLE_JOB_QUERY = gql`
  query ($id: MongoID!){
    companyJobById(_id: $id){
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
      publishedDate
      isOnDisplay
    }
  }
`

export const PROFILE_VIEWER_COMPANY_QUERY = gql`
  query ViewerCompanyQuery{
    viewerCompany{
      company{
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
export const JOB_VIEWER_COMPANY_QUERY = gql`
  query ViewerCompanyQuery{
    viewerCompany{
      company{
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
export const PROFILE_INDUSTRY_MANY_QUERY = gql`
  query IndustryMany{
    industryMany {
      _id
      name
    }
  }
`
// export const CREATE_EXPERIENCE_MUTATION = gql `
// mutation CreateExperience(
//   $companyName: String!, $role: String!, $address: String!,
//   $salary: String, $isWorkingHere: Boolean!, $state: EnumJobExperienceState!,
//   $fromYear: String!, $fromMonth: EnumJobExperienceFromMonth!,
//   $toYear: String, $toMonth: EnumJobExperienceToMonth,
// ) {
//   # addJobExperience(record: {companyName: $companyName, role: $role, address: $address, salary: $salary, fromMonth: January, fromYear: $fromYear}) {
//   addJobExperience(record: {
//     companyName: $companyName,
//     role: $role, address: $address, state: $state,
//     salary: $salary, isWorkingHere: $isWorkingHere,
//     fromMonth: $fromMonth, fromYear: $fromYear,
//     toMonth: $toMonth, toYear: $toYear
//   }) {
//     recordId
//     record{
//       _id
//       companyName
//       role
//       fromYear
//       fromMonth
//       toYear
//       toMonth
//       startDate
//       address
//       state
//       salary
//       duration
//       isWorkingHere
//     }
//   }
// }
// `
//
// export const UPDATE_EXPERIENCE_MUTATION = gql `
// mutation UpdateExperience(
//   $id: MongoID!, $companyName: String, $role: String, $address: String,
//   $salary: String, $isWorkingHere: Boolean, $state: EnumJobExperienceState,
//   $fromYear: String, $fromMonth: EnumJobExperienceFromMonth,
//   $toYear: String, $toMonth: EnumJobExperienceToMonth,
// ) {
//   updateJobExperience(record: {
//     _id: $id, companyName: $companyName,
//     role: $role, address: $address, state: $state,
//     salary: $salary, isWorkingHere: $isWorkingHere,
//     fromMonth: $fromMonth, fromYear: $fromYear
//     toMonth: $toMonth, toYear: $toYear
//     }) {
//     recordId
//     record{
//       _id
//       companyName
//       role
//       fromYear
//       fromMonth
//       toYear
//       toMonth
//       startDate
//       address
//       state
//       salary
//       duration
//       isWorkingHere
//     }
//   }
// }
// `
//
// export const DELETE_EXPERIENCE_MUTATION = gql `
// mutation DeleteExperience(
//   $id: MongoID!
// ) {
//   deleteJobExperience(_id: $id){
//     recordId
//     record{
//       companyName
//     }
//   }
// }
// `
