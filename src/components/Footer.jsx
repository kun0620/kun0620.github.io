import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-200 py-8 px-4 text-center transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/kun0620"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gun's Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;