import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Briefcase, HeartHandshake } from 'lucide-react';

const MyStory = () => {
  const { t } = useTranslation();
  
  const storySections = [
    {
      title: t('myStory.duabiStartTitle'),
      content: t('myStory.duabiStartContent'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nen3y598x2iodpf1x1agwahqwtcjhw.png",
      alignment: 'left'
    },
    {
      title: t('myStory.investmentReturnTitle'),
      content: t('myStory.investmentReturnContent'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-mfusk215o2tqwusjw2v873gkr8g6kc.png",
      alignment: 'right'
    },
    {
      title: t('myStory.fashionBrandTitle'),
      content: t('myStory.fashionBrandContent'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-75faqfza5yg839761ksw7rmcd8in8u.png",
      alignment: 'left'
    },
    {
      title: t('myStory.advertisingTitle'),
      content: t('myStory.advertisingContent'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-jqr3z8ql6sbljo9e37yduoi8g8xs2s.png",
      alignment: 'right'
    },
    {
      title: t('myStory.restaurantTitle'),
      content: t('myStory.restaurantContent'),
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-1vxac4qg82vcl57kx6ojobf1m5z2fq.png",
      alignment: 'left'
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-wider mb-6">{t('myStory.storyTitle')}</h1>
        <div className="w-24 h-0.5 bg-amber-500"></div>
      </div>
      
      {storySections.map((section, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row gap-12 items-center mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {section.content}
            </p>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-w-16 aspect-h-9">
              <img 
                src={section.image} 
                alt={section.title} 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-8 text-center">{t('myStory.careerJourney')}</h3>
        
        <div className="relative">
          <div className="absolute left-5 h-full w-0.5 bg-gray-200"></div>
          
          {[
            {
              year: t('myStory.duabiStartYear'),
              title: t('myStory.duabiStartTitle'),
              description: t('myStory.duabiStartContent'),
              icon: <Briefcase className="h-5 w-5 text-amber-500" />
            },
            {
              year: t('myStory.investmentReturnYear'),
              title: t('myStory.investmentReturnTitle'),
              description: t('myStory.investmentReturnContent'),
              icon: <Award className="h-5 w-5 text-amber-500" />
            },
            {
              year: t('myStory.fashionBrandYear'),
              title: t('myStory.fashionBrandTitle'),
              description: t('myStory.fashionBrandContent'),
              icon: <BookOpen className="h-5 w-5 text-amber-500" />
            },
            {
              year: t('myStory.advertisingYear'),
              title: t('myStory.advertisingTitle'),
              description: t('myStory.advertisingContent'),
              icon: <Briefcase className="h-5 w-5 text-amber-500" />
            },
            {
              year: t('myStory.restaurantYear'),
              title: t('myStory.restaurantTitle'),
              description: t('myStory.restaurantContent'),
              icon: <HeartHandshake className="h-5 w-5 text-amber-500" />
            }
          ].map((item, index) => (
            <div key={index} className="relative pl-16 pb-8">
              <div className="absolute left-5 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-amber-500">
                {item.icon}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <span className="text-amber-500 font-medium">{item.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStory;
