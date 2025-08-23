import React, { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              Gun's Portfolio
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
             {isDarkMode ? (
                <BsFillSunFill className="w-5 h-5 text-yellow-500" />
              ) : (
                <BsFillMoonStarsFill className="w-5 h-5 text-gray-500" />
              )} 
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;