import React, { useState, useEffect } from "react";
import "./quiz.css";
import "../styles/home.css";
import Navbar from "../firstpage/Navbar";

const TakeQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizLink, setQuizLink] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizLoaded, setQuizLoaded] = useState(false);

  // Load quizzes from localStorage
  useEffect(() => {
    const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(savedQuizzes);
  }, []);

  // Handle quiz link submission
  const handleQuizLinkSubmit = () => {
    const quizIndex = quizLink.split("/").pop(); // Extract quiz index from the URL
    const quizData = quizzes[quizIndex];

    if (quizData) {
      setSelectedQuiz(quizData);
      setQuizLoaded(true);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setScore(0);
      setQuizCompleted(false);
    } else {
      alert("Invalid Quiz Link. Please enter a valid link.");
    }
  };

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  // Move to next question
  const handleNext = () => {
    if (!selectedQuiz) return;

    if (selectedOption === selectedQuiz.questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 < selectedQuiz.questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {!quizLoaded ? (
          <div className="quiz-link-container">
            <h2>Enter Quiz Link</h2>
            <input
              type="text"
              placeholder="Paste quiz link here..."
              value={quizLink}
              onChange={(e) => setQuizLink(e.target.value)}
              className="quiz-link-input"
            />
            <button onClick={handleQuizLinkSubmit} className="submit-link-btn">
              Start Quiz
            </button>
          </div>
        ) : !selectedQuiz ? (
          <p>No quiz selected</p>
        ) : quizCompleted ? (
          <div className="result">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} / {selectedQuiz.questions.length}</p>
            <button onClick={() => setQuizLoaded(false)}>Take Another Quiz</button>
          </div>
        ) : (
          <div className="quiz-box">
            {selectedQuiz?.questions && selectedQuiz.questions[currentQuestionIndex] ? (
              <>
                <h2 className="question-text">
                  Question {currentQuestionIndex + 1}: {selectedQuiz.questions[currentQuestionIndex].text}
                </h2>

                <div className="options">
                  {selectedQuiz.questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn ${selectedOption === option ? "selected" : ""}`}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <button onClick={handleNext} className="next-btn">
                  {currentQuestionIndex === selectedQuiz.questions.length - 1 ? "Finish" : "Next"}
                </button>
              </>
            ) : (
              <h2>No Questions Available</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default TakeQuiz;
