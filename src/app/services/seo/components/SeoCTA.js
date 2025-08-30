"use client";
import React from "react";
import { AnimatedElement } from "@/components/common";

export default function SeoCTA() {
  return (
    <section className="bg-black text-center py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-white">So, What Are You Waiting For?</span>
          </h1>
        </AnimatedElement>

        {/* Subheading */}
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <h4 className="text-lg md:text-xl text-gray-300">
            GET IN TOUCH WITH THE LEADING{" "}
            <a
              href="https://crezvatic.com/digital-markting-consultant-near-me"
              className="text-red-500 hover:text-red-400 transition underline-offset-4 hover:underline"
            >
              SEO AGENCY
            </a>{" "}
            IN MUMBAI
          </h4>
        </AnimatedElement>
      </div>

      {/* CTA Button */}
      <AnimatedElement animation="fadeInUp" delay={0.3}>
        <div
          id="ctc_button"
          className="scrollTrigger ctc_button mb-5 text-center pt-5"
        >
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:cursor-pointer text-white font-medium rounded-3xl shadow-lg transition"
          >
            Let’s Connect
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
