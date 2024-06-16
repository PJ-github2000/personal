import Home from "./components/Home/home.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/About/About.js";
import Project from "./components/Projects/Project.js";
import { useState } from "react";
import Contact from "./components/Contact/Contact.js";
import ToggleSwitch from "./switch/switch.jsx";


function App() {
  const [bg, setBg] = useState(["app-white", "black-text"]);
  const background = (toggle) => {
    toggle ? setBg(["app-white", "black-text"]) : setBg(["app", "white-text"]);
  };

  
  return (
    <Router>
      <div className="theme">
          <h1 className={`${bg[1]}`}>Light</h1>
          <ToggleSwitch bgChange={background} />
          <h1 className={`${bg[1]}`}>Dark</h1>
        </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
