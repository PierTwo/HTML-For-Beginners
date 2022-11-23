import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SET_PROGRESS = gql`
  mutation setProgress(
    $username: String!
    $tutorial_id: Int
    $step_completed: Int
  ) {
    setProgress(
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
