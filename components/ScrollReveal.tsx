import React, { useEffect, useRef, ReactNode, useMemo } from 'react';
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
  rotationEnd = "bottom center",
  wordAnimationEnd = "bottom center",
}) => {
  const containerRef = useRef<HTMLElement>(null);

  // Memoize processed children to prevent unnecessary re-renders
  const processedChildren = useMemo(() => {
    if (typeof children === "string") {
      // Check for Chinese characters
      const hasChinese = /[\u4e00-\u9fa5]/.test(children);
      
      if (hasChinese) {
        // Split by character for Chinese
        return children.split("").map((char, index) => (
           <span className="scroll-reveal-item" key={index} style={{ display: 'inline-block', transformOrigin: 'center' }}>
            {char}
          </span>
        ));
      } else {
        // Split by word for English/others
        return children.split(" ").map((word, index) => (
          <span className="scroll-reveal-item" key={index} style={{ display: 'inline-block', marginRight: '0.25em', transformOrigin: 'center' }}>
            {word}
          </span>
        ));
      }
    }
    return children;
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const ctx = gsap.context(() => {
      // Select all split items
      const targets = el.querySelectorAll('.scroll-reveal-item');
      
      // Use fromTo for more robust initial state handling
      // Animation for the container (rotation)
      gsap.fromTo(
        el,
        { rotation: baseRotation },
        {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: 1, // Add a little smoothing
          },
        }
      );

      // Animation for the characters/words
      if (targets.length > 0) {
        gsap.fromTo(
          targets,
          {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            y: 20, // Increased y-offset for better visibility
          },
          {
            opacity: 1,
            filter: enableBlur ? "blur(0px)" : "none",
            y: 0,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top 85%", // Trigger earlier (when top of element hits 85% of viewport height)
              end: wordAnimationEnd,
              scrub: 1, // Add smoothing
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [
    scrollContainerRef, 
    enableBlur, 
    baseOpacity, 
    baseRotation, 
    blurStrength, 
    rotationEnd, 
    wordAnimationEnd, 
    processedChildren // Add processedChildren to dependency array to ensure animation re-runs on content change
  ]);

  return (
    <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <span className={textClassName}>
        {processedChildren}
      </span>
    </Component>
  );
};

export default ScrollReveal;
