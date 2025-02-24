import React from "react";
import Navbar from "../firstpage/Navbar"; // ✅ Corrected path
import Footer from "../firstpage/Footer"; // ✅ Corrected path
import Card from "../firstpage/Card"; // ✅ Corrected path
import "../styles/home.css";
import "../creatquizpage/CreateQuiz";

function Home() {
  return (
    <div>
      <Navbar />
      
      <div className="card-container">
      <Card 
        title="Create a Quiz" 
        description="Make your own quiz and test knowledge!" 
        buttonText="Create Quiz" 
        link="/CreateQuiz"
      />

      <Card 
        title="Take a Quiz" 
        description="Attempt quizzes and see how well you score!" 
        buttonText="Start Quiz" 
        link="/takequiz"
      />

      <Card 
        title="Leaderboard" 
        description="View top scores and challenge others!" 
        buttonText="View Rankings" 
        link="/leaderboard"
      />
    </div>
      <Footer />
    </div>
  );
}

export default Home;
