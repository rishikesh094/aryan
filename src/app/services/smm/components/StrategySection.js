"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

const features = [
  {
    title: "ENGAGEMENT",
    icon: "https://crezvatic.com/assets/images/smm_services/comment.svg",
  },
  {
    title: "CONTENT",
    icon: "https://crezvatic.com/assets/images/smm_services/spell-check.svg",
  },
  {
    title: "BRANDING",
    icon: "https://crezvatic.com/assets/images/smm_services/coffee.svg",
  },
  {
    title: "STRATEGY",
    icon: "https://crezvatic.com/assets/images/smm_services/rocket.svg",
  },
  {
    title: "INFLUENCER",
    icon: "https://crezvatic.com/assets/images/smm_services/diamond.svg",
  },
  {
    title: "AUTOMATION",
    icon: "https://crezvatic.com/assets/images/smm_services/phone-laptop.svg",
  },
];

export default function StrategySection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col gap-6">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <span className="bg-[#400000] text-white text-lg tracking-widest px-4 py-2 rounded-lg border-2 border-white w-fit">
              STRATEGY
            </span>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
              <span className="text-[#ee2c2f]">Grow your audience</span> faster
              than ever
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <p className="text-gray-300 leading-relaxed text-[15px] md:text-2xl">
              Social Media Marketing is the Mind, Body, and Soul of the Internet
              World. Social Media helps you reach customers not just about your
              product or services, it also allows your brand to connect with
              real-world current affairs and social media trends. It has become a
              norm for all brands to be active on social media as clients and
              customers also connect via chat and comments on posts. This leads
              to a loyal customer base.
            </p>
          </AnimatedElement>
        </div>

        {/* Right Side Features Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <AnimatedElement
              key={idx}
              animation="fadeInUp"
              delay={0.2 + idx * 0.1}
            >
              <div
                className="flex flex-col items-center text-center 
                           rounded-xl p-6"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="mb-4"
                />
                <h5 className="text-sm font-semibold">{feature.title}</h5>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <AnimatedElement animation="fadeInUp" delay={0.6}>
        <div
          id="ctc_button"
          className="mb-5 text-center pt-5"
        >
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:bg-[#620506] text-white font-medium rounded-3xl shadow-lg transition"
          >
            Let’s Connect
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
