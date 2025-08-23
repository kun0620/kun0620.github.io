import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: '90%', color: 'bg-red-500' },
    { name: 'JavaScript', level: '85%', color: 'bg-yellow-500' },
    { name: 'React', level: '80%', color: 'bg-blue-500' },
    { name: 'Node.js', level: '70%', color: 'bg-green-500' },
    { name: 'SQL/NoSQL', level: '60%', color: 'bg-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          ทักษะของฉัน
        </h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {skill.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${skill.color}`} 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;