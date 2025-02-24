import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"; 
import CreateQuiz from "./components/creatquizpage/CreateQuiz"; // ✅ Import CreateQuiz
import TakeQuiz from "./components/takequiz/TakeQuiz";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/takequiz" element={<TakeQuiz />} />

      </Routes>
    </Router>
  );
}

export default App;
