import React from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {


  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Projects /> {/* ใช้ Component Projects */}
        <AboutMe />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;