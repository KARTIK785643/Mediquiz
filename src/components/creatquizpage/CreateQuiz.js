import React, { useState } from "react";
import QuizForm from "./QuizForm";
import "./style.css";

const CreateQuiz = () => {  // ✅ Name starts with uppercase
  const [quizzes, setQuizzes] = useState([]);

  const handleQuizSubmit = (quizData) => {
    setQuizzes([...quizzes, quizData]);
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
