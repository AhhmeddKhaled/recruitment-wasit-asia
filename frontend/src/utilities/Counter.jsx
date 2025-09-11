import React, { useEffect, useState } from "react";
import useInView from "../../frontend/src/hooks/useInView";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // 👇 نستعمل الهوك هنا
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      animateCount();
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    const totalFrames = Math.round(duration / 16); // ~60fps
    const increment = end / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default Counter;
