"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

export default function WhyInvest() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Image */}
        <AnimatedElement animation="fadeInLeft" delay={0.1}>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://crezvatic.com/assets/images/smm_services/WHY_INVEST.webp"
              alt="Why Invest in SMM"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </AnimatedElement>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-6">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <span className="bg-[#400000] text-white text-lg tracking-widest px-4 py-2 rounded-lg border-2 border-white w-fit">
              BRANDING
            </span>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              WHY INVEST IN <span className="text-[#ee2c2f]">SMM</span>
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.4}>
            <p className="text-gray-300 leading-relaxed text-[15px] md:text-lg">
              Social Media Marketing is the most effective way to generate web
              traffic and sales revenue. In a world where consumers spend
              ever-increasing amounts of time connected in real-time across a
              variety of platforms, a smart, focused social media strategy has
              become an essential element for any business that plans to move
              forward in the digital age.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
