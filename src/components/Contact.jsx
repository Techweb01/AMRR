import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
      <p className="mb-4">FOR ANY QUERIES OR ENQUIRIES, PLEASE CALL OR EMAIL US:</p>
      <p className="mb-4">Email: <a href="mailto:amrrexim@gmail.com" className="text-blue-500">amrrexim@gmail.com</a></p>
      <p className="mb-4">Mobile No. and WhatsApp: <a href="tel:+971527151376" className="text-blue-500">+971 52 715 1376</a></p>
      <footer className="mt-8 text-center text-gray-500 text-sm">
        &copy; AMRR 2024
      </footer>
    </div>
  );
};

export default Contact;
