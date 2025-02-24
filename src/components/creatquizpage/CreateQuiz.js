import React, { useState, useEffect } from "react";
import QuizForm from "./QuizForm";
import "./style.css";

const CreateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(savedQuizzes);
  }, []);

  const handleQuizSubmit = (quizData) => {
    const updatedQuizzes = [...quizzes, quizData];
    setQuizzes(updatedQuizzes);
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes)); // Save to localStorage
  };

  return (
    <div className="container">
      <h2>Create Quiz</h2>
      <QuizForm onSubmit={handleQuizSubmit} />
      <h2>Created Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <strong>{quiz.title}</strong>: {quiz.description} ({quiz.questions.length} questions)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateQuiz;
