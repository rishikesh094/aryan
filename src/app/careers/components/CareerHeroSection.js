"use client";
import { AnimatedElement } from "@/components/common";

export default function CareerHeroSection() {
  return (
    <section
      className="relative text-white pt-20 pb-0 px-0" // 👈 added pt-20 so it sits below fixed navbar
      style={{
        background:
          "linear-gradient(180deg, rgba(78, 4, 47, 1) 0%, rgba(1, 1, 1, 1) 70%)",
      }}
    >
      {/* Top Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <p className="text-center text-sm md:text-base tracking-widest uppercase font-semibold py-4">
          <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-red-600">
            CAREER AT CREZVATIC
          </span>
        </p>
      </AnimatedElement>

      {/* Hero Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.2}>
        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold py-2">
          Dare To Dream Bigger ? <br className="hidden md:block" /> Welcome Aboard!
        </h2>
      </AnimatedElement>

      {/* CTA Button */}
      <AnimatedElement animation="bounceIn" delay={0.3}>
        <div className="flex justify-center py-4">
          <a
            href="#all_roles"
            className="mt-3 px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-red-600 to-red-800 shadow-lg hover:scale-105 transition-transform"
          >
            See open roles
          </a>
        </div>
      </AnimatedElement>

      {/* Skyline Image */}
      <AnimatedElement animation="fadeInUp" delay={0.4}>
        <div className="relative w-full mt-6">
          {/* Desktop Image */}
          <img
            src="https://crezvatic.com/assets/images/career/mumbaiskyline [Converted]- 1.png"
            alt="Mumbai Skyline"
            className="hidden md:block w-full"
          />
          {/* Mobile Image */}
          <img
            src="https://crezvatic.com/assets/images/career/mumbaiskyline [Converted]- mb.png"
            alt="Mumbai Skyline Mobile"
            className="block md:hidden w-full"
          />
        </div>
      </AnimatedElement>
    </section>
  );
}
