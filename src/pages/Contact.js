// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact"
    >
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
    </motion.div>
  );
};

export default Contact;