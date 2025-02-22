import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"; 
import CreateQuiz from "./components/creatquizpage/CreateQuiz"; // ✅ Import CreateQuiz


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateQuiz" element={<CreateQuiz />} /> {/* ✅ Add Route */}

      </Routes>
    </Router>
  );
}

export default App;
