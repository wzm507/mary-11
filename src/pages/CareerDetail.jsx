import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CareerDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!state) {
    navigate('/');
    return null;
  }

  const renderContent = () => {
    if (state.id === 'fashion-brand') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{t('careerAchievements.fashionBrand.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('careerAchievements.fashionBrand.description')}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('brandOverview')}</h3>
              <p className="text-gray-700 mb-6">
                {t('fashionBrand.description')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('shoppingExperience')}</h3>
              <p className="text-gray-700 mb-6">
                {t('fashionBrand.shoppingExperience')}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('missionVisionValues')}</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('vision')}</h4>
                  <p className="text-gray-700">
                    {t('fashionBrand.vision')}
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('mission')}</h4>
                  <p className="text-gray-700">
                    {t('fashionBrand.mission')}
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('values')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>{t('fashionBrand.values.excellence')}</li>
                    <li>{t('fashionBrand.values.customerService')}</li>
                    <li>{t('fashionBrand.values.passion')}</li>
                    <li>{t('fashionBrand.values.care')}</li>
                    <li>{t('fashionBrand.values.integrity')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state.id === 'advertising') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{t('careerAchievements.advertising.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('careerAchievements.advertising.description')}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('companyProfile')}</h3>
              <p className="text-gray-700 mb-6">
                {t('advertising.companyProfile')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreServices')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('advertising.services.agentIP.title')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.services.agentIP.item1')}</li>
                    <li>{t('advertising.services.agentIP.item2')}</li>
                    <li>{t('advertising.services.agentIP.item3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('advertising.services.socialMedia.title')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.services.socialMedia.item1')}</li>
                    <li>{t('advertising.services.socialMedia.item2')}</li>
                    <li>{t('advertising.services.socialMedia.item3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('advertising.services.realEstateTokenization.title')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.services.realEstateTokenization.item1')}</li>
                    <li>{t('advertising.services.realEstateTokenization.item2')}</li>
                    <li>{t('advertising.services.realEstateTokenization.item3')}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('advertising.services.aiAgent.title')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.services.aiAgent.item1')}</li>
                    <li>{t('advertising.services.aiAgent.item2')}</li>
                    <li>{t('advertising.services.aiAgent.item3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('advertising.services.crm.title')}</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.services.crm.item1')}</li>
                    <li>{t('advertising.services.crm.item2')}</li>
                    <li>{t('advertising.services.crm.item3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('technicalAdvantages')}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>{t('advertising.technicalAdvantages.item1')}</li>
                    <li>{t('advertising.technicalAdvantages.item2')}</li>
                    <li>{t('advertising.technicalAdvantages.item3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreConcepts')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">{t('advertising.concepts.middleEast')}</h4>
                      <p className="text-sm text-gray-600">{t('advertising.concepts.middleEast.desc')}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">{t('advertising.concepts.ai')}</h4>
                      <p className="text-sm text-gray-600">{t('advertising.concepts.ai.desc')}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">{t('advertising.concepts.blockchain')}</h4>
                      <p className="text-sm text-gray-600">{t('advertising.concepts.blockchain.desc')}</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">{t('advertising.concepts.detail')}</h4>
                      <p className="text-sm text-gray-600">{t('advertising.concepts.detail.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      );
    } else if (state.id === 'dubai-advisor') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{t('careerAchievements.dubaiAdvisor.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('careerAchievements.dubaiAdvisor.description')}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('careerJourney')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('dubaiAdvisor.journey.entry')}</h4>
                  <p className="text-gray-700">
                    {t('dubaiAdvisor.journey.entry.desc')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">{t('dubaiAdvisor.journey.advancement')}</h4>
                  <p className="text-gray-700">
                    {t('dubaiAdvisor.journey.advancement.desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreBusiness')}</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('dubaiAdvisor.business.crossMarket')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>{t('dubaiAdvisor.business.crossMarket.item1')}</li>
                    <li>{t('dubaiAdvisor.business.crossMarket.item2')}</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('dubaiAdvisor.business.valueDelivery')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>{t('dubaiAdvisor.business.valueDelivery.item1')}</li>
                    <li>{t('dubaiAdvisor.business.valueDelivery.item2')}</li>
                    <li>{t('dubaiAdvisor.business.valueDelivery.item3')}</li>
                    <li>{t('dubaiAdvisor.business.valueDelivery.item4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('industryInfluence')}</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700">
                  {t('dubaiAdvisor.influence.industry')}
                </p>
              </div>
              
              <div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('dubaiAdvisor.influence.businessInsight')}</h4>
                  <p className="text-gray-700">
                    {t('dubaiAdvisor.influence.businessInsight.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state.id === 'restaurant') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{t('careerAchievements.restaurant.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('careerAchievements.restaurant.description')}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('projectOverview')}</h3>
              <p className="text-gray-700 mb-6">
                {t('restaurant.overview')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('culturalSignificance')}</h3>
              <p className="text-gray-700 mb-6">
                {t('restaurant.culturalSignificance')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('designConcept')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>{t('restaurant.designConcept.item1')}</li>
                <li>{t('restaurant.designConcept.item2')}</li>
                <li>{t('restaurant.designConcept.item3')}</li>
                <li>{t('restaurant.designConcept.item4')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('spacePlanning')}</h3>
              <p className="text-gray-700 mb-6">
                {t('restaurant.spacePlanning')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('foodOptions')}</h3>
              <p className="text-gray-700 mb-6">
                {t('restaurant.foodOptions')}
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('facilitiesServices')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>{t('restaurant.facilities.item1')}</li>
                <li>{t('restaurant.facilities.item2')}</li>
                <li>{t('restaurant.facilities.item3')}</li>
                <li>{t('restaurant.facilities.item4')}</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('projectVision')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('culturalFusion')}</h4>
                  <p className="text-sm text-gray-600">{t('restaurant.vision.culturalFusion')}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('foodExperience')}</h4>
                  <p className="text-sm text-gray-600">{t('restaurant.vision.foodExperience')}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('emotionalConnection')}</h4>
                  <p className="text-sm text-gray-600">{t('restaurant.vision.emotionalConnection')}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('servicePhilosophy')}</h4>
                  <p className="text-sm text-gray-600">{t('restaurant.vision.servicePhilosophy')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state.id === 'cultural-bridge') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{t('careerAchievements.culturalBridge.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('careerAchievements.culturalBridge.description')}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('marketObserver')}</h3>
              <p className="text-gray-700 mb-6">
                {t('culturalBridge.marketObserver.part1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('culturalBridge.marketObserver.part2')}
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-amber-700">{t('professionalAdvantages')}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>{t('culturalBridge.advantages.item1')}</li>
                  <li>{t('culturalBridge.advantages.item2')}</li>
                  <li>{t('culturalBridge.advantages.item3')}</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('culturalBridge')}</h3>
              <p className="text-gray-700 mb-6">
                {t('culturalBridge.description.part1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('culturalBridge.description.part2')}
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-medium text-amber-700">{t('culturalHighlights')}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>{t('culturalBridge.highlights.item1')}</li>
                  <li>{t('culturalBridge.highlights.item2')}</li>
                  <li>{t('culturalBridge.highlights.item3')}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('dualIdentity')}</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700">
                  {t('culturalBridge.dualIdentity.description')}
                </p>
              </div>
              
              <div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('valueCreation')}</h4>
                  <p className="text-gray-700">
                    {t('culturalBridge.valueCreation')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          <div className="text-gray-700 whitespace-pre-line">{state.content}</div>
        </div>
      );
    }
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="sticky top-6">
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img 
                src={state.image} 
                alt={state.title} 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">{t('services')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+971 52 7476335</span>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-medium transition">
                  {t('contactNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
