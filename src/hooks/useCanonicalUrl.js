import { useEffect } from 'react';

/**
 * 设置规范URL的自定义Hook
 * 帮助搜索引擎识别页面的规范版本，避免重复内容问题
 */
const useCanonicalUrl = (url) => {
  useEffect(() => {
    // 默认使用当前页面URL
    const canonicalUrl = url || window.location.href;
    
    // 检查是否已存在canonical标签
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalTag) {
      // 创建新的canonical标签
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    
    // 设置canonical URL
    canonicalTag.href = canonicalUrl;
    
    // 组件卸载时清理
    return () => {
      // 保留canonical标签但移除href，让浏览器使用默认值
      if (canonicalTag) {
        canonicalTag.href = '';
      }
    };
  }, [url]);
};

export default useCanonicalUrl;