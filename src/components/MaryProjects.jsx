
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropertyCard from '@/components/PropertyCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const MaryProjects = () => {
  const { t } = useTranslation();
  // 生成16个Mary项目的卡片数据
  const maryProjects = Array.from({ length: 16 }, (_, i) => {
    const baseProject = {
      id: i + 1,
      address: "",
      status: i % 3 === 0 ? t('maryProjects.hotSale') : t('maryProjects.limitedSale'),
    };

    // 第一个项目特殊处理
    if (i === 0) {
      return {
        ...baseProject,
        title: "Damac Lagoons",
        price: "$1,851,403.36",
        beds: 6,
        baths: 7,
        sqft: 4784.88,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-k6lngt3653ttwdjg0972mds1vrky27.png",
        slug: "damac-lagoons"
      };
    }

    // 第二个项目特殊处理
    if (i === 1) {
      return {
        ...baseProject,
        title: "Business Bay",
        price: "$667,053.17",
        beds: 2,
        baths: 2,
        sqft: 1330.74,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-q671vf1glaadqju63jfk6ippqddfoc.png",
        slug: "business-bay"
      };
    }

    // 第三到第六个项目替换为精选房产项目
    if (i >= 2 && i <= 5) {
      const featuredProperties = [
        {
          title: "Dubai Hills Estate",
          price: "$43,561,121.60",
          beds: 12,
          baths: 10,
          sqft: 40000,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-5ts5ygh85tc27mj8rkxy5vr6uzsoke.png",
          slug: "dubai-hills"
        },
        {
          title: "JumeirahLakeTowers",
          price: "$10,890,652",
          beds: 5,
          baths: 7,
          sqft: 11432.35,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-uzec3xmj5so283yv44iy7b19vbtafs.png",
          slug: "jlt"
        },
        {
          title: "BluewatersIsland",
          price: "$1,497,617",
          beds: 1,
          baths: 1,
          sqft: 1118.59,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-tylq8x5l4vp7s43tw8nxcmj30nixvb.png",
          slug: "bluewaters"
        },
        {
          title: "CityWalk",
          price: "$217,813.28",
          beds: 1,
          baths: 1,
          sqft: 253.71,
          image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-1kzqmc1ig6wvcxydhf747d1oezpwbf.png",
          slug: "citywalk"
        }
      ];
      return {
        ...baseProject,
        ...featuredProperties[i - 2]
      };
    }

    // 第7个项目特殊处理
    if (i === 6) {
      return {
        ...baseProject,
        title: "Distress deal",
        price: "$4,292,860",
        beds: 6,
        baths: 7,
        sqft: 7506.42,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250703180540-75laare8rvr5mghmupgj6qx9kittq3.png",
        slug: "distress-deal"
      };
    }

    // 第8个项目特殊处理为Creek Harbour
    if (i === 7) {
      return {
        ...baseProject,
        title: "Creek Harbour",
        price: "$3,500,000",
        beds: 4,
        baths: 5,
        sqft: 3500,
        image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250716101000-lccum758kawmlmxp4zz117xw7uejjg.png",
        slug: "creek-harbour"
      };
    }

    // 其他项目保持原样
    return {
      ...baseProject,
      title: `Mary精选项目 ${i + 1}`,
      price: `$${(Math.floor(Math.random() * 10) + 3)}00,000`,
      beds: Math.floor(Math.random() * 5) + 2,
      baths: Math.floor(Math.random() * 4) + 1,
      sqft: Math.floor(Math.random() * 2000) + 1000,
      image: `https://nocode.meituan.com/photo/search?keyword=${encodeURIComponent(['豪华别墅', '海景公寓', '城市豪宅', '度假别墅', '顶层公寓', '花园洋房', '湖景别墅', '现代公寓'][i % 8])}&width=400&height=300`,
      slug: `mary-project-${i+1}`
    };
  });

  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto bg-gray-50" id="mary-projects">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">{t('maryProjects.title')}</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        <p className="text-gray-600 mt-4">{t('maryProjects.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {maryProjects.map((property) => (
          <div key={property.id} className="transition-transform duration-300 hover:scale-105">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">{t('maryProjects.noPropertyFound')}</p>
        <button 
          onClick={() => setIsContactDialogOpen(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          {t('maryProjects.contactForCustomPlan')}
        </button>
      </div>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">{t('maryProjects.contactMary')}</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-2xl font-bold mb-6">+971 52 7476335</p>
            <div className="flex justify-center mb-4">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E7%94%BB%E6%9D%BF%209-g08mcpayb5nfd6fgjoqgmw6ib6b95j.png" 
                alt={t('maryProjects.scanQR')} 
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="text-gray-500">{t('maryProjects.scanQR')}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaryProjects;

