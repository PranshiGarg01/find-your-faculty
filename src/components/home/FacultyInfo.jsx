import React from "react";
import "./facultyInfo.css";
import t1 from "../home/t1_stayajit.png";
import { useParams } from "react-router-dom";

function FacultyInfo() {
  const { facultyId } = useParams();

  // ⭐ Helper function to render colored Unicode stars
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

  return (
    <div className="faculty-info-page">
      <h1 className="faculty-info-title">FACULTY INFO</h1>

      <div className="faculty-details-section">
        {/* Left: Image */}
        <div className="teacher-image-container">
          <img src={t1} alt="Faculty" className="teacher-image" />
        </div>

        {/* Middle: Info */}
        <div className="teacher-info-texts">
          <h2 className="teacher-name">Dr. SATYAJIT DAS</h2>
          <p className="teacher-school">School: School of Electrical Engineering</p>
          <p className="teacher-cabin">Cabin: CBMR 207D</p>
          <p className="teacher-email">Email: satyajit.das@vit.ac.in</p>
          <button className="rev-button">Request Review</button>
          <button className="rev-button">Write Review</button>
        </div>

        {/* Right: Ratings */}
        <div className="ratings-section">
          <h2 className="ratings-title">Ratings</h2>

          <p className="rating-text">Overall: 4.4/5</p>
          {renderStars(4.4)}

          <p className="rating-text">Notes: 4.4/5</p>
          {renderStars(4.4)}

          <p className="rating-text">Marks: 4.4/5</p>
          {renderStars(4.4)}
        </div>
      </div>

      {/* Reviews */}
      <h2 className="student-reviews-title">Student Reviews</h2>

      <div className="review-box">
        <div className="review-header">
          <div className="review-circle" />
          <p className="review-name">Name</p>
        </div>

        <div className="rating-section">
          <div className="rating-label">
            <span>Overall:</span>
            {renderStars(5)}
          </div>
          <div className="rating-label">
            <span>Notes:</span>
            {renderStars(4)}
          </div>
          <div className="rating-label">
            <span>Marks:</span>
            {renderStars(4)}
          </div>
        </div>

        <p className="review-text">He has very good notes and he gives marks.</p>
      </div>
    </div>
  );
}

export default FacultyInfo;
