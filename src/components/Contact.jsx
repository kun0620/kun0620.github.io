import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">ติดต่อฉัน</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          ถ้าคุณมีคำถามหรือต้องการพูดคุยเกี่ยวกับโปรเจกต์ใหม่ๆ ติดต่อผมได้เลยครับ!
        </p>
        <div className="space-y-4">
  <a
    href="mailto:your.email@example.com"
    className="block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
  >
    ส่งอีเมลถึงฉัน
  </a>
  <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300 dark:bg-gray-600 dark:hover:bg-gray-500"
  >
    LinkedIn
  </a>
  <a
    href="https://github.com/your-github-username"
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    GitHub
  </a>
</div>
      </div>
    </section>
  );
}

export default Contact;