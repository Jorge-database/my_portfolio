import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // Se já intersectou e triggerOnce é true, não observar more
    if (hasIntersected && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsIntersecting(isVisible);
        
        if (isVisible && !hasIntersected) {
          setHasIntersected(true);
          
          // Adicionar classe para animação
          if (target.classList.contains('animate-on-scroll')) {
            target.classList.add('visible');
          }
          
          // Se triggerOnce é true, parar de observar
          if (triggerOnce) {
            observer.unobserve(target);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected]);

  return {
    targetRef,
    isIntersecting,
    hasIntersected,
  };
}

// Hook especializado para animações suaves
export function useScrollAnimation(delay = 0) {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (hasIntersected && delay > 0) {
      const timer = setTimeout(() => {
        if (targetRef.current) {
          targetRef.current.classList.add('visible');
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [hasIntersected, delay, targetRef]);

  return { 
    targetRef: targetRef as React.RefObject<HTMLDivElement>, 
    isVisible: hasIntersected 
  };
}

// Hook para preload de imagens
export function useImagePreload(imageSources: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadPromises = imageSources.map(src => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
          resolve(src);
        };
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.allSettled(preloadPromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, [imageSources]);

  return {
    loadedImages,
    allImagesLoaded,
    isImageLoaded: (src: string) => loadedImages.has(src),
  };
}