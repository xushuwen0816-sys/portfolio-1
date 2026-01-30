import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  as?: React.ElementType;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  as: Component = 'h2',
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const ctx = gsap.context(() => {
      const charElements = el.querySelectorAll('.word');

      // 确保初始状态设置正确
      gsap.set(el, { rotation: baseRotation });
      gsap.set(charElements, {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      });

      gsap.to(
        el,
        {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      gsap.to(
        charElements,
        {
          opacity: 1,
          filter: enableBlur ? "blur(0px)" : "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, enableBlur, baseOpacity, baseRotation, blurStrength, rotationEnd, wordAnimationEnd]);

  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span className="word" key={index} style={{ display: 'inline-block', marginRight: '0.25em' }}>
        {word}
      </span>
    ));
  };

  return (
    <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <span className={textClassName}>
        {typeof children === "string" ? splitText(children) : children}
      </span>
    </Component>
  );
};

export default ScrollReveal;
