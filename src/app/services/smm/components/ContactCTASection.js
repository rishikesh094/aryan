"use client";
import { AnimatedElement } from "@/components/common";

export default function ContactCTASection() {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col items-center justify-center">
      {/* Content */}
      <div className="text-center max-w-3xl">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s boost your{" "}
            <span className="text-red-500">Video Marketing</span> presence!
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <h3 className="text-lg md:text-2xl text-gray-300">
            Reach to the fingertips of your target audience with social media
            marketing
          </h3>
        </AnimatedElement>
      </div>

      {/* CTA Button */}
      <AnimatedElement animation="zoomIn" delay={0.3}>
        <div className="mt-10">
          <a
            href="#"
            className="glow-on-hover relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Let&apos;s Connect
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
