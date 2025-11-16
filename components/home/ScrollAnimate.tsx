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
    up: "lg:translate-y-28 translate-y-10",
    down: "-lg:translate-y-28 translate-y-10",
    left: "lg:translate-x-28 translate-x-10 lg:translate-y-28 translate-y-20",
    right: "-lg:translate-x-28 -translate-x-10 lg:translate-y-28 translate-y-20",
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
