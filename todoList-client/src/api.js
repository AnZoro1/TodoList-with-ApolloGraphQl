import { gql } from "@apollo/client";
// все crud операции
export const GET_POSTS = gql` 
query AllPosts {
allPosts{
  id
title
  User {
    name
  }
  Comments {
    body
  }
}
}
`;

export const ADD_POST = gql`
mutation CreatePost(
$title: String!
$views: Int!
$user_id: ID!) {
  createPost(title: $title, views: $views, user_id: $user_id) {
    id
    title
    views
    user_id
  }
}
`;

export const UPDATE_POST = gql`
mutation UpdatedPost($id: ID! $title: String){
  updatePost(id:$id, title: $title) {
    id
    title
  }
} 
`;

export const REMOVE_POST = gql`
mutation RemovePost($id: ID!) {
  removePost(id: $id) {
    id
  }
}
`;

