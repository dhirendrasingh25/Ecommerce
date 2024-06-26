import { gql } from "@apollo/client";

export const ADD_PROJECTS=gql`
mutation addProject($name: String!,$description: String! , $status: ProjectStatus! , $clientId: ID!){
    addProject(name:$name , description:$description , status: $status, clientId:$clientId){
      id
    } 
  }
`

export const DELETE_PROJECTS=gql`
mutation deleteProject($id: ID!){
  deleteProject(id:$id){
    id
  }
}
`

export const UPDATE_PROJECT=gql`
  mutation updateProject($id:ID!,$name:String!,$description:String!,$status:ProjectStatusUpdate!){
    updateProject(id:$id,name:$name,description:$description,status:$status){
      id
    }
  }
`