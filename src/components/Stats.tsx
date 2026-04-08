import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  const stats = [
    { value: '1000+', label: '交付整线' },
    { value: '500+', label: '发明专利' },
    { value: '100+', label: '国家标准' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
                {stat.value}
              </div>
              <div className="text-dark-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;