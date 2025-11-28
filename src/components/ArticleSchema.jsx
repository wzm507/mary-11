import { useEffect } from 'react';

/**
 * 文章页面的结构化数据组件
 * 用于提供Google等搜索引擎可识别的文章信息
 */
const ArticleSchema = ({ article }) => {
  useEffect(() => {
    if (!article) return;

    // 创建结构化数据脚本元素
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    // 构建文章结构化数据
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title || "Article Title",
      "description": article.description || "Article description",
      "author": article.author || { "@type": "Person", "name": "Mary Lee" },
      "datePublished": article.datePublished || new Date().toISOString(),
      "dateModified": article.dateModified || new Date().toISOString(),
      "url": article.url || window.location.href,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // 组件卸载时移除脚本
    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  // 此组件不渲染任何内容，仅添加结构化数据到页面头部
  return null;
};

export default ArticleSchema;