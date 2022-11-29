import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TUTORIAL } from '../utils/queries';
import { SET_TUTORIAL } from '../utils/mutations';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const Tutorial = (props) => {
  const [username] = useState(props.data.username);
  // const [code, setCode] = useState('<h1>Hello<h1>');
  const [currentStep, setCurrentStep] = useState(0);
  const [editor, setEditor] = useState(null);

  const { loading, data, refetch } = useQuery(GET_TUTORIAL, {
    fetchPolicy: 'network-only',
    variables: { username, tutorial_id: 1 },
  });
  const [setTutorial] = useMutation(SET_TUTORIAL, {
    fetchPolicy: 'network-only',
    onCompleted() {
      refetch({
        username,
        tutorial_id: 1,
        step_completed: currentStep + 1,
      });
    },
  });
  useEffect(() => {
    if (data?.tutorial) {
      setCurrentStep(
        data.tutorial?.step_completed ? data.tutorial.step_completed : 0
      );
    }
  }, [data]);
  // useEffect(() => {
  //   var myTextArea = document.getElementById('myText');
  //   var myCodeMirror = CodeMirror.fromTextArea(myTextArea);
  //   myCodeMirror.setSize(500, 100);
  // }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log(data);
    console.log(currentStep);
  }

  const steps = [
    {
      text: 'Hyper Text Markup Language or HTML is used to describe the structure of a webpage and tells the browser how to display content. This tutorial aims to teach you the basics of HTML by having you complete various levels. ',
      useEditor: false,
    },

    {
      text: "Let's begin by learning what we need to do to start our HTML document. The first thing is to begin our documents with <!DOCTYPE html> this gives the browser information about the type of document. ",
      useEditor: false,
    },
    {
      text: 'Next, we will use our opening <html> and closing </html> tags; note how the closing html tag has the / before the tag name. These tags are used to contain all other tags with the exception of <!DOCTYPE html> which should always come first. ',
      useEditor: false,
    },
    {
      text: 'Within our html tags, we will use an opening <body> and closing </body> tag to designate the part of the HTML document that will be visible in the browser. These tags will go within the html tags, all tags that are contained within other tags should be indented as seen in the following example.',
      useEditor: false,
    },
    {
      text: 'To add a title to your HTML document you will simply add <title>’title here’</title> within the <head></head> tags.',
      useEditor: false,
    },
    {
      text: 'Most tags in HTML are not self closing. So far you have been working on tags that need to be closed such as <head></head>, <html></html> and so on. There are some tags in HTML that are actually self closing such as <img /> which I am sure you can imagine is linking in an image. Try creating an image tag in the embedded code editor. Set the src property to an image url of your choice. You can set the alt to give it a name and even change the height and width.',
      useEditor: true,
      answer:
        '<img src="https://logoeps.com/wp-content/uploads/2014/06/36972-html-5-sketched-logo-outline-icon-vector-icon-vector-eps.png" alt="html5">',
    },
    {
      text: 'A heading tag is defined by using <h1></h1>. These tags can go all the way up to <h6>. The lower the number, such as 1 the bigger the text will be, the higher the number, such as 6 the smaller the text will be. Use the code editor to try out different heading tags.',
      useEditor: true,
      answer:
        '<h1>Hello!<h1> <h2>Hello!<h2> <h3>Hello!<h3> <h4>Hello!<h4> <h5>Hello!<h5> ',
    },
    {
      text: 'Link tags are defined by using <a href= “”>’text here’</a>. This allows the user to add links that they need to their document. Once this is added the link will be clickable by a user and will be taken to that link provided. Make a a tag and set the href to a url of your choosing. Usually in a tags you want to make a target propert and set it to blank like target =_blank',
      useEditor: true,
      answer: '<a href="https://google.com" target="_blank">Click Me<a>',
    },
    {
      text: 'You can create list in HTML using either <ol> tags which stand for ordered lists and then <ul> tags which stand for unordered lists. Once the list is created you will use <li> in between whatever list you use, the ordered or unordered tags. The <li> tag stands for list item so that will end up adding an item to your list. Make alist of at least two items by wrapping ol tags in li tags for each item you want.',
      useEditor: true,
      answer: '<ol><li>Coffee</li> <li>Tea</li> <li>Milk</li><ol>',
    },
  ];

  const handleClick = () => {
    setCurrentStep(currentStep + 1);
    if (
      currentStep + 1 > data.tutorial?.step_completed ||
      !data.tutorial?.step_completed
    ) {
      setTutorial({
        variables: {
          username,
          tutorial_id: 1,
          step_completed: currentStep + 1,
        },
      });
    }
  };
  const options = {
    lineNumbers: true,
  };
  const revealAnswer = (answer) => {
    editor.setValue(answer);
  };
  return (
    <div className="rounded p-8 mt-8 flex justify-center">
      <div className="rounded p-8 grid justify-items-center bg-sky-200 shadow-inner">
        <div className="pt-2 pb-2 mt-2 mb-2">
          <h1 className="bg-zinc-900 rounded p-2 font-extrabold text-4xl text-slate-50">
            HTML Tutorial
          </h1>

          <h2 className="font-bold text-2xl">
            Step: {currentStep + 1} of {steps.length}
          </h2>
        </div>
        <div className="p-2 m-2">
          <h3 className="mt-3 mb-3 text-xl">{steps[currentStep].text}</h3>
          {steps[currentStep].useEditor && (
            <>
              <CodeMirror
                options={options}
                // value={code}
                editorDidMount={(e) => {
                  setEditor(e);
                  e.setSize(null, 100);
                }}
                onChange={(e) => {
                  // setCode(e.getValue());
                  document.getElementById('display').src =
                    'data:text/html;charset=utf-8,' + e.getValue();
                }}
              />
              <button onClick={() => revealAnswer(steps[currentStep].answer)}>
                Show Me
              </button>
              <iframe id="display" title="Output" />
            </>
          )}
          {currentStep > 0 && (
            <button
              onClick={() => {
                if (editor) editor.setValue('');
                setCurrentStep(currentStep - 1);
              }}
            >
              Previous
            </button>
          )}
          {currentStep + 1 < steps.length && (
            <button
              onClick={() => {
                if (editor) editor.setValue('');
                handleClick();
              }}
            >
              Next
            </button>
          )}
          {data.tutorial?.step_completed === steps.length - 1 && (
            <Link className="btn font-medium p-3 m-2" to="/quiz">
              Take Quiz
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
