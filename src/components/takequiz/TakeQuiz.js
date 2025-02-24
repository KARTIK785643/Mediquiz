import React, { useState, useEffect } from "react";
import "./quiz.css";

const TakeQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Load quizzes from localStorage
  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("quizData"));
    if (savedQuiz) {
      setQuizzes([savedQuiz]); // Store as an array for selection
    }
  }, []);

  // Handle quiz selection
  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
  };

  // Handle answer selection
  const handleAnswer = (option) => {
    setSelectedOption(option);
  };

  // Move to next question
  const handleNext = () => {
    if (!selectedQuiz) return;

    if (selectedOption === selectedQuiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < selectedQuiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {/* Quiz selection screen */}
      {!selectedQuiz ? (
        <div>
          <h2>Select a Quiz</h2>
          {quizzes.length > 0 ? (
            <ul>
              {quizzes.map((quiz, index) => (
                <li key={index}>
                  <button onClick={() => handleQuizSelect(quiz)}>
                    {quiz.title}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No quizzes available</p>
          )}
        </div>
      ) : quizCompleted ? (
        // Quiz completion screen
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {selectedQuiz.questions.length}</p>
          <button onClick={() => setSelectedQuiz(null)}>Take Another Quiz</button>
        </div>
      ) : (
        // Quiz question screen
        <div className="quiz-box">
          {selectedQuiz.questions && selectedQuiz.questions[currentQuestionIndex] ? (
            <>
              {/* ✅ Question is now displayed correctly */}
              <h2 className="question-text">
                Question {currentQuestionIndex + 1}: {selectedQuiz.questions[currentQuestionIndex].text}
              </h2>

              {/* ✅ Options are displayed correctly */}
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

              {/* Next button */}
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
  );
};

export default TakeQuiz;
