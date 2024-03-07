// // ViewAnswers.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function ViewAnswers({ answers }) {
//   const [answer, setAnswer] = useState("");
//   const history = useNavigate();
//   console.log("ViewAnswersanswers", answers);

//   const handleSubmit = () => {
//     // Handle submission logic here

//     // Redirect user to home page or thank you page
//     setAnswer("8787jhhjj");
//     history("/");
//     console.log("Answers submitted:", answer);
//   };

//   return (
//     <div>
//       <h1>View Answers</h1>
//       {/* {answers.map((answer, index) => (
//         <div key={index}>
//           <p>
//             Question {index + 1}: {answer}
//           </p>
//         </div>
//       ))} */}
//       <button
//         // onClick={handleSubmit}
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default ViewAnswers;
// ViewAnswers.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ViewAnswers() {
  const history = useNavigate();
  const location = useLocation();
  const answers = location.state;
  console.log("location", location.state);

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Answers submitted:", answers);
    // Redirect user to home page or thank you page
    history("/questions");
  };

  return (
    <div>
      <h1>View Answers</h1>
      {answers?.map((answer, index) => (
        <div key={index}>
          <p>
            Question {index + 1}: {answer}
          </p>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ViewAnswers;
