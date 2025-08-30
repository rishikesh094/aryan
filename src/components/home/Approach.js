"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

export default function Approach() {
  const steps = [
    {
      num: "1",
      title: "Know your Client",
      desc: "We send you a list of basic questionnaires to understand your business goals, needs, wants & Pain points. Here we also understand the client's vision & mission for the online marketing world.",
      icon: "https://crezvatic.com/assets/images/icons/5.webp",
    },
    {
      num: "2",
      title: "Know Your Competitor",
      desc: "In this step, we deep dive & understand your competitor's digital marketing strategy. We analyze their shortcomings and achievement to create opportunities for you.",
      icon: "https://crezvatic.com/assets/images/icons/24.webp",
    },
    {
      num: "3",
      title: "Know Your Audience",
      desc: "Here we do in-depth research on our client's target audience & understand their demographic details, interests, behavioral traits, and search pattern. We also understand their goals, pain points, and buying patterns across the internet.",
      icon: "https://crezvatic.com/assets/images/icons/6.webp",
    },
    {
      num: "4",
      title: "Rigorous Audit",
      desc: "In this step, we audit clients' digital marketing assets like websites, Social Media Handles, Advertisements Across Platforms, and other good and Bad things about Client's Online Presence.",
      icon: "https://crezvatic.com/assets/images/icons/7.webp",
    },
    {
      num: "5",
      title: "Strategize",
      desc: "We then create a data-driven strategy for your digital growth & provide you with a roadmap with realistic timelines.",
      icon: "https://crezvatic.com/assets/images/icons/8.webp",
    },
    {
      num: "6",
      title: "Develop A workflow",
      desc: "Here we will build a strategic workflow consisting of tasks our team members will be doing for your business like Media plan, Creative Deadlines, Website Development workflow, Reporting, etc.",
      icon: "https://crezvatic.com/assets/images/icons/9.webp",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-red-600">Approach</span>
          </h2>
        </AnimatedElement>
      </div>

      {/* 2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <AnimatedElement 
            key={step.num}
            animation="fadeInUp" 
            delay={0.2 + (index * 0.1)}
          >
            <div className="relative p-6">
              {/* Watermark big number */}
              <span className="absolute top-2 right-6 text-[120px] font-extrabold text-white/5 select-none">
                {step.num}
              </span>

              {/* Icon in box */}
              <div className="w-14 h-14 flex items-center justify-center bg-red-900 rounded-md mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
}
