import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current
      ? scrollContainerRef.current
      : window;

    const ctx = gsap.context(() => {
      const charElements = el.querySelectorAll('.char');

      gsap.fromTo(
        charElements,
        {
          willChange: "transform, opacity",
          transformOrigin: "50% 50%",
          yPercent: 100,
          scaleY: 0.5,
          opacity: 0,
          rotationX: 90,
        },
        {
          ease: ease,
          yPercent: 0,
          scaleY: 1,
          opacity: 1,
          rotationX: 0,
          stagger: stagger,
          duration: animationDuration,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, children]);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span className="char" key={index} style={{ display: 'inline-block' }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={textClassName}>
        {typeof children === "string" ? splitText(children) : children}
      </span>
    </h2>
  );
};

export default ScrollFloat;
