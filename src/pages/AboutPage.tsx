import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20corporate%20office%2C%20professional%20environment%2C%20team%20collaboration&image_size=landscape_16_9" 
            alt="关于我们" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">关于我们</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              江苏宏盛景智能装备有限公司，专注于医疗行业智能装备的研发和制造
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">公司简介</h2>
              <p className="text-dark-600 mb-4">
                江苏宏盛景智能装备有限公司是一家专注于医疗行业智能装备研发、制造和销售的高科技企业。公司成立于2010年，总部位于江苏省丹阳市，拥有现代化的生产基地和研发中心。
              </p>
              <p className="text-dark-600 mb-4">
                我们致力于为医疗行业提供高效、可靠的自动化解决方案，产品涵盖鸡胚照检机、原料血浆分拣设备、蛋胚上下料设备、灯检机等多个系列，广泛应用于疫苗生产、血液制品、制药等领域。
              </p>
              <p className="text-dark-600">
                公司拥有一支专业的研发团队，不断推出创新产品，为客户提供定制化的解决方案，助力医疗行业的智能化升级。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20factory%20building%2C%20high-tech%20manufacturing%20facility&image_size=landscape_16_9" 
                alt="公司工厂" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">企业文化</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              我们的企业文化是公司发展的核心动力
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '使命',
                description: '为医疗行业提供智能装备解决方案，助力行业发展，守护人类健康',
                icon: 'fa-heartbeat'
              },
              {
                title: '愿景',
                description: '成为医疗行业智能装备的领导者，引领行业技术创新',
                icon: 'fa-eye'
              },
              {
                title: '价值观',
                description: '创新、诚信、专业、共赢',
                icon: 'fa-handshake'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-600 text-4xl mb-4">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-800">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">发展历程</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              江苏宏盛景智能装备有限公司的成长历程
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                year: '2019',
                title: '公司成立',
                description: '江苏宏盛景智能装备有限公司在江苏省昆山市正式成立，专注于智能装备、机电设备、机械设备等的研发、生产和销售。',
                position: 'left'
              },
              {
                year: '2020',
                title: '业务拓展',
                description: '公司开始拓展医疗行业智能装备市场，专注于鸡胚照检机等医疗设备的研发。',
                position: 'right'
              },
              {
                year: '2021',
                title: '研发中心成立',
                description: '公司成立研发中心，加强自主研发能力，为医疗设备自动化解决方案的开发奠定基础。',
                position: 'left'
              },
              {
                year: '2022',
                title: '产品线扩展',
                description: '公司产品线扩展至原料血浆分拣设备、蛋胚上下料设备、灯检机等多个系列，满足医疗行业的多样化需求。',
                position: 'right'
              },
              {
                year: '2024',
                title: '技术创新',
                description: '公司在医疗行业智能装备领域取得多项技术突破，提高了产品的自动化和智能化水平。',
                position: 'left'
              },
              {
                year: '2025',
                title: '市场拓展',
                description: '公司产品在医疗行业市场占有率不断提高，成为行业内具有影响力的智能装备供应商。',
                position: 'right'
              }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    item.position === 'left' ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${item.position === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold mb-2 text-dark-800">{item.title}</h3>
                      <p className="text-dark-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  
                  {/* Empty Space */}
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">部分客户</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              我们为众多医疗行业客户提供优质的智能装备解决方案
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20company%20logo%2C%20professional%2C%20minimalist&image_size=square',
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pharmaceutical%20company%20logo%2C%20professional%2C%20minimalist&image_size=square',
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=biotech%20company%20logo%2C%20professional%2C%20minimalist&image_size=square',
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20equipment%20company%20logo%2C%20professional%2C%20minimalist&image_size=square',
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pharmaceutical%20manufacturer%20logo%2C%20professional%2C%20minimalist&image_size=square',
              'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=biopharmaceutical%20company%20logo%2C%20professional%2C%20minimalist&image_size=square'
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={logo} 
                  alt={`客户 ${index + 1}`} 
                  className="max-h-20 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">资质认证</h2>
            <p className="text-dark-600 max-w-2xl mx-auto">
              我们拥有多项资质认证，确保产品质量和服务标准
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'ISO9001质量管理体系认证',
              '医疗器械生产许可证',
              'CE认证',
              '高新技术企业认证'
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-600 text-4xl mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <p className="text-dark-600 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;