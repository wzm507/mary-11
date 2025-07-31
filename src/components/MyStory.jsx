import React from 'react';
import { BookOpen, Award, Briefcase, HeartHandshake } from 'lucide-react';

const MyStory = () => {
  const storySections = [
    {
      title: "迪拜创业起点",
      content: "23岁时独自前往迪拜，从2500迪拉姆月薪起步，开始房地产投资顾问生涯。在最初的艰难岁月里，我每天工作16小时，从最基础的销售做起，逐渐积累行业经验。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-nen3y598x2iodpf1x1agwahqwtcjhw.png",
      alignment: 'left'
    },
    {
      title: "投资回报奇迹",
      content: "2018-2022年间，我为所有客户实现30%至200%的投资回报，建立稳固的事业基础。这期间我经历了市场波动、资金链断裂等挑战，但始终坚持为客户创造价值的理念。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-mfusk215o2tqwusjw2v873gkr8g6kc.png",
      alignment: 'right'
    },
    {
      title: "时尚品牌创立",
      content: "2022年创立个人服装品牌YCL Fashion Women's Wear，担任创始人兼CEO。品牌专注于为职业女性提供高品质、时尚的服装，现已成为中东地区知名女装品牌。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-75faqfza5yg839761ksw7rmcd8in8u.png",
      alignment: 'left'
    },
    {
      title: "广告咨询公司",
      content: "2023年创立北京语宸广告咨询有限公司，为国际企业提供中国市场广告方案。公司专注于帮助中东品牌进入中国市场，搭建文化沟通桥梁。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-jqr3z8ql6sbljo9e37yduoi8g8xs2s.png",
      alignment: 'right'
    },
    {
      title: "餐饮投资",
      content: "2023年成为迪拜高端中餐馆'唐镇'合伙人，为中阿文化交流搭建桥梁。餐厅融合中阿饮食文化，已成为迪拜最受欢迎的高端中餐厅之一。",
      image: "https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-1vxac4qg82vcl57kx6ojobf1m5z2fq.png",
      alignment: 'left'
    }
  ];

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-wider mb-6">我的故事</h1>
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
        <h3 className="text-2xl font-bold mb-8 text-center">成长历程</h3>
        
        <div className="relative">
          <div className="absolute left-5 h-full w-0.5 bg-gray-200"></div>
          
          {[
            {
              year: "2017",
              title: "迪拜创业起点",
              description: "23岁时独自前往迪拜，从2500迪拉姆月薪起步，开始房地产投资顾问生涯。",
              icon: <Briefcase className="h-5 w-5 text-amber-500" />
            },
            {
              year: "2018-2022",
              title: "投资回报奇迹",
              description: "为所有客户实现30%至200%的投资回报，建立稳固的事业基础。",
              icon: <Award className="h-5 w-5 text-amber-500" />
            },
            {
              year: "2022",
              title: "时尚品牌创立",
              description: "创立个人服装品牌YCL Fashion Women's Wear，担任创始人兼CEO。",
              icon: <BookOpen className="h-5 w-5 text-amber-500" />
            },
            {
              year: "2023",
              title: "广告咨询公司",
              description: "创立北京语宸广告咨询有限公司，为国际企业提供中国市场广告方案。",
              icon: <Briefcase className="h-5 w-5 text-amber-500" />
            },
            {
              year: "2023",
              title: "餐饮投资",
              description: "成为迪拜高端中餐馆'唐镇'合伙人，为中阿文化交流搭建桥梁。",
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
