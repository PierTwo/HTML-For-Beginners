import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMPLETION } from '../utils/queries';

const Progress_bar = ({ bgcolor, progress, height }) => {
  const { loading, data } = useQuery(GET_COMPLETION);

  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${
          data?.completion.step_completed + 1
        } out of 9 tutorials completed.`}</span>
      </div>
    </div>
  );
};

export default Progress_bar;
