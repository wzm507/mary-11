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
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('brandOverview')}</h3>
              <p className="text-gray-700 mb-6">
                对于女性而言，衣橱是展现个性、给人留下深刻第一印象的机会。YCL Style 于2022年开业，提供多样化的服装选择，以适配不同女性的个人风格。我们还为所有顾客提供西装和裤子的定制测量服务，是时尚达人打造完美衣橱的绝佳去处。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('shoppingExperience')}</h3>
              <p className="text-gray-700 mb-6">
                除了助力顾客展现最佳形象，YCL Style 还致力于让每一次购物都成为愉快的体验。卓越的客户服务、闪电般的订单处理速度、超快速配送以及无 hassle 的退货政策，都是我们的核心目标。我们重视顾客的任何反馈——无论好评还是建议，并始终致力于提升您的购物体验。
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('missionVisionValues')}</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('vision')}</h4>
                  <p className="text-gray-700">
                    打造一家通过服装系列，让每位女性都能感受到尊重与关爱的店铺。
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('mission')}</h4>
                  <p className="text-gray-700">
                    为顾客呈现最时尚、独特的服装，让她们拥有足够的自信去成就一切。我们通过提供独特的购物体验，帮助顾客挑选出最适合自己的造型。
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('values')}</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>卓越标准：努力为消费者提供独特、高品质的服装。</li>
                    <li>卓越客户服务：致力于满足客户需求，打造愉悦的购物体验——从用户友好的网站，到订单的快速安全配送。</li>
                    <li>热情至上：全身心投入我们所做的每一件事。</li>
                    <li>关爱客户：给予每位客户全身心的关爱。</li>
                    <li>诚信为本：努力与客户建立基于信任的最佳关系。</li>
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
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('companyProfile')}</h3>
              <p className="text-gray-700 mb-6">
                KLF是一家专注中东地产领域的数字营销与科技服务公司，致力于为沙特&迪拜等中东地区的房地产开发商和房产经纪人提供多样化营销方案和全栈技术支持。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreServices')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">海外房产经纪人IP策划</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>个人品牌定位与形象打造</li>
                    <li>社交媒体内容策略规划</li>
                    <li>专业摄影与视频制作</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">社媒账号运营</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>多平台账号矩阵搭建</li>
                    <li>内容创作与发布管理</li>
                    <li>粉丝互动与社群运营</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">迪拜房产代币化</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>不动产数字化解决方案</li>
                    <li>区块链技术应用</li>
                    <li>投资流程简化</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">AI智能体开发</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>智能客服系统</li>
                    <li>自动化营销工具</li>
                    <li>数据分析与预测</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">迪拜房产CRM系统</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>客户关系管理平台</li>
                    <li>销售流程自动化</li>
                    <li>数据分析与报表</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('technicalAdvantages')}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>精通 WAT协议、RWA技术、AI AGENT、RPA等技术</li>
                    <li>融合中东文化、房产逻辑与AI/区块链技术</li>
                    <li>提供兼具转化穿透力与技术前瞻性的解决方案</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreConcepts')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">深耕中东</h4>
                      <p className="text-sm text-gray-600">本地化团队，深度理解市场</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">AI赋能</h4>
                      <p className="text-sm text-gray-600">智能化工具提升效率</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">区块上链</h4>
                      <p className="text-sm text-gray-600">前沿技术保障安全</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-amber-700">苛求细节</h4>
                      <p className="text-sm text-gray-600">精益求精的服务品质</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state.id === 'dubai-advisor') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('careerJourney')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium mb-2">从基层起步</h4>
                  <p className="text-gray-700">
                    以2500迪拉姆起薪进入迪拜，从房地产销售基层开启职业生涯，在包含外企职场、俄罗斯经理管理、巴基斯坦公司背景的复杂环境中，逐步熟悉当地市场规则与跨文化协作模式。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-2">职业进阶</h4>
                  <p className="text-gray-700">
                    凭借一线积累的实战经验与市场洞察，逐步晋升为政府开发商中国市场顾问，成为连接迪拜房地产项目与中、英市场的关键纽带。
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('coreBusiness')}</h3>
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">跨市场推广</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>主导迪拜房产项目在中、英两国的营销展览</li>
                    <li>统筹线上线下整合推广，推动项目在国际市场的落地</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">客户价值交付</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>2018-2022年，为服务的所有客户实现30%-200%的投资回报</li>
                    <li>建立高效的客户服务体系</li>
                    <li>2022-2024年，拓展至私人家族办公室及高净值客户群体</li>
                    <li>提供从投资规划到资产运营的全链条服务</li>
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
                  在福布斯发表学术性论文，以专业视角解读中东房地产投资逻辑，凭借七年深耕的专业度确立行业话语权，成为中东房地产投资领域的华人标杆之一。
                </p>
              </div>
              
              <div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">商业认知沉淀</h4>
                  <p className="text-gray-700">
                    形成"本地化策略 + 全球化视野"的核心逻辑，例如为迪拜政府项目定制中国市场推广方案，将对迪拜市场的深度理解转化为精准的商业实践，为后续跨领域布局奠定基础。
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
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('projectOverview')}</h3>
              <p className="text-gray-700 mb-6">
                这是位于阿联酋迪拜唐人街好运集市的米其林小吃项目，场地面积达 9586.75 平方英尺，项目于 2025 年 1 月开展，由 VIEW ARCHITECTS 和 TANG INVESTMENT 组成的设计团队倾力打造。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('culturalSignificance')}</h3>
              <p className="text-gray-700 mb-6">
                项目不仅是一处地标，更是融合文化与情感的精神港湾，既展现华人文化特色，也是城市文化共融的象征，不同语言、文化与风俗在此和谐共生。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('designConcept')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>延续建筑意义并植入多元文化与地域元素</li>
                <li>传达自然氛围并实现自然与设计的对话</li>
                <li>以当代手法呈现传统文精神</li>
                <li>配备灯光和防盗等智能化系统</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('spacePlanning')}</h3>
              <p className="text-gray-700 mb-6">
                运用秩序、模数、体块、穿插等多种设计方法，精心规划空间布局，店铺包含入口、收银出餐区和后厨操作区，后厨配备烤炉、冰箱等齐全设备。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('foodOptions')}</h3>
              <p className="text-gray-700 mb-6">
                提供丰富多样的美食选择，涵盖台湾小吃、肉夹馍、大连鱿鱼等中国特色美食，还有寿司、龙虾等多元菜品，满足不同口味需求。
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('facilitiesServices')}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>设有开水供应、公共电话等实用设施</li>
                <li>适合拍照打卡的区域</li>
                <li>"抬头见喜"等传统元素装饰</li>
                <li>亲切的服务标语营造温馨氛围</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('projectVision')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('culturalFusion')}</h4>
                  <p className="text-sm text-gray-600">打造多元文化体验空间</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('foodExperience')}</h4>
                  <p className="text-sm text-gray-600">提供特色美食与文化元素</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('emotionalConnection')}</h4>
                  <p className="text-sm text-gray-600">让顾客找到宁静与美好</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('servicePhilosophy')}</h4>
                  <p className="text-sm text-gray-600">通过贴心服务感受独特魅力</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (state.id === 'cultural-bridge') {
      return (
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-6">{state.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{state.description}</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('marketObserver')}</h3>
              <p className="text-gray-700 mb-6">
                依托近十年迪拜深耕经验，聚焦房地产、商业运营等核心领域，通过外籍平台（Instagram、YouTube）以海外网红视角，系统输出迪拜市场动态、投资逻辑与生活方式解析。
              </p>
              <p className="text-gray-700 mb-6">
                内容兼具实战性与专业性，例如结合自身房地产投资与咨询经历，解读中东房产政策、市场趋势及资产配置策略，为关注中东市场的全球受众提供参考。
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h4 className="font-medium text-amber-700">{t('professionalAdvantages')}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>福布斯学术论文发表者，提供权威市场解读</li>
                  <li>七年迪拜房地产实战经验，洞察市场底层逻辑</li>
                  <li>多平台内容输出，覆盖全球投资者与创业者</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('culturalBridge')}</h3>
              <p className="text-gray-700 mb-6">
                作为在中东华人圈的代表性人物，通过多元渠道推动中阿文化与经济交流：一方面，向国际社会展现迪拜的多元文化生态与商业机遇，传递中东市场的开放与活力；另一方面，为中国企业与个人了解中东提供本土化视角，助力中资机构在迪拜的市场落地与资源对接。
              </p>
              <p className="text-gray-700 mb-6">
                借助跨界实践（如主持阿拉伯国际节颁奖礼、与中外明星互动等），以更具亲和力的方式打破文化隔阂，在国际传播中融入人文温度，成为中阿民间交流的纽带。
              </p>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-medium text-amber-700">{t('culturalHighlights')}</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>主持阿拉伯国际节颁奖礼等高端文化活动</li>
                  <li>与中外明星互动，提升传播影响力</li>
                  <li>生活方式分享，展现真实中东文化</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 border-b pb-2">{t('dualIdentity')}</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700">
                  "中东市场观察者" 的专业属性为传播内容奠定可信度，其在福布斯发表的学术性论文、实战化商业经验，让市场解读更具说服力；"文化桥梁" 的角色则赋予传播人文深度，通过生活方式分享、跨文化活动参与，让国际受众更立体地理解中东与中国的关联。
                </p>
              </div>
              
              <div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-700">{t('valueCreation')}</h4>
                  <p className="text-gray-700">
                    两者相互赋能，既以专业洞察服务全球投资者与创业者，又以文化连接促进中阿民间互信，最终实现商业信息与人文价值的双重输出。
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
