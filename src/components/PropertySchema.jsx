import { useEffect } from 'react';

/**
 * 房产页面的结构化数据组件
 * 用于提供Google等搜索引擎可识别的房产信息
 */
const PropertySchema = ({ property }) => {
  useEffect(() => {
    if (!property) return;

    // 创建结构化数据脚本元素
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // 构建房产结构化数据
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Residence",
      "name": property.title || "Property Listing",
      "description": property.description || "Property description",
      "url": window.location.href,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": property.address || "",
        "addressLocality": property.city || "",
        "addressRegion": property.region || "",
        "postalCode": property.postalCode || ""
      },
      "image": property.images?.[0] || "",
      "numberOfRooms": property.bedrooms || 0,
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": property.area || 0,
        "unitCode": "MTK"
      }
    };
    
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // 组件卸载时移除脚本
    return () => {
      document.head.removeChild(script);
    };
  }, [property]);

  // 此组件不渲染任何内容，仅添加结构化数据到页面头部
  return null;
};

export default PropertySchema;