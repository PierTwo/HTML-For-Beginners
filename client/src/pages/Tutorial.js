import React, { useState } from 'react';

const Tutorial = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [step, setStep] = useState(1);

  const steps = [
    {
      text: 'Hyper Text Markup Language or HTML is used to describe the structure of a webpage and tells the browser how to display content. This tutorial aims to teach you the basics of HTML by having you complete various levels. ',
    },
    {
      text: "Let's begin by learning what we need to do to start our HTML document. The first thing is to begin our documents with <!DOCTYPE html> this gives the browser information about the type of document. ",
    },
    {
      text: 'Next, we will use our opening <html> and closing </html> tags; note how the closing html tag has the / before the tag name. These tags are used to contain all other tags with the exception of <!DOCTYPE html> which should always come first. ',
    },
    {
      text: 'Within our html tags, we will use an opening <body> and closing </body> tag to designate the part of the HTML document that will be visible in the browser. These tags will go within the html tags, all tags that are contained within other tags should be indented as seen in the following example.',
    },
    {
      text: 'To add a title to your HTML document you will simply add <title>’title here’</title> within the <head></head> tags.',
    },
    {
      text: 'Most tags in HTML are not self closing. So far you have been working on tags that need to be closed such as <head></head>, <html></html> and so on. There are some tags in HTML that are actually self closing such as <img /> which I am sure you can imagine is linking in an image.',
    },
    {
      text: 'A heading tag is defined by using <h1></h1>. These tags can go all the way up to <h6>. The lower the number, such as 1 the bigger the text will be, the higher the number, such as 6 the smaller the text will be.',
    },
    {
      text: 'Link tags are defined by using <a href= “”>’text here’</a>. This allows the user to add links that they need to their document. Once this is added the link will be clickable by a user and will be taken to that link provided.',
    },
    {
      text: 'You can create list in HTML using either <ol> tags which stand for ordered lists and then <ul> tags which stand for unordered lists. Once the list is created you will use <li> in between whatever list you use, the ordered or unordered tags. The <li> tag stands for list item so that will end up adding an item to your list.',
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setStep(step + 1);
    }

    if (currentStep + 1 < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartTutorial = () => {
    // setScore(0);
    setCurrentStep(1);
    setShowResults(false);
  };
  return (
    <div className="rounded p-8 mt-8 flex justify-center">
      <div className="rounded p-8 grid justify-items-center bg-sky-200 shadow-inner">
        {/* 1. Header  */}
        <div className="pt-2 pb-2 mt-2 mb-2">
          <h1 className="bg-zinc-900 rounded p-2 font-extrabold text-4xl text-slate-50">
            HTML Tutorial
          </h1>

          {/* 2. Current Score  */}
          <h2 className="font-bold text-2xl">
            Step: {step} of {steps.length}
          </h2>
        </div>

        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */
          <div className="p-2 m-2">
            <button onClick={() => restartTutorial()}>Restart Tutorial</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="p-2 m-2">
            {/* Current Question  */}
            <h3 className="mt-3 mb-3 text-xl">{steps[currentStep].text}</h3>

            {/* List of possible answers  */}
            {/* <ul>
              {steps[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className="mouse-pointer text-lg"
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
