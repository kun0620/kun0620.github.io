import React from 'react';
import ContactForm from './ContactForm'; // นำเข้า Component ContactForm

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          ติดต่อฉัน
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          ถ้าคุณมีคำถามหรือต้องการพูดคุยเกี่ยวกับโปรเจกต์ใหม่ๆ ติดต่อผมได้เลยครับ!
        </p>
        
        {/* แทนที่ลิงก์ด้วยแบบฟอร์ม */}
        <ContactForm />

      </div>
    </section>
  );
}

export default Contact;