import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">เกี่ยวกับฉัน</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          สวัสดีครับ! ผมเป็นอดีต IT Support ที่มีความหลงใหลในการแก้ปัญหาและการเรียนรู้สิ่งใหม่ๆ ผมได้ใช้ทักษะด้านการวิเคราะห์และแก้ไขปัญหาที่สั่งสมมาจากการทำงานในสาย IT มาปรับใช้กับการเขียนโค้ด
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          ผมได้เรียนรู้การเขียนโปรแกรมด้วยตัวเองและสร้างโปรเจกต์ต่างๆ เพื่อพัฒนาทักษะ Full Stack ของผม ผมเชื่อว่าประสบการณ์ด้าน IT Support ของผมทำให้ผมมีความเข้าใจในภาพรวมของระบบและสามารถสร้างแอปพลิเคชันที่มีประสิทธิภาพและเสถียรได้
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          ผมพร้อมที่จะก้าวเข้าสู่โลกของการพัฒนาซอฟต์แวร์และมุ่งมั่นที่จะเติบโตในฐานะ Full Stack Developer
        </p>
      </div>
    </section>
  );
}

export default AboutMe;