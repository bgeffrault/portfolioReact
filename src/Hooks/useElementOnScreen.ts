import { useRef, useState, useEffect } from "react";

export const useElementOnScreen = (
  options?: IntersectionObserverInit,
  // In ms
  delay: number = 250
) => {
  const containerRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callbackFunction: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (delay && entry.isIntersecting) {
        setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, delay);
      } else {
        setIsVisible(entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, delay, options]);

  return [containerRef, isVisible];
};
