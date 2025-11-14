"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type DirectionType = "up" | "down" | "left" | "right";

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  direction?: DirectionType;
}

const ScrollAnimate = ({
  children,
  className = "",
  direction = "up",
}: ScrollAnimateProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);


// we cn st obseve here
       useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "translate-y-60",
    down: "-translate-y-60",
    left: "translate-x-60",
    right: "-translate-x-60",
  }[direction];

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${directionClass}`}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollAnimate;
