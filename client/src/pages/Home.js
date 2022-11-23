import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import auth from '../utils/auth';
// import Quiz from './Quiz';
import Tutorial from './Tutorial';

const Home = () => {
  return <div className="App">{auth.loggedIn() && Tutorial()}</div>;
};

export default Home;
