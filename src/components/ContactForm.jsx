import React from 'react';

function ContactForm() {
  const formUrl = "https://formspree.io/f/mzzvnegb"; // แก้ไข URL นี้ด้วย URL จาก Formspree ของคุณ

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        ส่งข้อความถึงฉัน
      </h3>
      <form action={formUrl} method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">
            ชื่อ
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
            ข้อความ
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          ส่งข้อความ
        </button>
      </form>
    </div>
  );
}

export default ContactForm;