import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type AnimatedType =
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInRight"
  | "scaleIn"
  | "slideIn"
  | "bounceIn";

interface Props {
  children: React.ReactNode;
  className?: string;
  animationType?: AnimatedType;
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<Props> = ({
  children,
  className = "",
  animationType = "fadeInUp",
  delay = 0,
  duration = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const init: Record<AnimatedType, gsap.TweenVars> = {
      fadeInUp: { y: 60, opacity: 0 },
      fadeInLeft: { x: -60, opacity: 0 },
      fadeInRight: { x: 60, opacity: 0 },
      scaleIn: { scale: 0.9, opacity: 0 },
      slideIn: { y: 40, opacity: 0 },
      bounceIn: { scale: 0.9, opacity: 0, rotation: -6 },
    };
    const fin: Record<AnimatedType, gsap.TweenVars> = {
      fadeInUp: { y: 0, opacity: 1 },
      fadeInLeft: { x: 0, opacity: 1 },
      fadeInRight: { x: 0, opacity: 1 },
      scaleIn: { scale: 1, opacity: 1 },
      slideIn: { y: 0, opacity: 1 },
      bounceIn: { scale: 1, opacity: 1, rotation: 0 },
    };
    gsap.set(el, init[animationType]);
    const tween = gsap.to(el, {
      ...fin[animationType],
      duration,
      delay,
      ease: animationType === "bounceIn" ? "back.out(1.7)" : "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    return () => tween.kill();
  }, [animationType, delay, duration]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
