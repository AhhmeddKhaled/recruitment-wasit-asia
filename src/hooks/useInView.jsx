// useInView.js
import { useEffect, useRef } from "react";

export default function useInView({ activeClass, threshold = 0.3, onEnter }) {
  const refs = useRef([]);

  const setRefs = (el, index) => {
    if (el) refs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (activeClass) entry.target.classList.add(activeClass);
            if (onEnter) onEnter(entry.target);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => {
      refs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [activeClass, threshold, onEnter]);

  return { setRefs };
}
