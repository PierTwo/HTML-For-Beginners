const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    tutorial: [Tutorial]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Tutorial {
    username: String
    step_completed: Int
    tutorial_id: Int
  }

  type Query {
    user: [User]
    me: User
    tutorial(username: String, tutorial_id: Int): Tutorial
    completion: Tutorial
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    setTutorial(
      username: String!
      tutorial_id: Int
      step_completed: Int
    ): Tutorial
  }
`;

module.exports = typeDefs;
