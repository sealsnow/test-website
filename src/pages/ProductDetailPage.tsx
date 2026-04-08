import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  // 产品数据
  const products = [
    {
      id: 'chicken-embryo',
      title: '鸡胚照检机',
      description: '用于检测鸡胚的发育状况，确保疫苗生产的质量和效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20embryo%20inspection%20machine%2C%20medical%20equipment%2C%20automated%20system&image_size=square',
      details: '鸡胚照检机是一种专用于疫苗生产过程中鸡胚发育状况检测的自动化设备。采用先进的机器视觉技术，能够快速、准确地检测鸡胚的活力和发育情况，大大提高了疫苗生产的效率和质量。设备具有自动上料、检测、分拣等功能，可实现全自动化操作，减少人工干预，降低人为误差。',
      features: [
        '采用先进的机器视觉技术',
        '自动检测鸡胚发育状况',
        '高速分拣，提高生产效率',
        '全自动化操作，减少人工干预',
        '精准识别，降低人为误差'
      ],
      applications: [
        '疫苗生产',
        '生物制品制造',
        '医药研发'
      ]
    },
    {
      id: 'egg-loading',
      title: '蛋胚上下料设备',
      description: '自动化蛋胚上下料系统，减少人工操作，提高生产效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20embryo%20loading%20and%20unloading%20equipment%2C%20automated%20system&image_size=square',
      details: '蛋胚上下料设备是一种专用于疫苗生产过程中蛋胚自动上下料的自动化系统。能够实现蛋胚的自动抓取、搬运和放置，减少人工操作，提高生产效率。设备采用先进的机械臂技术，可实现精准定位和操作，确保蛋胚的完整性和安全性。',
      features: [
        '自动化上下料操作',
        '采用先进的机械臂技术',
        '精准定位，确保操作准确性',
        '减少人工干预，提高生产效率',
        '确保蛋胚完整性和安全性'
      ],
      applications: [
        '疫苗生产',
        '生物制品制造',
        '医药研发'
      ]
    },
    {
      id: 'plasma-sorting',
      title: '原料血浆分拣设备',
      description: '用于血浆原料的自动分拣和处理，提高血液制品生产的效率。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blood%20plasma%20sorting%20equipment%2C%20medical%20device%2C%20clean%20environment&image_size=square',
      details: '原料血浆分拣设备是一种专用于血液制品生产过程中血浆原料分拣的自动化设备。能够根据血浆的各项指标进行快速、准确的分拣，提高血液制品生产的效率和质量。设备采用先进的检测技术，可实现血浆的自动识别、分拣和处理，减少人工操作，降低交叉污染的风险。',
      features: [
        '自动分拣血浆原料',
        '先进的检测技术',
        '快速准确的分拣能力',
        '减少人工操作，降低交叉污染',
        '提高血液制品生产效率'
      ],
      applications: [
        '血液制品生产',
        '医药研发',
        '生物制品制造'
      ]
    },
    {
      id: 'light-inspection',
      title: '灯检机',
      description: '用于药品和生物制品的视觉检测，确保产品质量。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=visual%20inspection%20machine%20for%20pharmaceuticals%2C%20medical%20equipment&image_size=square',
      details: '灯检机是一种专用于药品和生物制品视觉检测的自动化设备。能够快速、准确地检测产品中的异物、沉淀物等质量问题，确保产品质量。设备采用先进的机器视觉技术，可实现高速检测，提高生产效率，减少人工检测的误差。',
      features: [
        '先进的机器视觉技术',
        '高速检测能力',
        '准确识别异物和沉淀物',
        '减少人工检测误差',
        '提高生产效率'
      ],
      applications: [
        '药品生产',
        '生物制品制造',
        '医药研发'
      ]
    },
    {
      id: 'liquid-preparation',
      title: '配液配制系统',
      description: '用于制剂配制和复杂制剂配制的自动化系统，提高配液效率和准确性。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liquid%20preparation%20system%2C%20pharmaceutical%20equipment%2C%20automated%20system&image_size=square',
      details: '配液配制系统是一种用于制药和生物制品生产过程中的自动化设备，能够精确控制配液过程中的各项参数，确保配液的准确性和一致性。该系统包括制剂配制、复杂制剂配制及辅助系统，广泛应用于制药、生物制品等行业。系统采用先进的控制技术，可实现配液过程的自动化和智能化，提高生产效率和产品质量。',
      features: [
        '精确控制配液参数',
        '自动化配液过程',
        '适用于各种制剂配制',
        '提高配液准确性和一致性',
        '智能化控制系统'
      ],
      applications: [
        '制药生产',
        '生物制品制造',
        '医药研发'
      ]
    }
  ];

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>产品不存在</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-800/80 to-dark-900/80"></div>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">{product.title}</h1>
            <p className="text-white/80 text-xl max-w-3xl mx-auto">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-dark-800">产品详情</h2>
              <p className="text-dark-600 mb-8">
                {product.details}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-dark-800">产品特点</h3>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-dark-800">应用领域</h3>
                <ul className="space-y-3">
                  {product.applications.map((application: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-800">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter(p => p.id !== id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-dark-800">{relatedProduct.title}</h3>
                    <p className="text-dark-600 mb-4">{relatedProduct.description}</p>
                    <a 
                      href={`/product/${relatedProduct.id}`} 
                      className="text-primary-600 font-medium hover:underline flex items-center"
                    >
                      查看详情
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;