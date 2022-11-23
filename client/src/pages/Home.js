import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

const Home = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: 'What does HTML stand for?',
      options: [
        { id: 0, text: 'Hope To Make Lines', isCorrect: false },
        { id: 1, text: 'How To Make Light', isCorrect: false },
        { id: 2, text: 'Honestly Too Much Language', isCorrect: false },
        { id: 3, text: 'Hyper Text Markup Language', isCorrect: true },
      ],
    },
    {
      text: 'What is the very first tag you will use in a HTML document?',
      options: [
        { id: 0, text: '<!DOCTYPE html>', isCorrect: true },
        { id: 1, text: '<start></start>', isCorrect: false },
        { id: 2, text: '<header></header>', isCorrect: false },
        { id: 3, text: '<!BEGIN html>', isCorrect: false },
      ],
    },
    {
      text: 'What tag contains all other tags with the exception of <!DOCTYPE html> tag?',
      options: [
        { id: 0, text: '<html></html>', isCorrect: true },
        { id: 1, text: '<head></head>', isCorrect: false },
        { id: 2, text: '<body></body>', isCorrect: false },
        { id: 3, text: '<footer></footer>', isCorrect: false },
      ],
    },
    {
      text: 'What tags are used to start the area that is visible in the browser?',
      options: [
        { id: 0, text: '<html></html>', isCorrect: false },
        { id: 1, text: '<body></body>', isCorrect: true },
        { id: 2, text: '<head></head>', isCorrect: false },
        { id: 3, text: '<!DOCTYPE html>', isCorrect: false },
      ],
    },
    {
      text: 'What tag defines the documents title that is shown in the browser?',
      options: [
        { id: 0, text: '<header></header>', isCorrect: false },
        { id: 1, text: '<title></title>', isCorrect: true },
        { id: 2, text: '<div></div>', isCorrect: false },
        { id: 3, text: '<head></head>', isCorrect: false },
      ],
    },
    {
      text: 'What is an example of a self closing HTML tag?',
      options: [
        { id: 0, text: '<header />', isCorrect: false },
        { id: 1, text: '<img />', isCorrect: true },
        { id: 2, text: '<head />', isCorrect: false },
        { id: 3, text: '<div />', isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>HTML Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
