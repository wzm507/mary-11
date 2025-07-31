import React, { useState } from 'react';
import DeveloperCooperationDialog from '@/components/DeveloperCooperationDialog';

const DeveloperProjects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const developers = [
    {
      developerName: "伊玛尔地产",
      description: "伊玛尔地产是中东地区最大的房地产开发商，开发了包括哈利法塔在内的标志性项目。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-em5m8w27somkqjyilhfgg1qkzykqog.png",
      projects: 56,
      partnership: "2016年至今"
    },
    {
      developerName: "美拉斯地产",
      description: "美拉斯地产是迪拜最具创新力的开发商之一，以打造标志性项目闻名。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-xt0i0ds25m3tdj98549r5nsu54hxmr.png",
      projects: 28,
      partnership: "2019年至今"
    },
    {
      developerName: "达马克地产",
      description: "达马克地产专注于高端住宅开发，项目遍布迪拜黄金地段。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-b0u3xu94i0icykmilp0ia5fsw99872.png",
      projects: 35,
      partnership: "2017年至今"
    },
    {
      developerName: "Aldar地产",
      description: "Aldar地产是阿联酋领先的房地产开发商，专注于高品质住宅和商业项目开发。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nfew6ly045uazfwf4kluubuuj98ypx.png",
      projects: 42,
      partnership: "2018年至今"
    },
    {
      developerName: "SOBHA地产",
      description: "SOBHA地产以卓越的建筑质量和精细工艺闻名，专注于高端住宅开发。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/sobha-liytn1ue4ft4vo9mpoyd7qe8qyfcvq.png",
      projects: 18,
      partnership: "2020年至今"
    },
    {
      developerName: "AZIZI地产",
      description: "AZIZI地产是迪拜领先的房地产开发商，专注于高品质住宅和商业项目开发。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-t9su9gb4c4qx34x90oaqa6hky9zlv3.png",
      projects: 31,
      partnership: "2018年至今"
    }
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-2">官方合作开发商</h2>
        <p className="text-gray-600">Our Official Developer Partners</p>
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
                      <p className="text-gray-500">合作项目</p>
                      <p className="font-medium">{developer.projects}+</p>
                    </div>
                    <div>
                      <p className="text-gray-500">合作年限</p>
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
              <h3 className="text-xl font-bold mb-2 text-black">成为合作伙伴</h3>
              <p className="text-gray-600 text-sm mb-4">我们欢迎更多优质开发商加入我们的合作网络，共同开拓中东房地产市场。</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setIsDialogOpen(true)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                  申请合作
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
