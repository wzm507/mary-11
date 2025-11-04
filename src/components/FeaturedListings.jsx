import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from '@/components/ScrollAnimation';

const FeaturedListings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);
  const properties = [
    {
      id: 'dubai-hills',
      title: "Dubai Hills Estate",
      address: "",
      price: "$43,561,121.60",
      beds: 12,
      baths: 10,
      sqft: 40000,
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-5ts5ygh85tc27mj8rkxy5vr6uzsoke.png"
    },
    {
      id: 'jlt',
      title: "JumeirahLakeTowers",
      address: "",
      price: "$10,890,652",
      beds: 5,
      baths: 7,
      sqft: 11432.35,
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-uzec3xmj5so283yv44iy7b19vbtafs.png"
    },
    {
      id: 'bluewaters',
      title: "BluewatersIsland",
      address: "",
      price: "$1,497,617",
      beds: 1,
      baths: 1,
      sqft: 1118.59,
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-tylq8x5l4vp7s43tw8nxcmj30nixvb.png"
    },
    {
      id: 'citywalk',
      title: "CityWalk",
      address: "",
      price: "$217,813.28",
      beds: 1,
      baths: 1,
      sqft: 253.71,
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-1kzqmc1ig6wvcxydhf747d1oezpwbf.png"
    }
  ];

  const goToMaryProjects = () => {
    navigate('/mary-projects');
  };

  const handlePhoneButtonClick = () => {
    setIsPhoneDialogOpen(true);
  };

  const handleDetailsClick = () => {
    goToMaryProjects();
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-2">{t('featuredListings')}</h2>
          <p className="text-gray-600">Discover Our Featured Listings</p>
        </div>
        <div 
          className="flex items-center text-gray-500 cursor-pointer hover:text-amber-600 transition"
          onClick={goToMaryProjects}
        >
          <span>{t('myStory')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {properties.map((property, index) => (
          <ScrollAnimation 
            key={index} 
            type="fade-up" 
            duration={700} 
            delay={index * 150} 
            offset={80}
            className="relative aspect-video overflow-hidden rounded-xl shadow-lg group transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1"
          >
            <img 
              src={property.image} 
              alt={property.title} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 flex flex-col justify-center p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold mb-1 text-center">{property.title}</h3>
                <p className="text-gray-300 text-xs mb-1 text-center">{property.address}</p>
                <p className="text-base font-bold mb-2 text-center text-amber-400">{property.price}</p>
                
                <div className="flex justify-between w-full max-w-xs mx-auto mb-1">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-xs">{property.beds} {property.beds > 1 ? 'Bedrooms' : 'Studio'}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs">{property.baths} {property.baths > 1 ? 'Bathrooms' : 'Bathroom'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mb-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
                    </svg>
                    <span className="text-xs">{property.sqft.toLocaleString()} SqFt</span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-center space-x-2">
                  <button 
                    onClick={handlePhoneButtonClick}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    {t('contactNow')}
                  </button>
                  <button 
                    onClick={handleDetailsClick}
                    className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium transition"
                  >
                    {t('learnMore')}
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">{t('phone')}</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-2xl font-bold">971 52 7476335</p>
            <p className="text-gray-500 mt-2">{t('contactSection')}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturedListings;
