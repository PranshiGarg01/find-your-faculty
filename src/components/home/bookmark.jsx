import React from "react";
import "./bookmark.css";
import t1 from "../home/t1_stayajit.png";
import { useNavigate } from "react-router-dom"; 

const facultyList = [
  {
    name: "Dr. SATYAJIT DAS",
    image: t1,
    link: "satyajit-das", 
    overall : 4.4,
    notes: 4.4,
    marks: 4.4
  },
  //
];

const renderStars = (rating) => {
    const rounded = Math.round(rating);
    return (
      <div className="star-row">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < rounded ? "#FBFF0C" : "#ccc", fontSize: "42px", textShadow: "0 0 0 #000" }}>
            ★
          </span>
        ))}
      </div>
    );
  };

const Bookmark = () => {
  const navigate = useNavigate(); 

  const handleKnowMoreClick = (facultyLink) => {
    navigate(`/faculty/${facultyLink}`);
  };

  return (
    <div className="bookmark-page">
      <h2 className="bookmark-title">BOOKMARKED FACULTY</h2>

      <div className="card-grid">
        {facultyList.map((faculty, idx) => (
          <div className="faculty-card" key={idx}>
            <div className="faculty-name">{faculty.name}</div>
            <div className="faculty-content">
                <img src={faculty.image} alt={faculty.name} className="faculty-photo" />

                <div className="rating-block">
                <div className="rating-label">Overall : {faculty.overall}/5</div>
                {renderStars(faculty.overall)}

                <div className="rating-label">Notes : {faculty.notes}/5</div>
                {renderStars(faculty.notes)}

                <div className="rating-label">Marks : {faculty.marks}/5</div>
                {renderStars(faculty.marks)}
                </div>
            </div>

            <button
              className="know-more-btn"
              onClick={() => handleKnowMoreClick(faculty.link)}
            >
              Know More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
