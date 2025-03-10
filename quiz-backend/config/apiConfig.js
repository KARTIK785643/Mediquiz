const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const API_CONFIG = {
  QUIZ_API: `${API_BASE_URL}/quizzes`
};

export default API_CONFIG;
