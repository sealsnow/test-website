import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const products = [
    {
      title: '鸡胚照检机',
      description: '用于检测鸡胚的发育状况，确保疫苗生产的质量和效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20embryo%20inspection%20machine%2C%20medical%20equipment%2C%20automated%20system&image_size=square'
    },
    {
      title: '原料血浆分拣设备',
      description: '用于血浆原料的自动分拣和处理，提高血液制品生产的效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blood%20plasma%20sorting%20equipment%2C%20medical%20device%2C%20clean%20environment&image_size=square'
    },
    {
      title: '蛋胚上下料设备',
      description: '自动化蛋胚上下料系统，减少人工操作，提高生产效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20embryo%20loading%20and%20unloading%20equipment%2C%20automated%20system&image_size=square'
    },
    {
      title: '灯检机',
      description: '用于药品和生物制品的视觉检测，确保产品质量。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=visual%20inspection%20machine%20for%20pharmaceuticals%2C%20medical%20equipment&image_size=square'
    }
  ];

  const services = [
    {
      title: '医疗设备研发',
      description: '专注于医疗行业自动化设备的研发和创新，提供定制化解决方案。',
      icon: 'fa-flask'
    },
    {
      title: '生产自动化',
      description: '为医疗企业提供整线自动化解决方案，提高生产效率和产品质量。',
      icon: 'fa-cogs'
    },
    {
      title: '设备维护服务',
      description: '提供设备安装、调试、维护和培训等全方位服务。',
      icon: 'fa-wrench'
    },
    {
      title: '技术咨询',
      description: '为客户提供医疗行业自动化解决方案的技术咨询和规划。',
      icon: 'fa-lightbulb'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20equipment%20manufacturing%2C%20high-tech%20factory%2C%20clean%20environment&image_size=landscape_16_9" 
            alt="医疗设备制造" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">医疗行业解决方案</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              专注于医疗设备自动化，为行业提供高效、可靠的智能装备
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">我们的服务</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              为医疗行业提供全方位的自动化解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-600 text-4xl mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-800">{service.title}</h3>
                <p className="text-dark-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
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
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <p className="text-dark-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">服务流程</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              从需求分析到设备交付，我们提供全周期的专业服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '需求分析', description: '深入了解客户需求，制定个性化解决方案' },
              { step: '02', title: '方案设计', description: '根据需求设计详细的设备和系统方案' },
              { step: '03', title: '生产制造', description: '严格按照设计标准进行设备生产和组装' },
              { step: '04', title: '安装调试', description: '专业团队进行设备安装、调试和培训' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-dark-800">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;