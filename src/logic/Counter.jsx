import React, { useEffect, useRef, useState } from "react";
import { BsThreads } from "react-icons/bs";

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated,setHasAnimated] = useState(null);
  const counterRef = useRef(null);


  useEffect(() => {

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if(entry.isIntersecting && !hasAnimated) {
                animationCount();
                setHasAnimated(true);
            }
        },
        { threshold: 0.5}
    );

    if(counterRef.current) {
        observer.observe(counterRef.current)
    }

    return () => {
        if(counterRef.current) observer.observe(counterRef.current)
    }

}, [target, duration,hasAnimated]);
    const animationCount = () => {

        let start = 0;
        const end = parseInt(target);
        if (start === end) return;
        
        // عدد الـ Frames في الثانية
        let totalFrames = Math.round(duration / 16); // 60fps تقريبًا
        let increment = end / totalFrames;
        
        let counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
    }

  return <span ref={counterRef} >{count.toLocaleString()}</span>;
};

export default Counter;
