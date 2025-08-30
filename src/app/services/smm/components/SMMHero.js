"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

export default function SMMHero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient Shape */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-[#4a0101] via-[#6d0000] to-black 
                      rounded-full blur-3xl opacity-80 translate-x-1/3 -translate-y-1/3 pointer-events-none"
      ></div>

      {/* Container */}
      <div className="relative z-10 container mx-auto flex flex-wrap-reverse items-center px-6">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Creative Social Media Marketing Agency In Mumbai
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <p className="text-lg lg:text-xl text-gray-300">
              Don&apos;t Settle For Less. We&apos;re The Next Generation Of Social
              Media Marketing Agency
            </p>
          </AnimatedElement>

          {/* CTA Button */}
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <div className="mt-4">
              <a
                href="#"
                className="inline-block px-8 py-4 rounded-full text-lg font-semibold 
                           text-white bg-gradient-to-r from-[#6d0000] to-[#a30000] shadow-lg 
                           relative overflow-hidden group"
              >
                <span className="relative z-10">Let&apos;s Connect</span>
                {/* Shine Effect */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                 translate-x-[-100%] group-hover:translate-x-[100%] 
                                 transition-transform duration-700 ease-in-out"
                ></span>
              </a>
            </div>
          </AnimatedElement>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <AnimatedElement animation="fadeInRight" delay={0.4}>
            <Image
              src="https://crezvatic.com/assets/images/smm_services/hero.svg"
              alt="Social Media Marketing"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
