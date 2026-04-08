import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: '首页', href: '/' },
    {
      name: '产品中心',
      href: '/services',
      dropdown: [
        {
          name: '生物制品解决方案',
          items: [
            { name: '鸡胚照检机', href: '/services#chicken-embryo' },
            { name: '蛋胚上下料设备', href: '/services#egg-loading' },
            { name: '原料血浆分拣设备', href: '/services#plasma-sorting' }
          ]
        },
        {
          name: '制药解决方案',
          items: [
            { name: '灯检机', href: '/services#light-inspection' },
            { name: '配液配制系统', href: '/services#liquid-preparation' }
          ]
        }
      ]
    },
    { name: '关于我们', href: '/about' },
    { name: '新闻中心', href: '/news' },
    { name: '联系我们', href: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=company%20logo%20with%20orange%20and%20yellow%20flame%20design%2C%20modern%20professional%20logo%20for%20HONOUR%20VISION%20宏盛景&image_size=square"
                alt="宏盛景智能装备"
                className="h-12 w-auto mr-3"
              />
              <div>
                <div className="text-lg font-bold text-dark-800">江苏宏盛景智能装备有限公司</div>
                <div className="text-xs text-dark-600">HONOUR VISION</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div className="relative group">
                    <Link
                      to={link.href}
                      className="flex items-center text-dark-700 hover:text-primary-600 font-medium transition-colors"
                    >
                      {link.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="p-4 border-b border-gray-100 bg-gray-50">
                        <h4 className="font-bold text-dark-800">{link.name}</h4>
                      </div>
                      {link.dropdown.map((category, catIndex) => (
                        <div key={catIndex} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <h5 className="font-bold text-dark-700 mb-2 text-sm">{category.name}</h5>
                          <div className="grid grid-cols-1 gap-2">
                            {category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={`/product/${item.href.split('#')[1]}`}
                                className="block text-dark-600 hover:text-primary-600 text-sm transition-colors py-1"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-dark-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex justify-between items-center w-full text-left text-dark-700 hover:text-primary-600 font-medium transition-colors"
                      >
                        {link.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === link.name && (
                        <div className="mt-2 pl-4 border-l-2 border-gray-200 space-y-2">
                          {link.dropdown.map((category, catIndex) => (
                            <div key={catIndex}>
                              <h4 className="font-bold text-dark-800 text-sm mb-1">{category.name}</h4>
                              <div className="space-y-1">
                                {category.items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    to={item.href}
                                    className="block text-dark-600 hover:text-primary-600 text-sm transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-dark-700 hover:text-primary-600 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;