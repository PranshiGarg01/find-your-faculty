import React, { useState } from "react";
import "./home.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import teacherImage from "./teacher.png";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <h1 className="home-title">Review Your Faculty</h1>

          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Enter Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <p className="input-note">*Enter the name as it appears on vtop</p>
        </div>

        <div className="home-right">
          <img src={teacherImage} alt="Teacher" className="teacher-image" />
        </div>
      </div>

      <p className="footer-text">
        EXPLORE 2000+ FACULTIES FOR VIT VELLORE
      </p>
    </div>
  );
}

export default Home;
