import { gql } from '@apollo/client';

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

export const SET_TUTORIAL = gql`
  mutation setTutorial(
    $username: String!
    $tutorial_id: Int
    $step_completed: Int
  ) {
    setTutorial(
      username: $username
      tutorial_id: $tutorial_id
      step_completed: $step_completed
    ) {
      username
      tutorial_id
      step_completed
    }
  }
`;
