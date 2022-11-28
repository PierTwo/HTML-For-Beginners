import { gql } from '@apollo/client';

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

export const GET_TUTORIAL = gql`
  query tutorial($username: String!, $tutorial_id: Int) {
    tutorial(username: $username, tutorial_id: $tutorial_id) {
      username
      tutorial_id
      step_completed
    }
  }
`;
