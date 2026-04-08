import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
        <img 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20factory%20with%20automated%20packaging%20equipment%2C%20high-tech%2C%20professional%2C%20clean%20environment&image_size=landscape_16_9" 
          alt="智能工厂" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            宏盛景智能装备
          </h1>
          <p className="text-white/80 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            医疗行业智能装备专家 - 以智慧与行动，重新定义制造标准
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="btn btn-primary">
              探索服务
            </a>
            <a href="#about" className="btn btn-outline text-white border-white hover:bg-white/10">
              了解更多
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;