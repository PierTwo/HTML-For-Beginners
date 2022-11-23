import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import auth from '../utils/auth';
import Quiz from './Quiz';

const Home = () => {
  return <div className="App">{auth.loggedIn() && Quiz()}</div>;
};

export default Home;
