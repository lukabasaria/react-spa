// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <h1>About Page</h1>
      <p>This is the About Page.</p>
    </motion.div>
  );
};

export default About;