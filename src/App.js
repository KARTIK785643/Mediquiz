import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"; 
import CreateQuiz from "./components/creatquizpage/CreateQuiz"; // ✅ Import CreateQuiz
import TakeQuiz from "./components/takequiz/TakeQuiz";
import Ranking  from "./components/ranking/Ranking";
import Profile from "./components/profilepage/Profile";
import About from "./components/Aboutpage/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} />
        <Route path="/takequiz" element={<TakeQuiz />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
