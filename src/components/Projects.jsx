import React from 'react';
import project1Image from '../assets/project-1.png';
import project2Image from '../assets/project-2.jpg';
import project3Image from '../assets/project-3.jpg';

function Projects() {
  const projects = [
    {
      title: "โปรเจกต์ที่ 1: ระบบจัดการข้อมูลลูกค้า",
      description: "ระบบ CRUD (Create, Read, Update, Delete) สำหรับจัดการข้อมูลลูกค้า ใช้ React, Node.js และ MongoDB",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: project1Image,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "โปรเจกต์ที่ 2: เว็บไซต์อีคอมเมิร์ซ",
      description: "เว็บไซต์ร้านค้าออนไลน์แบบ Full Stack ที่มีระบบตะกร้าสินค้าและ checkout",
      technologies: ["React", "Redux", "Firebase"],
      image: project2Image,
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "โปรเจกต์ที่ 3: แอปพลิเคชันเช็คสภาพอากาศ",
      description: "แอปพลิเคชันที่ใช้ API สาธารณะเพื่อแสดงผลข้อมูลสภาพอากาศแบบ Real-time",
      technologies: ["React", "Fetch API", "Tailwind CSS"],
      image: project3Image,
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">โปรเจกต์ของฉัน</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  <a href={project.githubLink} className="text-blue-600 dark:text-blue-400 hover:underline font-medium">GitHub</a>
                  <a href={project.liveLink} className="text-green-600 dark:text-green-400 hover:underline font-medium">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;