import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">江苏宏盛景智能装备有限公司</h3>
            <p className="text-white/60 mb-4">
              专注于医疗行业智能装备的研发和制造
            </p>
            <p className="text-white/60 text-sm">
              江苏省昆山市金茂路889号
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">快速链接</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">服务</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">新闻中心</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">联系方式</h4>
            <ul className="space-y-2 text-white/60">
              <li>业务咨询：0512-12345678</li>
              <li>邮箱：info@hongshengjing.com</li>
              <li>总机：0512-87654321</li>
              <li>招聘：13800138000</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">订阅资讯</h4>
            <p className="text-white/60 mb-4 text-sm">
              订阅我们的资讯，了解最新动态
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="您的邮箱"
                className="px-4 py-2 rounded-l-md w-full text-dark-800 focus:outline-none"
              />
              <button className="bg-primary-600 px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors">
                订阅
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© 2026 江苏宏盛景智能装备有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;