import React, { useState, useEffect } from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './index.css';

function App() {
  // useState เพื่อจัดการสถานะของธีม
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // useEffect เพื่อจัดการคลาส 'dark' ที่ body และบันทึกใน localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // ฟังก์ชันสลับโหมด
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-500">
      
      {/* ปุ่มสลับโหมด */}
      <button 
        onClick={toggleDarkMode} 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md focus:outline-none"
      >
        {isDarkMode ? (
          <BsFillSunFill className="w-6 h-6 text-yellow-500" />
        ) : (
          <BsFillMoonStarsFill className="w-6 h-6 text-gray-500" />
        )}
      </button>

      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;