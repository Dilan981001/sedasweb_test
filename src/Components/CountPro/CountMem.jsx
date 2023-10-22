import React, { useState, useEffect, useRef } from 'react';

const AutoIncrementNumber = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      if (count === 500) {
        clearInterval(incrementInterval);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 5);

    return () => clearInterval(incrementInterval);
  }, [count]);

  return (
    <div>
     
      <p>{count}</p>
    </div>
  );
};

const AutoIncrementOnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {isVisible && <AutoIncrementNumber />}
    </div>
  );
};

export default AutoIncrementOnScroll;
