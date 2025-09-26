import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeveloperCooperationDialog from '@/components/DeveloperCooperationDialog';

const DeveloperProjects = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const developers = [
    {
      developerName: t('developerProjects.emaar'),
      description: t('developerProjects.emaarDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-em5m8w27somkqjyilhfgg1qkzykqog.png",
      projects: 56,
      partnership: "2016年至今"
    },
    {
      developerName: t('developerProjects.meraas'),
      description: t('developerProjects.meraasDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-xt0i0ds25m3tdj98549r5nsu54hxmr.png",
      projects: 28,
      partnership: "2019年至今"
    },
    {
      developerName: t('developerProjects.damac'),
      description: t('developerProjects.damacDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-b0u3xu94i0icykmilp0ia5fsw99872.png",
      projects: 35,
      partnership: "2017年至今"
    },
    {
      developerName: t('developerProjects.aldar'),
      description: t('developerProjects.aldarDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nfew6ly045uazfwf4kluubuuj98ypx.png",
      projects: 42,
      partnership: "2018年至今"
    },
    {
      developerName: t('developerProjects.sobha'),
      description: t('developerProjects.sobhaDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/sobha-liytn1ue4ft4vo9mpoyd7qe8qyfcvq.png",
      projects: 18,
      partnership: "2020年至今"
    },
    {
      developerName: t('developerProjects.azizi'),
      description: t('developerProjects.aziziDesc'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-t9su9gb4c4qx34x90oaqa6hky9zlv3.png",
      projects: 31,
      partnership: "2018年至今"
    }
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2">{t('developerProjects.title')}</h2>
        <p className="text-gray-600">{t('developerProjects.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {developers.map((developer, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group h-full w-full transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={developer.image} 
                  alt={developer.developerName} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-black">{developer.developerName}</h3>
                <p className="text-gray-600 text-sm mb-4">{developer.description}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-gray-500">{t('developerProjects.projectCount')}</p>
                      <p className="font-medium">{developer.projects}+</p>
                    </div>
                    <div>
                      <p className="text-gray-500">{t('developerProjects.partnershipYears')}</p>
                      <p className="font-medium">{developer.partnership}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden group h-full w-full transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col h-full">
            <div className="relative h-48 overflow-hidden bg-amber-50 flex items-center justify-center">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-11lgcmok28av04grkew4ga2os9wn25.png" 
                alt="开发商合作" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-black">{t('developerProjects.becomePartner')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('developerProjects.becomePartnerDesc')}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                  {t('developerProjects.applyNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeveloperCooperationDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </div>
  );
};

export default DeveloperProjects;
