import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import YogaPoses from "./components/YogaPoses";
import AboutYoga from "./components/AboutYoga";
import Tutorials from "./components/Tutorials";
import Contact from "./components/Contact";  
import AboutUs from "./components/AboutUs"; 
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <YogaPoses />
            <AboutYoga />
          </>
        } />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<AboutUs />} /> 

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
