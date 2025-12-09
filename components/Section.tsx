import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};