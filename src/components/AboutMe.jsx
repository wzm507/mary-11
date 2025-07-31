import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const goToMyStory = () => {
    navigate('/my-story');
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-wider mb-2 text-left">{t('aboutMe')}</h2>
            <p className="text-gray-600 text-left">About Me</p>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl text-left">
            李语宸（Mary Lee）—— 扎根迪拜沙漠的商业猎手。23 岁时，她以 2500 迪拉姆月薪叩开命运之门，七年淬炼出跨越阶层的商业版图。初入职场，磨破鞋跟穿梭棕榈岛别墅区，在保安驱赶与深夜苦学阿拉伯语中，将闭门羹熬成市场洞察；2018 至 2022 年，为客户创下 30% 到 200% 的回报奇迹。资金链断裂的雨夜枯坐、沙漠仓库与团队啃冷食拼图纸的破晓，藏着她的坚韧。从房产投资到跨国营销，她如贝都因人识沙流般捕捉商机，让政府开发商巡展成为资本磁场。如今立于迪拜塔顶层，地下室笔记本里的青涩规划已化为横跨三领域的商业帝国。这位从中东职场新人到财富自由传奇的华人，用逆袭印证：真正的商业版图，永远生长在永不低头的泥泞之上。
          </p>
          <button 
            onClick={goToMyStory}
            className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium flex items-center transition"
          >
            {t('learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-wdwgmkhu7nj14710tz4jqfnhvumvdo.png" 
              alt="Mary Lee" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
