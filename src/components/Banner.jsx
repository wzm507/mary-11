import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const Banner = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setIsOpen(false);
    localStorage.setItem('i18nextLng', lang); // 保存语言选择到本地存储
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="flex justify-center items-center w-full h-[600px] relative overflow-hidden">
      {/* 更新为指定的背景图片 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-fwti0l0l0aobijlqmsdwxf9jmpukow.png')"
        }}
      >
        {/* 移除黑色半透明覆盖层 */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-10">
        {/* 文本颜色改为黑色 */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center text-black">{t('title')}</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-center text-black">
          {t('subtitle')}
        </p>
      </div>
      
      <div className="absolute bottom-8 right-8 z-10">
        <div className="relative">
          {/* 语言选择器颜色调整 */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 rounded-full bg-gray-100 backdrop-blur-sm hover:bg-gray-200 transition text-gray-800"
            aria-label="Language selector"
            aria-expanded={isOpen}
          >
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-gray-700" />
              <span className="text-gray-800">{currentLanguage.name}</span>
            </div>
            <ChevronDown className={`h-5 w-5 transition-transform text-gray-700 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-20 border border-gray-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 flex items-center ${
                    language === lang.code 
                      ? 'bg-amber-100 text-amber-600' 
                      : 'hover:bg-gray-50 text-gray-800'
                  } transition-colors`}
                  aria-label={`Switch to ${lang.name}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
