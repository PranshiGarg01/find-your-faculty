import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar";
import Home from "./components/home/home";
import SearchResults from "./components/home/search";
import FacultyInfo from "./components/home/FacultyInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/faculty/:facultyId" element={<FacultyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

