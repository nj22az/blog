import { useEffect, useRef, useState } from 'react';

export interface PremiumAnimationOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
}

export interface GlassEffectOptions {
  blur?: number;
  opacity?: number;
  border?: boolean;
  shadow?: boolean;
}

export const usePremiumAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const fadeIn = (options: PremiumAnimationOptions = {}) => ({
    ref,
    className: `transition-all duration-${options.duration || 500} ease-${options.easing || 'out'} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`,
    style: {
      transitionDelay: `${options.delay || 0}ms`,
    },
  });

  const scaleIn = (options: PremiumAnimationOptions = {}) => ({
    ref,
    className: `transition-all duration-${options.duration || 300} ease-${options.easing || 'out'} ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`,
    style: {
      transitionDelay: `${options.delay || 0}ms`,
    },
  });

  const slideUp = (options: PremiumAnimationOptions = {}) => ({
    ref,
    className: `transition-all duration-${options.duration || 600} ease-${options.easing || 'out'} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`,
    style: {
      transitionDelay: `${options.delay || 0}ms`,
    },
  });

  const glassEffect = (options: GlassEffectOptions = {}) => ({
    className: `backdrop-blur-${options.blur || 'md'} bg-glass-${options.opacity || 300} ${
      options.border ? 'border border-glass-border' : ''
    } ${options.shadow ? 'shadow-glass' : ''}`,
  });

  const interactiveScale = () => ({
    className: `transition-transform duration-200 ease-out hover:scale-105 active:scale-95 ${
      isHovered ? 'scale-105' : 'scale-100'
    }`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  });

  const interactiveGlow = () => ({
    className: `transition-all duration-300 ${
      isHovered ? 'shadow-glow' : 'shadow-none'
    }`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  });

  const shimmerEffect = () => ({
    className: 'relative overflow-hidden before:absolute before:inset-0 before:bg-shimmer before:animate-shimmer before:opacity-0 hover:before:opacity-100 before:transition-opacity',
  });

  return {
    fadeIn,
    scaleIn,
    slideUp,
    glassEffect,
    interactiveScale,
    interactiveGlow,
    shimmerEffect,
    isVisible,
    isHovered,
  };
};

export const useStaggeredAnimation = (items: unknown[], delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => new Set(prev).add(index));
            }, index * delay);
          });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [items, delay]);

  return {
    ref,
    getItemProps: (index: number) => ({
      className: `transition-all duration-500 ease-out ${
        visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`,
    }),
  };
};

export const useScrollTrigger = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isInView };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
};

export default usePremiumAnimations;