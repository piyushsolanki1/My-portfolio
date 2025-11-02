import React, { useEffect, useRef, useState } from "react";

const RevealSection = ({ children, direction = "up", delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    left: "-translate-x-16",
    right: "translate-x-16",
    up: "translate-y-16",
    down: "-translate-y-16",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out opacity-0 ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : directionClass
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealSection;
