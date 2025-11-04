import React, { useEffect, useRef, useState } from 'react';

export default function FadeInSection(props) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      style={{ 
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        ...(isVisible && {
          opacity: 1,
          transform: 'translateY(0)'
        })
      }}
    >
      {props.children}
    </div>
  );
}