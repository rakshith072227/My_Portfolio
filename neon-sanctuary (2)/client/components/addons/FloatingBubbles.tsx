import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Bubble {
  element: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  duration: number;
}

const FloatingBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const bubbles: Bubble[] = [];

    const createObject = () => {
      const objectType = Math.floor(Math.random() * 5); // 5 different object types
      const size = 10 + Math.random() * 25; // Size between 10-35px
      const obj = document.createElement("div");

      obj.className = "absolute pointer-events-none";
      obj.style.width = `${size}px`;
      obj.style.height = `${size}px`;

      // Random gradient colors
      const gradients = [
        "from-violet-500/20 to-fuchsia-500/20",
        "from-fuchsia-500/15 to-pink-500/15",
        "from-purple-500/20 to-violet-500/20",
        "from-indigo-500/15 to-fuchsia-500/15",
        "from-blue-500/10 to-violet-500/10",
      ];

      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

      // Create different object types
      switch(objectType) {
        case 0: // Bubble
          obj.className += " rounded-full";
          obj.className += ` bg-gradient-to-br ${randomGradient} border border-violet-300/30 backdrop-blur-sm`;
          break;
        case 1: // Square/Diamond
          obj.style.transform = "translate(-50%, -50%) rotate(45deg)";
          obj.className += ` bg-gradient-to-br ${randomGradient} border border-violet-300/30 backdrop-blur-sm`;
          break;
        case 2: // Star
          obj.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-full h-full text-violet-400/40"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
          obj.style.transform = "translate(-50%, -50%)";
          break;
        case 3: // Circle with dots
          obj.className += " rounded-full";
          obj.className += ` bg-gradient-to-br ${randomGradient} border border-violet-300/30 backdrop-blur-sm`;
          obj.innerHTML = `<div class="absolute inset-1 rounded-full border border-violet-200/40"></div>`;
          break;
        case 4: // Triangle
          obj.style.width = "0";
          obj.style.height = "0";
          obj.style.borderLeft = `${size/2}px solid transparent`;
          obj.style.borderRight = `${size/2}px solid transparent`;
          obj.style.borderBottom = `${size}px solid rgba(168, 85, 247, 0.2)`;
          obj.style.transform = "translate(-50%, -50%)";
          break;
      }

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      obj.style.left = `${x}px`;
      obj.style.top = `${y}px`;
      if(objectType !== 4) obj.style.transform = "translate(-50%, -50%)";

      container.appendChild(obj);

      const vx = (Math.random() - 0.5) * 1.5;
      const vy = (Math.random() - 0.5) * 1.5;
      const duration = 15 + Math.random() * 25;

      const objData: Bubble = {
        element: obj,
        x,
        y,
        vx,
        vy,
        size,
        duration,
      };

      bubbles.push(objData);

      // Animate using GSAP
      gsap.to(obj, {
        duration: duration,
        x: vx * 800,
        y: vy * 800,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });

      // Floating up and down effect
      gsap.to(obj, {
        duration: 3 + Math.random() * 4,
        y: -50,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Opacity pulse
      gsap.to(obj, {
        duration: 4 + Math.random() * 3,
        opacity: [0.1, 0.4, 0.1],
        ease: "sine.inOut",
        repeat: -1,
      });

      // Rotation for some objects
      if(objectType === 1 || objectType === 4) {
        gsap.to(obj, {
          duration: 8 + Math.random() * 6,
          rotation: 360,
          ease: "none",
          repeat: -1,
        });
      }
    };

    // Create animated objects
    const objectCount = 12;
    for (let i = 0; i < objectCount; i++) {
      setTimeout(() => createObject(), i * 150);
    }

    bubblesRef.current = bubbles;

    return () => {
      bubbles.forEach((bubble) => {
        bubble.element.remove();
        gsap.killTweensOf(bubble.element);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background: "transparent",
      }}
    />
  );
};

export default FloatingBubbles;
