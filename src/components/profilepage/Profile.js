// Profile.js
import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css"; // Using CSS Modules

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    profilePic: "https://via.placeholder.com/150",
    rank: "Silver",
    totalQuizzes: 12,
    accuracy: 85,
    achievements: ["Fast Solver", "Perfect Score", "Quiz Master"],
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img src={user.profilePic} alt="Profile" className={styles.profileImg} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <h2>{user.totalQuizzes}</h2>
          <p>Quizzes Taken</p>
        </div>
        <div className={styles.statCard}>
          <h2>{user.rank}</h2>
          <p>Rank</p>
        </div>
        <div className={styles.statCard}>
          <h2>{user.accuracy}%</h2>
          <p>Accuracy</p>
        </div>
      </div>
      <div className={styles.achievementsSection}>
        <h3>Achievements</h3>
        <div className={styles.achievementsList}>
          {user.achievements.map((achieve, index) => (
            <span key={index} className={styles.achievementBadge}>
              {achieve}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
