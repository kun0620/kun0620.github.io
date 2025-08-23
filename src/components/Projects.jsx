import React from 'react';
import TodoList from './ToDoList';
import WeatherApp from './WeatherApp';
import Calculator from './Calculator';
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          โปรเจกต์ของฉัน
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              To-Do List App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              แอปพลิเคชันสำหรับจัดการรายการสิ่งที่ต้องทำ แสดงให้เห็นถึงทักษะการจัดการ **State** และการทำงานกับ **UI**
            </p>
            <TodoList />
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com/kun0620/react-todo-app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://kun0620.github.io/react-todo-app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <BsArrowUpRightSquareFill size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Weather App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              แอปพลิเคชันพยากรณ์อากาศที่ดึงข้อมูลจาก **OpenWeather API** แสดงการใช้งาน **API** และการแสดงผลข้อมูลแบบเรียลไทม์
            </p>
            <WeatherApp />
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com/kun0620/react-weather-app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://kun0620.github.io/react-weather-app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <BsArrowUpRightSquareFill size={24} />
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Simple Calculator
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              เครื่องคิดเลขพื้นฐานที่สร้างด้วย **React** แสดงทักษะการสร้าง **Logic** และ **UI** สำหรับการคำนวณ
            </p>
            <Calculator />
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com/kun0620/react-calculator-app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://kun0620.github.io/react-calculator-app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
                <BsArrowUpRightSquareFill size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;