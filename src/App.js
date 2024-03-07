// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Questionnaire from "./components/QuesComponent/Questionnaire";
import ViewAnswers from "./components/QuesComponent/ViewAnswers";
import LoginSignup from "./components/LoginSignup/LoginSignup";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LoginSignup} />

          <Route exact path="/questions" Component={Questionnaire} />
          <Route exact path="/view" Component={ViewAnswers} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
