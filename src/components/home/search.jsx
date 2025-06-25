import React from "react";
import "./search.css";
import t1 from "../home/t1_stayajit.png";
import { useNavigate } from "react-router-dom"; 

const facultyList = [
  {
    name: "Dr. SATYAJIT DAS",
    image: t1,
    link: "satyajit-das", 
  },
  //
];

const SearchResults = ({ searchQuery = "Dr. SATYAJIT DAS" }) => {
  const navigate = useNavigate(); 

  const handleKnowMoreClick = (facultyLink) => {
    navigate(`/faculty/${facultyLink}`);
  };

  return (
    <div className="search-page">
      <div className="search_bar">{searchQuery}</div>

      <div className="card-grid">
        {facultyList.map((faculty, idx) => (
          <div className="faculty-card" key={idx}>
            <img src={faculty.image} alt={faculty.name} className="faculty-photo" />
            <div className="faculty-name">{faculty.name}</div>
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

export default SearchResults;
