import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyDevelopers = () => {
  const developers = [
    {
      developerName: "伊玛尔地产",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-em5m8w27somkqjyilhfgg1qkzykqog.png"
    },
    {
      developerName: "美拉斯地产",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/1752221625121-nic16g94zoic38skbcc69pwts6o9vk.jpg"
    },
    {
      developerName: "达马克地产",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-b0u3xu94i0icykmilp0ia5fsw99872.png"
    },
    {
      developerName: "aldar地产",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nfew6ly045uazfwf4kluubuuj98ypx.png"
    },
    {
      developerName: "SOBHA地产",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/sobha-liytn1ue4ft4vo9mpoyd7qe8qyfcvq.png"
    },
    {
      developerName: "AZIZI地产",
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
            <h2 className="text-3xl font-bold mb-2">开发商房产</h2>
            <p className="text-gray-600">Exclusive Developer Listings</p>
          </div>
          <div 
            className="flex items-center text-gray-500 cursor-pointer hover:text-amber-600 transition"
            onClick={goToDeveloperProjects}
          >
            <span>官方合作开发商</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {developers.map((property, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl shadow-lg group w-full mx-auto aspect-square"
            >
              <img 
                src={property.image} 
                alt={property.developerName} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-amber-300 font-medium text-lg">{property.developerName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDevelopers;
