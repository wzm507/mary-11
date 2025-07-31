import React from 'react';

const CareerDetail1 = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-wider mb-6">迪拜七年政府开发商中国市场顾问</h1>
        <div className="w-24 h-0.5 bg-amber-500"></div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl">
            作为迪拜政府开发商的中国市场顾问，Mary Lee在过去七年中成功帮助多个大型开发商项目进入中国市场。
            她深入了解中阿文化差异，为开发商提供市场定位、营销策略和客户服务等方面的专业建议。
          </p>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://nocode.meituan.com/photo/search?keyword=dubai,government,building&width=800&height=600" 
              alt="迪拜政府开发商" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail1;
