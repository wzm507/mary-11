import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PropertyDevelopers = () => {
  const { t } = useTranslation();
  const developers = [
    {
      developerName: t('developerProjects.emaar'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-em5m8w27somkqjyilhfgg1qkzykqog.png"
    },
    {
      developerName: t('developerProjects.meraas'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/1752221625121-nic16g94zoic38skbcc69pwts6o9vk.jpg"
    },
    {
      developerName: t('developerProjects.damac'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-b0u3xu94i0icykmilp0ia5fsw99872.png"
    },
    {
      developerName: t('developerProjects.aldar'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nfew6ly045uazfwf4kluubuuj98ypx.png"
    },
    {
      developerName: t('developerProjects.sobha'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/sobha-liytn1ue4ft4vo9mpoyd7qe8qyfcvq.png"
    },
    {
      developerName: t('developerProjects.azizi'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-egi57oby94qiwhhvzbuah2e25k6504.png"
    }
  ];

  const navigate = useNavigate();

  const goToDeveloperProjects = () => {
    navigate('/developer-projects');
  };

  return (
    <div className="py-20 bg-gray-50 px-4" id="property-developers">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t('propertyDevelopers')}</h2>
            <p className="text-gray-600">{t('developerProjects.propertyDevelopersSubtitle')}</p>
          </div>
          <div 
            className="flex items-center text-gray-500 cursor-pointer hover:text-amber-600 transition"
            onClick={goToDeveloperProjects}
          >
            <span>{t('companyProfile')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {developers.map((property, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg group w-full mx-auto aspect-square cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => {
                // 这里可以添加点击事件，例如导航到特定开发者页面
                goToDeveloperProjects();
              }}
            >
              <img 
                src={property.image} 
                alt={property.developerName} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* 添加一个半透明的叠加层，增强悬停效果 */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* 增强文字区域的视觉效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-lg mb-1">{property.developerName}</p>
                  {/* 添加一个小箭头，暗示可点击 */}
                  <div className="flex items-center text-amber-400">
                      <span className="text-sm">{t('developerProjects.viewProjects')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                </div>
              </div>
              {/* 添加边框高亮效果 */}
              <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDevelopers;
