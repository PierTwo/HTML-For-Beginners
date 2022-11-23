import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const GET_PROGRESS = gql`
  query getProgress(
    $username: String!
    $tutorial_id: Int
    $step_completed: Int
  ) {
    getProgress(
      username: $username
      tutorial_id: $tutorial_id
      step_completed: $step_completed
    ) {
      results {
        username
        tutorial_id
        step_completed
      }
    }
  }
`;
