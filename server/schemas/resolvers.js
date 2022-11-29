/* eslint-disable camelcase */
const { AuthenticationError } = require('apollo-server-express');
const { User, Tutorial } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    tutorial: async (parent, { username, tutorial_id }) => {
      const results = await Tutorial.findOne({
        username,
        tutorial_id,
      });
      return results;
    },
    completion: async (parent, args, context) => {
      const results = await Tutorial.findOne({
        username: context.user.username,
      });
      return results;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    setTutorial: async (parent, { username, step_completed, tutorial_id }) => {
      console.log('I AM HERE');
      const tutorial = await Tutorial.findOneAndUpdate(
        {
          username,
          tutorial_id,
        },
        {
          username,
          step_completed,
          tutorial_id,
        },
        { upsert: true }
      );
      return tutorial;
    },
  },
};

module.exports = resolvers;
