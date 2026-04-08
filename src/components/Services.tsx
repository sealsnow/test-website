import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: '鸡胚照检机',
      description: '用于检测鸡胚的发育状况，确保疫苗生产的质量和效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20embryo%20inspection%20machine%2C%20medical%20equipment%2C%20automated%20system&image_size=square',
      details: '鸡胚照检机是一种专用于疫苗生产过程中鸡胚发育状况检测的自动化设备。采用先进的机器视觉技术，能够快速、准确地检测鸡胚的活力和发育情况，大大提高了疫苗生产的效率和质量。设备具有自动上料、检测、分拣等功能，可实现全自动化操作，减少人工干预，降低人为误差。'
    },
    {
      id: 2,
      title: '蛋胚上下料设备',
      description: '自动化蛋胚上下料系统，减少人工操作，提高生产效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20embryo%20loading%20and%20unloading%20equipment%2C%20automated%20system&image_size=square',
      details: '蛋胚上下料设备是一种专用于疫苗生产过程中蛋胚自动上下料的自动化系统。能够实现蛋胚的自动抓取、搬运和放置，减少人工操作，提高生产效率。设备采用先进的机械臂技术，可实现精准定位和操作，确保蛋胚的完整性和安全性。'
    },
    {
      id: 3,
      title: '原料血浆分拣设备',
      description: '用于血浆原料的自动分拣和处理，提高血液制品生产的效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blood%20plasma%20sorting%20equipment%2C%20medical%20device%2C%20clean%20environment&image_size=square',
      details: '原料血浆分拣设备是一种专用于血液制品生产过程中血浆原料分拣的自动化设备。能够根据血浆的各项指标进行快速、准确的分拣，提高血液制品生产的效率和质量。设备采用先进的检测技术，可实现血浆的自动识别、分拣和处理，减少人工操作，降低交叉污染的风险。'
    },
    {
      id: 4,
      title: '灯检机',
      description: '用于药品和生物制品的视觉检测，确保产品质量。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=visual%20inspection%20machine%20for%20pharmaceuticals%2C%20medical%20equipment&image_size=square',
      details: '灯检机是一种专用于药品和生物制品视觉检测的自动化设备。能够快速、准确地检测产品中的异物、沉淀物等质量问题，确保产品质量。设备采用先进的机器视觉技术，可实现高速检测，提高生产效率，减少人工检测的误差。'
    },
    {
      id: 5,
      title: '配液配制系统',
      description: '用于制剂配制和复杂制剂配制的自动化系统，提高配液效率和准确性。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liquid%20preparation%20system%2C%20pharmaceutical%20equipment%2C%20automated%20system&image_size=square',
      details: '配液配制系统是一种用于制药和生物制品生产过程中的自动化设备，能够精确控制配液过程中的各项参数，确保配液的准确性和一致性。该系统包括制剂配制、复杂制剂配制及辅助系统，广泛应用于制药、生物制品等行业。系统采用先进的控制技术，可实现配液过程的自动化和智能化，提高生产效率和产品质量。'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">核心产品</h2>
          <p className="text-dark-600 max-w-2xl mx-auto">
            专注于医疗行业的智能装备，为客户提供高效、可靠的解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-dark-800">{product.title}</h3>
                <p className="text-dark-600 mb-4">{product.description}</p>
                <div className="text-primary-600 font-medium hover:underline flex items-center">
                  了解更多
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Product Detail Modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedProduct(null)}></div>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10"
            >
              <button 
                className="absolute top-4 right-4 text-dark-400 hover:text-dark-600"
                onClick={() => setSelectedProduct(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {products.find(p => p.id === selectedProduct) && (
                <div className="p-6">
                  <div className="mb-6">
                    <img 
                      src={products.find(p => p.id === selectedProduct)?.image} 
                      alt={products.find(p => p.id === selectedProduct)?.title} 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-dark-800">
                    {products.find(p => p.id === selectedProduct)?.title}
                  </h3>
                  <p className="text-dark-600 mb-4">
                    {products.find(p => p.id === selectedProduct)?.description}
                  </p>
                  <p className="text-dark-600">
                    {products.find(p => p.id === selectedProduct)?.details}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;