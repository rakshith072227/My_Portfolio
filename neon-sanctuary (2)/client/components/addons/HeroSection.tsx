import AnimatedBackground from "./AnimatedBackground";
import { PropsWithChildren } from "react";

export default function HeroSection({ children }: PropsWithChildren) {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      {children}
    </section>
  );
}
