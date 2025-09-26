import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const PropertyDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = React.useState(false);
  const { t } = useTranslation();

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
          <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.projectDescription')}｜更大地块｜6 {t('propertyDetail.bedrooms')} {t('propertyDetail.unitVilla')}｜{t('propertyDetail.viewGarden')}｜Nad Al Sheba Gardens 社区</h4>
          <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.propertyDetails')}</h4>
          <p>{t('propertyDetail.location')}：Nad Al Sheba Gardens Phase 6</p>
          <p>{t('propertyDetail.propertyStatus')}：{t('propertyDetail.statusOffPlan')}</p>
          <p>{t('propertyDetail.deliveryDate')}：2027 年 9 月</p>

          <h4 className="font-medium text-gray-900 mt-6 mb-2">{t('propertyDetail.floorPlan')}</h4>
          <p>{t('propertyDetail.unitConfiguration')}：6 间{t('propertyDetail.bedrooms')} + 1 间佣人房</p>
          <p>{t('propertyDetail.floorStructure')}：{t('propertyDetail.floorGPlus2')}</p>
          <p>{t('propertyDetail.constructionArea')} {t('propertyDetail.bua')}：6,597.19 {t('propertyDetail.squareFeet')}</p>
          <p>{t('propertyDetail.plotArea')}：7,506.42 {t('propertyDetail.squareFeet')}</p>
          <p>{t('propertyDetail.view')}：{t('propertyDetail.viewGarden')}</p>
          <p>{t('propertyDetail.parking')}：{t('propertyDetail.undefinedParking')}</p>

          <h4 className="font-medium text-gray-900 mt-6 mb-2">{t('propertyDetail.price')}</h4>
          <p>{t('propertyDetail.price1580000')}</p>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：迪拜山庄（Dubai Hills Estate）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.transportBurjAlArab16')}</li>
              <li>{t('propertyDetail.transportBurjKhalifa17')}</li>
              <li>{t('propertyDetail.transportPalmJumeirah19')}</li>
              <li>{t('propertyDetail.transportJBR22')}</li>
              <li>{t('propertyDetail.transportDXB22')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.floor12Bedrooms')}</li>
              <li>{t('propertyDetail.floor10Bathrooms')}</li>
              <li>{t('propertyDetail.plotArea32308')}</li>
              <li>{t('propertyDetail.constArea40000')}</li>
              <li>{t('propertyDetail.parking10')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}：</h4>
            <p>{t('propertyDetail.facilityLobby')}、{t('propertyDetail.facilityFormalReception')}、{t('propertyDetail.facilityTeaRoom')}、{t('propertyDetail.facilityChairmanOffice')}、{t('propertyDetail.facilityHotKitchen')}、{t('propertyDetail.facilityHomeTheater')}、{t('propertyDetail.facilityBilliardRoom')}、{t('propertyDetail.facilityGym')}、{t('propertyDetail.facilitySauna')}、{t('propertyDetail.facilityKidsPlayArea')}、{t('propertyDetail.facilitySwimmingPool')}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}：</h4>
            <p>{t('propertyDetail.price160000000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
          <p className="font-semibold text-lg">{t('propertyDetail.jumeirahLakeTowersDescription')}</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：朱美拉湖塔（Jumeirah Lake Towers）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.transportPalmJumeirah11')}</li>
              <li>{t('propertyDetail.transportBurjAlArab15')}</li>
              <li>{t('propertyDetail.transportBurjKhalifa25')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.unitConfiguration')}：5 间{t('propertyDetail.bedrooms')} + 女佣房 + 储藏室</li>
              <li>{t('propertyDetail.floor7Bathrooms')}</li>
              <li>{t('propertyDetail.area')}：11,432.35 {t('propertyDetail.sqFt')} / 1,062.10 {t('propertyDetail.sqM')}</li>
              <li>{t('propertyDetail.viewGolfBurjSkyline')}</li>
              <li>{t('propertyDetail.parking')}：5 个</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}：</h4>
            <p>{t('propertyDetail.facilityClubhouse')}、{t('propertyDetail.facilitySpa')}、{t('propertyDetail.facilityGym')}、{t('propertyDetail.facilitySquash31mPool')}、{t('propertyDetail.facilityKidsPool')}、{t('propertyDetail.facilityKidsPlayArea')}、{t('propertyDetail.facilityPrivateGatedCommunity')}、{t('propertyDetail.facilityWideLawn')}、{t('propertyDetail.facilityBanyanTreeButlerService')}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}：</h4>
            <p>{t('propertyDetail.price40000000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
          <p className="font-semibold text-lg">{t('propertyDetail.bluewatersIslandDescription')}</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.propertyDetails')}：</h4>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：蓝水岛（Bluewaters Island）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('propertyDetail.transportWalkMin')}7{t('propertyDetail.transportTimeMin')}{t('propertyDetail.dubaiEye')}</li>
            <li>10{t('propertyDetail.transportTimeMin')}JBR{t('propertyDetail.beach')}</li>
            <li>{t('propertyDetail.transportPalmJumeirah11')}</li>
            <li>17{t('propertyDetail.transportTimeMin')}{t('propertyDetail.burjAlArab')}</li>
          </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.floor1Bedroom')}</li>
              <li>{t('propertyDetail.floor1Bath1Powder')}</li>
              <li>{t('propertyDetail.area1118')}</li>
              <li>{t('propertyDetail.viewPartialSea')}</li>
              <li>{t('propertyDetail.parking1')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}：</h4>
            <p>{t('propertyDetail.facilityBluewater')}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}：</h4>
            <p>{t('propertyDetail.price5500000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="font-semibold text-lg">{t('propertyDetail.damacLagoonsDescription')}</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：达马克泻湖（Damac Lagoons）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.transportMiracleGarden13')}</li>
              <li>{t('propertyDetail.transportGlobalVillage14')}</li>
              <li>{t('propertyDetail.transportPalmJumeirah26')}</li>
              <li>{t('propertyDetail.transportBurjAlArab28')}</li>
              <li>{t('propertyDetail.transportJBR30')}</li>
              <li>{t('propertyDetail.transportBurjKhalifa32')}</li>
              <li>{t('propertyDetail.transportDWC24')}</li>
              <li>{t('propertyDetail.transportDXB37')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.floor6BedMaid')}</li>
              <li>{t('propertyDetail.floor7Bathrooms')}</li>
              <li>{t('propertyDetail.plotArea5087')}</li>
              <li>{t('propertyDetail.constArea4784')}</li>
              <li>{t('propertyDetail.parking4')}</li>
              <li>{t('propertyDetail.viewParkPartialLagoon')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}：</h4>
            <p>{t('propertyDetail.facilityLagoons')}、{t('propertyDetail.facilityDamacLagoons')}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}：</h4>
            <p>{t('propertyDetail.price6800000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
          <p className="font-semibold text-lg">{t('propertyDetail.projectDescription')}｜全屋精装｜2 {t('propertyDetail.bedrooms')} {t('propertyDetail.unitApartment')}｜全{t('propertyDetail.viewCanal')}｜地处迪拜核心地段</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.propertyDetails')}</h4>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：商务港（Business Bay）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>7{t('propertyDetail.transportTimeMin')}{t('propertyDetail.burjKhalifa')}、{t('propertyDetail.dubaiMall')}{t('propertyDetail.andDowntown')}</li>
            <li>10{t('propertyDetail.transportTimeMin')}{t('propertyDetail.beach')}</li>
            <li>15{t('propertyDetail.transportTimeMin')}{t('propertyDetail.dxbAirport')}</li>
          </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.unitConfiguration')}：2 间{t('propertyDetail.bedrooms')}</li>
            <li>2{t('propertyDetail.bathrooms')} + 1{t('propertyDetail.powderRoom')}</li>
            <li>{t('propertyDetail.area')}：1,330.74 {t('propertyDetail.sqFt')} / 123.63 {t('propertyDetail.sqM')}</li>
            <li>{t('propertyDetail.view')}：{t('propertyDetail.viewCanal')}</li>
            <li>{t('propertyDetail.parking')}：1{t('propertyDetail.parkingSpace')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}</h4>
            <p>{t('propertyDetail.leisureSports')}：{t('propertyDetail.facilityPool')}、{t('propertyDetail.facilityGym')}、{t('propertyDetail.facilityTennis')}、{t('propertyDetail.joggingTrack')}、{t('propertyDetail.cyclingTrack')}</p>
            <p>{t('propertyDetail.lifestyleAmenities')}：{t('propertyDetail.facilityCafe')}、{t('propertyDetail.facilityRestaurant')}、{t('propertyDetail.facilitySupermarket')}、{t('propertyDetail.facilityHotel')}、{t('propertyDetail.facilityEVCharging')}</p>
            <p>{t('propertyDetail.familyEntertainment')}：{t('propertyDetail.facilityKidsPlayArea')}</p>
            <p>{t('propertyDetail.relaxationSpace')}：{t('propertyDetail.facilityRooftopTerrace')}、{t('propertyDetail.facilityIndoorLounge')}、{t('propertyDetail.facilityOutdoorLounge')}、{t('propertyDetail.facilitySpa')}、{t('propertyDetail.facilitySauna')}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}</h4>
            <p>{t('propertyDetail.price2450000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
          <p className="font-semibold text-lg">{t('propertyDetail.cityWalkDescription')}</p>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.location')}：City Walk（城市漫步区）</h4>
            <p className="mb-2">{t('propertyDetail.transportation')}：</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('propertyDetail.transportCocaColaArena')}</li>
            <li>7{t('propertyDetail.transportTimeMin')}{t('propertyDetail.burjKhalifa')}、{t('propertyDetail.dubaiMall')}{t('propertyDetail.andDowntown')}</li>
            <li>{t('propertyDetail.transportLaMer12')}</li>
            <li>15{t('propertyDetail.transportTimeMin')}{t('propertyDetail.dxbAirport')}</li>
            <li>25{t('propertyDetail.transportTimeMin')}{t('propertyDetail.palmJumeirah')}</li>
          </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.floorPlan')}：</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t('propertyDetail.floorStudio')}</li>
            <li>1{t('propertyDetail.bathroom')}</li>
            <li>{t('propertyDetail.area253')}</li>
            <li>{t('propertyDetail.viewCommunityCity')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.facilities')}：</h4>
            <p>{t('propertyDetail.facilityCityWalk')}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-2">{t('propertyDetail.price')}：</h4>
            <p>{t('propertyDetail.price800000')}</p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">{t('propertyDetail.projectPhotos')}</h3>
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
              <p className="text-gray-500 text-sm">{t('propertyDetail.bedrooms')}</p>
              <p className="text-lg font-semibold">{state.beds}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-sm">{t('propertyDetail.bathrooms')}</p>
              <p className="text-lg font-semibold">{state.baths}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
              </svg>
              <p className="text-gray-500 text-sm">{t('propertyDetail.area')}</p>
              <p className="text-lg font-semibold">{state.sqft.toLocaleString()} {t('propertyDetail.squareFeet')}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-500 text-sm">{t('propertyDetail.location')}</p>
              <p className="text-lg font-semibold">{t('propertyDetail.dubai')}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
            <h3 className="text-xl font-bold mb-4">{t('propertyDetail.propertyDetails')}</h3>
            {renderPropertyDetails()}
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-xl font-bold mb-4">{t('propertyDetail.consultation')}</h3>
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
                {t('propertyDetail.consultNow')}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-amber-500 text-amber-500 hover:bg-amber-50 py-3"
              >
                {t('propertyDetail.bookViewing')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">{t('propertyDetail.contactInfo')}</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="text-2xl font-bold">971 52 7476335</p>
            <p className="text-gray-500 mt-2">{t('propertyDetail.saveNumber')}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyDetail;
