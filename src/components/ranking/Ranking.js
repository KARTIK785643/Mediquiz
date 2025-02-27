import React, { useState, useEffect } from "react";
import "./ranking.css";
import Navbar from "../firstpage/Navbar";

const RankingPage = () => {
  const [users, setUsers] = useState([]);

  // Dummy user data (replace with API call if needed)
  useEffect(() => {
    const dummyUsers = [
      { id: 1, name: "Alice", score: 85 },
      { id: 2, name: "Bob", score: 92 },
      { id: 3, name: "Charlie", score: 78 },
      { id: 4, name: "David", score: 95 },
      { id: 5, name: "Eve", score: 88 },
    ];

    // Sort users by score (descending order)
    const sortedUsers = dummyUsers.sort((a, b) => b.score - a.score);
    setUsers(sortedUsers);
  }, []);

  return (
    <>
      <Navbar />
      <div className="ranking-container">
          

      <h2>User Rankings</h2>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default RankingPage;
