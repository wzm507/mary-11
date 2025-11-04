import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from './ScrollAnimation';

const AboutMe = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const goToMyStory = () => {
    navigate('/my-story');
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <ScrollAnimation type="fade-in" duration={800} offset={50}>
        <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-wider mb-2 text-left">{t('aboutMe')}</h2>
            <p className="text-gray-600 text-left">About Me</p>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl text-left">
            {t('aboutMe.paragraph1')}
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
      </ScrollAnimation>
    </div>
  );
};

export default AboutMe;
