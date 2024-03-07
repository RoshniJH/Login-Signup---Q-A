// Questionnaire.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";

const questions = [
  "What is your name?",
  "What is your age?",
  "What is your skill?",
  "What is your exp?",
  // Add more questions here
];

function Questionnaire() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  console.log("Questionnaireanswers", answers);
  const [currentStep, setCurrentStep] = useState(0);
  const history = useNavigate();

  const handleAnswerSubmit = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    console.log("newAnswers", newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      history("/view", { state: newAnswers });
      console.log("push", answers);
    }
  };

  return (
    <div>
      <h1>Question {currentStep + 1}</h1>
      <Question
        question={questions[currentStep]}
        onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
}

export default Questionnaire;
