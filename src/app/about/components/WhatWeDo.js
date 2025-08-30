"use client";

import Image from "next/image";
import { AnimatedElement } from "@/components/common";

export default function WhatWeDo() {
  return (
    <section className="bg-black py-16 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <p className="text-gray-400 font-semibold uppercase tracking-widest text-xl">
              WHAT WE DO
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              <span className="text-red-500">Fresh Ideas</span> for Every Business
            </h2>
          </AnimatedElement>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <div className="p-6 flex flex-col items-start gap-4">
              <Image
                src="https://crezvatic.com/assets/images/about/icons/setting.svg"
                alt="Creative Approach"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-bold text-white">Creative Approach</h3>
              <p className="text-gray-300">
                We Develop Your Business Growth Marketing Plans With A Belief To
                Capture The Internet Marketing Platforms Required For Your
                Business
              </p>
            </div>
          </AnimatedElement>

          {/* Card 2 */}
          <AnimatedElement animation="fadeInUp" delay={0.4}>
            <div className="p-6 flex flex-col items-start gap-4">
              <Image
                src="https://crezvatic.com/assets/images/about/icons/success.svg"
                alt="Guaranteed Success"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-bold text-white">Guaranteed Success</h3>
              <p className="text-gray-300">
                The AIM is to show you predictive analysis and growth marketing
                strategies as per the data provided by all digital platforms
              </p>
            </div>
          </AnimatedElement>

          {/* Card 3 */}
          <AnimatedElement animation="fadeInUp" delay={0.5}>
            <div className="p-6 flex flex-col items-start gap-4">
              <Image
                src="https://crezvatic.com/assets/images/about/icons/box.svg"
                alt="Digital Optimization"
                width={60}
                height={60}
              />
              <h3 className="text-xl font-bold text-white">Digital Optimization</h3>
              <p className="text-gray-300">
                Be it your business website, social media, Google My Business,
                YouTube channel, emails or IOT, with research &amp; development we
                ensure quality outcome
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
