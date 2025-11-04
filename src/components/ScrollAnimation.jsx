import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  offset = 100,
  type = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
        threshold: 0.1
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, offset]);

  const getAnimationClasses = () => {
    // 使用更自然的缓动函数和合理的默认持续时间
    const baseClasses = `transition-all duration-${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    
    switch (type) {
      case 'fade-up':
        return {
          initial: 'opacity-0 translate-y-8 scale-95',
          visible: 'opacity-100 translate-y-0 scale-100',
          base: baseClasses
        };
      case 'fade-in':
        return {
          initial: 'opacity-0 scale-95',
          visible: 'opacity-100 scale-100',
          base: baseClasses
        };
      case 'slide-up':
        return {
          initial: 'translate-y-16 opacity-0 scale-95',
          visible: 'translate-y-0 opacity-100 scale-100',
          base: baseClasses
        };
      case 'slide-left':
        return {
          initial: 'translate-x-16 opacity-0 scale-95',
          visible: 'translate-x-0 opacity-100 scale-100',
          base: baseClasses
        };
      case 'slide-right':
        return {
          initial: '-translate-x-16 opacity-0 scale-95',
          visible: 'translate-x-0 opacity-100 scale-100',
          base: baseClasses
        };
      default:
        return {
          initial: 'opacity-0 translate-y-8 scale-95',
          visible: 'opacity-100 translate-y-0 scale-100',
          base: baseClasses
        };
    }
  };

  const animation = getAnimationClasses();

  return (
    <div
      ref={elementRef}
      className={cn(
        animation.base,
        isVisible ? animation.visible : animation.initial,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;