import React from 'react';
import { motion } from 'framer-motion';

const NewsPage: React.FC = () => {
  const news = [
    {
      id: 1,
      date: '2026-04-08',
      title: '江苏宏盛景智能装备有限公司成功研发新一代鸡胚照检机',
      description: '近日，江苏宏盛景智能装备有限公司成功研发新一代鸡胚照检机，采用先进的机器视觉技术，大大提高了检测精度和效率。该设备已经通过临床试验，即将推向市场。',
      category: '公司新闻',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20embryo%20inspection%20machine%2C%20medical%20equipment%2C%20high-tech&image_size=landscape_16_9'
    },
    {
      id: 2,
      date: '2026-03-16',
      title: '公司参加2026年中国国际医疗器械博览会',
      description: '江苏宏盛景智能装备有限公司参加了在上海举办的2026年中国国际医疗器械博览会，展示了公司最新的医疗设备和解决方案，受到了行业专家和客户的高度关注。',
      category: '行业动态',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20equipment%20exhibition%2C%20trade%20show%2C%20professional%20event&image_size=landscape_16_9'
    },
    {
      id: 3,
      date: '2026-02-20',
      title: '公司获得高新技术企业认证',
      description: '江苏宏盛景智能装备有限公司凭借在医疗设备领域的技术创新和研发能力，成功获得高新技术企业认证，这是对公司技术实力的充分肯定。',
      category: '公司新闻',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20tech%20company%20certification%2C%20award%20ceremony&image_size=landscape_16_9'
    },
    {
      id: 4,
      date: '2026-01-15',
      title: '公司与多家医疗机构达成合作协议',
      description: '江苏宏盛景智能装备有限公司与多家医疗机构达成合作协议，为其提供定制化的医疗设备解决方案，助力医疗机构提高自动化水平和工作效率。',
      category: '合作新闻',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=business%20partnership%20agreement%2C%20medical%20institution%2C%20signing%20ceremony&image_size=landscape_16_9'
    },
    {
      id: 5,
      date: '2025-12-10',
      title: '公司研发中心正式投入使用',
      description: '江苏宏盛景智能装备有限公司新的研发中心正式投入使用，配备了先进的研发设备和测试仪器，为公司的技术创新提供了强有力的支持。',
      category: '公司新闻',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20research%20and%20development%20center%2C%20high-tech%20facility&image_size=landscape_16_9'
    },
    {
      id: 6,
      date: '2025-11-05',
      title: '公司产品通过CE认证',
      description: '江苏宏盛景智能装备有限公司的鸡胚照检机和灯检机等产品成功通过CE认证，标志着公司产品具备了进入欧盟市场的资格。',
      category: '认证新闻',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CE%20certification%20for%20medical%20equipment%2C%20quality%20assurance&image_size=landscape_16_9'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=news%20room%2C%20modern%20office%2C%20professional%20environment&image_size=landscape_16_9" 
            alt="新闻中心" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">新闻中心</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              了解江苏宏盛景智能装备有限公司的最新动态和行业资讯
            </p>
          </motion.div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-dark-400">{item.date}</span>
                    <span className="text-xs px-3 py-1 bg-primary-100 text-primary-600 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dark-800">{item.title}</h3>
                  <p className="text-dark-600 mb-4 line-clamp-3">{item.description}</p>
                  <a href={`/news/${item.id}`} className="text-primary-600 font-medium hover:underline flex items-center">
                    阅读更多
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <a href="#" className="px-4 py-2 rounded-md border border-gray-300 text-dark-600 hover:bg-gray-50">上一页</a>
              <a href="#" className="px-4 py-2 rounded-md bg-primary-600 text-white">1</a>
              <a href="#" className="px-4 py-2 rounded-md border border-gray-300 text-dark-600 hover:bg-gray-50">2</a>
              <a href="#" className="px-4 py-2 rounded-md border border-gray-300 text-dark-600 hover:bg-gray-50">3</a>
              <a href="#" className="px-4 py-2 rounded-md border border-gray-300 text-dark-600 hover:bg-gray-50">下一页</a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;