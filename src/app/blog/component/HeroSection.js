"use client";
import { AnimatedElement } from "@/components/common";

export default function HeroSection() {
  return (
    <div
      className="flex items-center justify-center h-[60vh] bg-black"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 50%, #000000 95%), radial-gradient(74.23% 305.77% at 39.72% 24.79%, #792646 0%, #1b3b6e 58.85%)",
      }}
    >
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <h1 className="text-6xl md:text-7xl uppercase font-[Michroma] font-bold text-white tracking-wide text-center animate-fadeIn">
          Blogs
        </h1>
      </AnimatedElement>
    </div>
  );
}
