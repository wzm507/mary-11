import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const PropertyDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = React.useState(false);

  if (!state) {
    navigate('/');
    return null;
  }

  const handlePhoneButtonClick = () => {
    setIsPhoneDialogOpen(true);
  };

  const renderPropertyDetails = () => {
    if (state.title === "Distress deal") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <h4 className="font-medium text-gray-900 mb-2">超值好价｜更大地块｜6 卧室别墅｜园景景观｜Nad Al Sheba Gardens 社区</h4>
          <h4 className="font-medium text-gray-900 mb-2">物业详情</h4>
          <p>位置：Nad Al Sheba Gardens Phase 6</p>
          <p>物业状态：期房（Off Plan）</p>
          <p>交付时间：2027 年 9 月</p>

          <h4 className="font-medium text-gray-900 mt-6 mb-2">户型规划</h4>
          <p>6 间卧室 + 1 间佣人房</p>
          <p>楼层结构：G + 2（地面层 + 2 层）</p>
          <p>建筑面积（BUA）：6,597.19 平方英尺</p>
          <p>地块面积：7,506.42 平方英尺</p>
          <p>景观：园景（Garden View）</p>
          <p>停车位：未提及（通常同类型物业会配套相应车位，具体可咨询开发商）</p>

          <h4 className="font-medium text-gray-900 mt-6 mb-2">价格信息</h4>
          <p>158 万迪拉姆（AED）｜约 4292860 美元（USD）</p>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-u39kt9ce3mgzijohyaqf8wqvzwllz1.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-7m8a27251ozme915uyj3lwe1zmrlvl.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-5izdpqfig5jn4zzcldwevfpojsytlv.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-b5xzd40hn6hvyf68hui2bfq83e4g9d.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-zd33zjlohlxhy2eaav6mcosaheq91c.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-olsa6owhan9qxnzxpdrlt1czgk0p6r.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-8n5dstel7oxixhkzsplxph7ldrxui0.png" 
                alt="Distress deal 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else if (state.title === "Dubai Hills Estate") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">超豪华别墅｜定制豪宅｜全屋精装｜高端装修｜优雅精品家具｜封闭式社区</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">位置：迪拜山庄（Dubai Hills Estate）</h4>
            <p className="mb-2">周边交通：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>16 分钟至帆船酒店（Burj Al Arab）</li>
              <li>17 分钟至哈利法塔、迪拜购物中心及市中心</li>
              <li>19 分钟至朱美拉棕榈岛</li>
              <li>22 分钟至 JBR 步行街（The Walk JBR）</li>
              <li>22 分钟至迪拜国际机场（DXB）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型配置：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>12 间卧室 + 地下室 + 电影院 + 健身房 + 儿童游戏室 + 女佣房 + 司机房</li>
              <li>10 间浴室</li>
              <li>占地面积：32,308.9 平方英尺 / 3,001.59 平方米</li>
              <li>建筑面积：40,000 平方英尺 / 3,716.12 平方米</li>
              <li>停车位：10 个</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务：</h4>
            <p>大堂、正式接待区、茶室、主席办公室、冷热备餐厨房、家庭影院、台球室、健身房、桑拿房、儿童游乐区、游泳池</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格：</h4>
            <p>1.6 亿迪拉姆（AED）｜约 43,561,121.60 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141414-6l8g7rsedxwio6w9hq7bum58hxrpc0.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141424-ils2j27isobsudj0xs9mnxr5c5awjy.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141430-exhz7gdgvcb5xy7kvbu9ge806cuxj8.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/s-u0lkl5fgamdtljhp7xj7zjjh2bkzd4.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141404-lpdi2jk1vb3xpdvs7x6xfct867rvc6.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141616-ep1s4gvno4lk1r8ravgu1j1yz3hgqd.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141618-58cung2o4n3cxqwq29li9th4463bpk.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141620-eh3dp02y7c55huktmyogi59htjq72i.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141622-e39ifqmuurd54d4m4monng0nw7fwns.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141624-bo3u33ntvvn6jp2suyg4oebdy7c26k.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141627-0tgudi24iy6vs66tpxv6ix2l3axt4d.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141631-syleltkjzwq5rycya0nfdtimont0ho.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141633-gyeab3m1glusddthi2eglqy0k2gyub.png" 
                alt="Dubai Hills Estate 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else if (state.title === "JumeirahLakeTowers") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">超豪华顶层公寓｜帆船酒店、迪拜天际线及高尔夫球场景观｜全屋精装配高端全新家具</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">位置：朱美拉湖塔（Jumeirah Lake Towers）</h4>
            <p className="mb-2">周边交通：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>11 分钟至朱美拉棕榈岛</li>
              <li>15 分钟至帆船酒店（Burj Al Arab）</li>
              <li>25 分钟至哈利法塔、迪拜购物中心及市中心</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型配置：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>5 间卧室 + 女佣房 + 储藏室</li>
              <li>7 间浴室</li>
              <li>面积：11,432.35 平方英尺 / 1,062.10 平方米</li>
              <li>景观：高尔夫球场、帆船酒店及迪拜天际线全景</li>
              <li>停车位：5 个</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务：</h4>
            <p>会所、悦榕庄水疗中心、全设备健身房、壁球室、31 米游泳池、池畔咖啡馆、儿童泳池、儿童游乐区、私人封闭式社区、宽阔草坪、悦榕庄专属管家服务</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格：</h4>
            <p>4,000 万迪拉姆（AED）｜约 10,890,652 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142002-pn0idm8et2m26kt4oaurk2tzm0fo10.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141948-ofxgxyqytexet32rzj0yh0kfkw0vjg.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141954-473ukvy8m3qnm49ijdpeszka1qggb1.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141957-amgjv225srp90qk6wjujpaokefby5t.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142000-b225jg1nam5izampaeoiz0xz4b0v8p.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142052-tinufjuvvncdtto4764hay78lp05cb.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142004-1b723g3qyp4nikzgk8omgfkkogpwbm.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142006-jqkcbp9fp6fc30ak929o3giyw4oii3.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142008-k8y60eadshj45u7ocft31bjrfvf16x.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142010-hyc7cumkzi6ngkjahbdxutd29swq79.png" 
                alt="JumeirahLakeTowers 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else if (state.title === "BluewatersIsland") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">蓝水岛｜豪华公寓｜全屋精装｜部分海景</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">物业详情：</h4>
            <h4 className="font-medium text-gray-900 mb-2">位置：蓝水岛（Bluewaters Island）</h4>
            <p className="mb-2">周边交通：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>步行 7 分钟至迪拜之眼（Dubai Eye）</li>
              <li>10 分钟至 JBR 海滩</li>
              <li>11 分钟至朱美拉棕榈岛</li>
              <li>17 分钟至帆船酒店（Burj Al Arab）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型配置：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>1 间卧室</li>
              <li>1 间浴室 + 1 间客用洗手间</li>
              <li>面积：1,118.59 平方英尺 / 103.92 平方米</li>
              <li>景观：部分海景及社区景观</li>
              <li>停车位：1 个</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务：</h4>
            <p>游泳池、设备齐全的健身房、儿童游乐区、景观花园、篮球场、餐厅、电动交通及水上的士服务</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格：</h4>
            <p>550 万迪拉姆（AED）｜约 1,497,617 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cs-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142242-h55f5fk6offr5ngb21o4ummave3orv.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142247-36cqmozrwr5cmokqzbzdws18ze1w4e.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142249-5dxq2cdcz94wr5raeoa02cvbc5adfx.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142251-lzz3pe35eknwz7avsshrah5304klng.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142255-4i32totvp67isz67aob6v7fbx1p224.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142257-w6zrndsdjbtkjep6j9wb1j4jz5dt4x.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142259-d9sn3cz5imr5n5yle3a0e272uuerny.png" 
                alt="BluewatersIsland 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else if (state.title === "Damac Lagoons") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">独栋别墅｜经典建筑风格｜单排布局｜公园景观｜毗邻泻湖</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">位置：达马克泻湖（Damac Lagoons）</h4>
            <p className="mb-2">周边交通：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>13 分钟至奇迹花园（Miracle Garden）</li>
              <li>14 分钟至全球村（Global Village）</li>
              <li>26 分钟至朱美拉棕榈岛</li>
              <li>28 分钟至帆船酒店（Burj Al Arab）</li>
              <li>30 分钟至 JBR 步行街（The Walk JBR）</li>
              <li>32 分钟至哈利法塔、迪拜购物中心及市中心</li>
              <li>24 分钟至阿勒马克图姆国际机场（Al Maktoum International Airport）</li>
              <li>37 分钟至迪拜国际机场（DXB）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型配置：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>6 间卧室 + 女佣房</li>
              <li>7 间浴室</li>
              <li>占地面积：5,087.35 平方英尺 / 472.63 平方米</li>
              <li>建筑面积：4,784.88 平方英尺 / 444.52 平方米</li>
              <li>停车位：4 个</li>
              <li>景观：公园景观、部分泻湖景观</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务：</h4>
            <p>水晶泻湖、天然山景瀑布、漂浮电影院、海滩入口、滑板公园、自行车道、嬉水池、泻湖滑索、滨水餐厅、专属会所、儿童游乐区、篮球场</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格：</h4>
            <p>680 万迪拉姆（AED）｜约 1,851,403.36 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707140936-jrhsyuabig7scqhvs50gfvth8462u4.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141001-5bj1p4swri13bw91t804897aw7lno8.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141006-3rbho70ngzp27taeykcoem6xkbysvx.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141009-au16asgf0fmt6211e460axeq82zj04.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141011-1kh4jmq16c8l8pdd9d5xm6avpqykom.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141014-fx9jnxgcf6gvp3fb2nljqzhtxbjob3.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707141018-patz3s4zwurup3jyxp4csx2mohtjxa.png" 
                alt="Damac Lagoons 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else if (state.title === "Business Bay") {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">超值好价｜全屋精装｜2 卧室公寓｜全运河景观｜地处迪拜核心地段</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">物业详情</h4>
            <h4 className="font-medium text-gray-900 mb-2">位置：商务港（Business Bay）</h4>
            <p className="mb-2">交通配套：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>7 分钟直达哈利法塔、迪拜购物中心及迪拜市中心</li>
              <li>10 分钟抵达海滩</li>
              <li>15 分钟直达迪拜国际机场（DXB）</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型规划：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>2 间卧室</li>
              <li>2 间浴室 + 1 间客用洗手间</li>
              <li>面积：1,330.74 平方英尺 / 123.63 平方米</li>
              <li>景观：全运河景观</li>
              <li>停车位：1 个</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务</h4>
            <p>休闲运动：游泳池、设备齐全的健身房、板式网球场、慢跑及自行车道</p>
            <p>生活配套：咖啡馆与餐厅、超市、酒店、电动车充电站</p>
            <p>亲子娱乐：儿童游乐区</p>
            <p>放松空间：屋顶露台、室内外休闲区、水疗中心与桑拿房</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格信息</h4>
            <p>245 万迪拉姆（AED）｜约 667,053.17 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142434-kmhi3hzg6q85q8pllsylva70fayesj.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142439-c1uycl0pr02bzagrapqi0usn22tixe.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142441-7cjz88q3r6b5rdifsan0k5rh4ir9m6.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142443-4819nhlioftvw9rerqn6vb97dhxvhl.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142445-65mtq4qyp9xr8aenn5dqdmwrzqckyl.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142446-j8jnkexa7m9d0xfboellpzjb6vas2g.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142448-n04z1cjrfiowssqg75maacu5sx5oef.png" 
                alt="Business Bay 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p className="font-semibold text-lg">【超值投资良机｜黄金地段｜服务式酒店公寓｜全屋精装｜都市风格】</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">位置：City Walk（城市漫步区）</h4>
            <p className="mb-2">周边配套：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>2 分钟至可口可乐竞技场</li>
              <li>7 分钟至哈利法塔、迪拜购物中心及市中心</li>
              <li>12 分钟至拉梅尔海滩</li>
              <li>15 分钟至迪拜国际机场（DXB）</li>
              <li>25 分钟至朱美拉棕榈岛</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">户型配置：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>开间（Studio）</li>
              <li>1 间浴室</li>
              <li>面积：253.71 平方英尺 / 23.57 平方米</li>
              <li>景观：社区 / 城市景观</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">设施与服务：</h4>
            <p>游泳池｜健身房｜户外烧烤区｜儿童游乐区｜花园 / 草坪｜餐厅｜洗衣区</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">价格：</h4>
            <p>80 万迪拉姆（AED）｜约 217,813.28 美元（USD）</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">项目实景照片</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142809-wsbpt9ayxbzno3soomk5hgqxv0chda.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142817-12h4wtvalf7mpi7kcvuludu69z2wrx.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142819-pj2zqalm1qqmg080m2dz7a9olx7vtw.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142821-gyy02vnk8dm8ski10zbpqvfoxc94ga.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142823-rv771fczoy8rn9o2l77bdwz9u8xcza.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142825-i4sps1e3u6s5tix87cotogqjmtdlem.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250707142827-utqjgz4oidcdx90n1noa266jwx9jim.png" 
                alt="CityWalk 实景照片" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-wider mb-6">{state.title}</h1>
        <p className="text-2xl font-bold text-amber-500 mb-6">{state.price}</p>
        <div className="w-24 h-0.5 bg-amber-500"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="relative overflow-hidden rounded-xl mb-8">
            <img 
              src={state.image} 
              alt={state.title} 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p className="text-gray-500 text-sm">卧室</p>
              <p className="text-lg font-semibold">{state.beds}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">浴室</p>
              <p className="text-lg font-semibold">{state.baths}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
              </svg>
              <p className="text-gray-500 text-sm">面积</p>
              <p className="text-lg font-semibold">{state.sqft.toLocaleString()} SqFt</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-500 text-sm">位置</p>
              <p className="text-lg font-semibold">迪拜</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h3 className="text-xl font-bold mb-4">物业详情</h3>
            {renderPropertyDetails()}
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-xl font-bold mb-4">咨询详情</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">+971 52 7476335</span>
              </div>
              
              <Button 
                onClick={handlePhoneButtonClick}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3"
              >
                立即咨询
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-amber-500 text-amber-500 hover:bg-amber-50 py-3"
              >
                预约看房
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">联系方式</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-2xl font-bold">971 52 7476335</p>
            <p className="text-gray-500 mt-2">请保存此号码以便随时联系</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyDetail;
