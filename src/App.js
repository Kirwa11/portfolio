import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
      <Router>
        <Navbar/>
        <div  className="Container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>

        </div>
      </Router>
  );
}

export default App;
