import React from 'react';
import Lottie from 'react-lottie';
import developerAnimation from '../assets/R0wRkoNtKf.json'; // อย่าลืมเปลี่ยนชื่อไฟล์ให้ตรง

function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: developerAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 text-center py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* ส่วนข้อความ */}
        <div className="md:w-1/2 md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            จาก IT Support สู่ Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            เปลี่ยนความเชี่ยวชาญด้าน IT ให้กลายเป็นโซลูชันการเขียนโค้ดที่สมบูรณ์แบบ
          </p>
          <a 
            href="#projects" 
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            ดูโปรเจกต์ของฉัน
          </a>
        </div>
        
        {/* ส่วน Animation */}
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      </div>
    </section>
  );
}

export default Hero;