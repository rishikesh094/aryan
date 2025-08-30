"use client";
import { AnimatedElement } from "@/components/common";

const ContactHeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#b51717f0] via-[#4b1b9ecd] to-[#000000]">
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest text-center">
          CONTACT US
        </h1>
      </AnimatedElement>
    </section>
  );
};

export default ContactHeroSection;