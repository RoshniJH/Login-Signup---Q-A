// Question.js
import React, { useState } from "react";

function Question({ question, onAnswerSubmit }) {
  const [answer, setAnswer] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerSubmit(answer);
    console.log("answer", answer);
    setAnswer("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {question}
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Question;
