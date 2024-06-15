import Home from "./components/Home/home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";


function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
