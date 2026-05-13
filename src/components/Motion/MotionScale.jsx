"use client";

import { motion } from "framer-motion";

const MotionScale = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionScale;