import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    // 重置表单
    setFormData({ name: '', email: '', phone: '', message: '' });
    // 显示成功消息
    alert('消息已发送，我们会尽快与您联系！');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contact%20office%2C%20modern%20reception%2C%20professional%20environment&image_size=landscape_16_9" 
            alt="联系我们" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">联系我们</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              如有任何疑问或需求，欢迎随时联系我们
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">联系方式</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">公司地址</h3>
                    <p className="text-dark-600">江苏省昆山市金茂路889号</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">联系电话</h3>
                    <p className="text-dark-600">业务咨询：0512-12345678</p>
                    <p className="text-dark-600">总机：0512-87654321</p>
                    <p className="text-dark-600">招聘：13800138000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">电子邮箱</h3>
                    <p className="text-dark-600">info@hongshengjing.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 text-2xl mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">工作时间</h3>
                    <p className="text-dark-600">周一至周五：8:30 - 17:30</p>
                    <p className="text-dark-600">周六、周日：休息</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <p className="text-dark-400">地图加载中...</p>
                  {/* 这里可以添加实际的地图组件 */}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-dark-700 font-medium mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-700 font-medium mb-2">电子邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-dark-700 font-medium mb-2">电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-dark-700 font-medium mb-2">消息</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full btn btn-primary"
                >
                  发送消息
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;