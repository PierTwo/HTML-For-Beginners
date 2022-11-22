const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Progress {
    _id: ID
    username: String
    step_completed: Int
    tutorial_id: Int
  }

  type Query {
    user: [User]
    me: User
    getProgress: Progress
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    setProgress(
      username: String!
      tutorial_id: Int
      step_completed: Int
    ): Progress
  }
`

module.exports = typeDefs
