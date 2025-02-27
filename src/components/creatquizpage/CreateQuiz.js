import React, { useState, useEffect } from "react";
import QuizForm from "./QuizForm";
import "./style.css";
import Navbar from "../firstpage/Navbar";

const CreateQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizLinks, setQuizLinks] = useState({}); // Store generated links

  useEffect(() => {
    const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
    setQuizzes(savedQuizzes);
  }, []);

  const handleQuizSubmit = (quizData) => {
    const updatedQuizzes = [...quizzes, quizData];
    setQuizzes(updatedQuizzes);
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));
  };

  const generateQuizLink = (index) => {
    const link = `${window.location.origin}/quiz/${index}`;
    setQuizLinks({ ...quizLinks, [index]: link });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Create Quiz</h2>
        <QuizForm onSubmit={handleQuizSubmit} />
        <h3>Created Quizzes</h3>
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>
              <strong>{quiz.title}</strong>: {quiz.description} ({quiz.questions.length} questions)
              <br />
              <button className="generate-link-btn" onClick={() => generateQuizLink(index)}>
                Generate Link
              </button>
              {quizLinks[index] && (
                <div>
                  <a href={quizLinks[index]} target="_blank" rel="noopener noreferrer">
                    {quizLinks[index]}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreateQuiz;
