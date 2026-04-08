import React from 'react';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  const news = [
    {
      date: '2026-03-16',
      title: '中国非处方药物协会走访鱼跃医疗、仅一公司',
      description: '以此次调研为契机，深化协同联动，共同推动非处方药物与健康产业规范化、创新化、国际化发展，为健康中国建设贡献力量。',
      category: '新闻动态'
    },
    {
      date: '2026-01-20',
      title: '智能装备引领中药产业升级：精准高效，智造未来',
      description: '作为智能装备领域的创新企业，我们致力于为中药产业提供一体化、可溯源的智能解决方案，助力行业迈向高质量发展新阶段。',
      category: '新闻动态'
    },
    {
      date: '2025-12-31',
      title: '新光启程，一马当先',
      description: '2026年元旦，仅一全新官网正式启航！仅一将秉持“一马当先”的创新精神，不断探索前沿包装形式，立志继续成为行业价值引领者。',
      category: '新闻动态'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">新闻动态</h2>
          <p className="text-dark-600 max-w-2xl mx-auto">
            了解仅一公司的最新动态和行业资讯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-dark-400">{item.date}</span>
                  <span className="text-xs px-3 py-1 bg-primary-100 text-primary-600 rounded-full">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark-800">{item.title}</h3>
                <p className="text-dark-600 mb-4 line-clamp-3">{item.description}</p>
                <a href="#" className="text-primary-600 font-medium hover:underline flex items-center">
                  阅读更多
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline">
            查看全部新闻
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;