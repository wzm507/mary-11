import { useEffect, useRef, createContext, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 创建导航上下文
const NavigationContext = createContext();

/**
 * 自定义Hook，提供带动画的导航功能
 */
export const useAnimatedNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useAnimatedNavigation must be used within a RouteTransitionProvider');
  }
  return context;
};

/**
 * 路由过渡动画组件
 * 提供页面跳转时的平滑过渡效果
 */
const RouteTransition = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // 监听路由变化，添加过渡效果
  useEffect(() => {
    // 清除之前的定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 简化动画实现，避免重排导致的卡顿
    if (containerRef.current) {
      // 移除所有过渡类
      containerRef.current.classList.remove('page-transition-enter', 'page-transition-exit');
      
      // 直接设置透明度为0，然后在下一帧触发动画
      requestAnimationFrame(() => {
        if (containerRef.current) {
          // 立即添加进入动画类，避免重排卡顿
          containerRef.current.classList.add('page-transition-enter');
          
          // 动画完成后移除类
          timeoutRef.current = setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.classList.remove('page-transition-enter');
            }
          }, 1200);
        }
      });
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.key]);

  // 自定义导航函数，添加退出动画
  const animatedNavigate = (to, options) => {
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    
    if (containerRef.current) {
      // 添加退出动画类
      containerRef.current.classList.add('page-transition-exit');
      
      // 动画完成后执行实际导航
      setTimeout(() => {
        navigate(to, options);
        isAnimatingRef.current = false;
      }, 1200);
    } else {
      navigate(to, options);
      isAnimatingRef.current = false;
    }
  };

  const navigationValue = {
    navigate: animatedNavigate,
    originalNavigate: navigate
  };

  return (
    <NavigationContext.Provider value={navigationValue}>
      <div 
        ref={containerRef}
        className="page-transition-container"
        style={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative'
        }}
      >
        {children}
      </div>
    </NavigationContext.Provider>
  );
};

export default RouteTransition;