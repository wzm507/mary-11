import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items.jsx";
import { LanguageProvider } from "./contexts/LanguageContext";
import RouteTransition from "./components/RouteTransition";
import "./i18n";
import { Suspense, useState, useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // 只在客户端环境下设置canonical URL
    if (typeof window !== 'undefined') {
      // 设置规范URL，帮助搜索引擎识别页面的规范版本
      const canonicalUrl = window.location.href;
      
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
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <LanguageProvider>
          <Suspense fallback="loading">
            <HashRouter>
              <Routes>
                {navItems.map(({ to, page }) => (
                  <Route 
                    key={to} 
                    path={to} 
                    element={
                      <RouteTransition>
                        {page}
                      </RouteTransition>
                    } 
                  />
                ))}
              </Routes>
            </HashRouter>
          </Suspense>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
