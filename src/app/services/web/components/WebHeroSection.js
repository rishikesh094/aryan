"use client";
import React from "react";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

const SeoHero = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center px-4 md:px-6 lg:px-20 pt-[80px]">
      {/* Centered Gradient Box */}
      <div className="relative w-full max-w-7xl rounded-2xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-4 md:px-16 overflow-hidden">

        {/* Optional Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://crezvatic.com/assets/images/web_services/1.webp"
            alt="left arrow"
            width={400}
            height={400}
            className="absolute left-0 top-1/4 opacity-10"
          />
          <Image
            src="https://crezvatic.com/assets/images/web_services/2.webp"
            alt="right arrow"
            width={400}
            height={400}
            className="absolute right-0 bottom-1/4 opacity-10"
          />
        </div>

        {/* Header Bar */}
        <div className="relative z-10 flex items-center justify-between mb-10">
          <div className="dots flex gap-2 pb-10">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <div className="w-3 h-3 rounded-full bg-red-500" />
          </div>
          <div className="text-sm font-semibold">Google</div>
          <div className="text-gray-400">
            <i className="fa-solid fa-up-right-and-down-left-from-center" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center flex flex-col items-center gap-6">
          {/* Google-style Branding */}
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#4285f4]">Yo</span>
              <span className="text-[#ea4335]">ur</span>
              <span className="text-white"> </span>
              <span className="text-[#fbbc05]">Co</span>
              <span className="text-[#34a853]">mp</span>
              <span className="text-[#ea4335]">any</span>
            </h1>
          </AnimatedElement>

          {/* Search Bar */}
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="search_bar shadow-lg  rounded-full px-4 py-2 flex items-center justify-between w-full md:w-full bg-[#1a1a1a]">
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  fill="#5f6368"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 
                    16 11.11 16 9.5 16 5.91 13.09 3 9.5 
                    3S3 5.91 3 9.5 5.91 16 9.5 
                    16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 
                    4.99L20.49 19l-4.99-5zm-6 
                    0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
                <span className="font-medium text-gray-400">
                  Best SEO Company in Noida
                </span>
              </div>
              <div>
                <img
                  width={20}
                  src="https://i.imgur.com/IxH0oFY.webp"
                  alt="voice"
                  className="ml-2"
                />
              </div>
            </div>
          </AnimatedElement>

          {/* Subtitle */}
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">
              We're here to make your brand visible and drive more sales with every click
            </p>
          </AnimatedElement>

          {/* CTA */}
          <AnimatedElement animation="bounceIn" delay={0.4}>
            <a
              href="javascript:void(0)"
              data-cal-link="crezvatic-pvt-ltd-gb6gis/30min"
              className="inline-block text-sm md:text-base font-semibold text-black bg-yellow-500 py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-200"
            >
              Rank Your Website on Google
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
