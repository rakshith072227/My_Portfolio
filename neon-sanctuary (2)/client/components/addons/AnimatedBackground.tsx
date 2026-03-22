import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    const makeParticle = () => {
      const p = document.createElement("div");
      p.className =
        "absolute w-1 h-1 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-60";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      container.appendChild(p);
      particles.push(p);
      const dur = 3 + Math.random() * 4;
      const delay = Math.random() * 2;
      gsap.set(p, { scale: 0, opacity: 0 });
      gsap.to(p, {
        scale: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
        duration: dur,
        delay,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(p, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        duration: dur * 2,
        delay,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    };

    for (let i = 0; i < 40; i++) makeParticle();

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        opacity: 0.06,
      }}
    />
  );
};

export default AnimatedBackground;
