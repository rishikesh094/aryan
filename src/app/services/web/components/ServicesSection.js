"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

const services = [
  {
    title: "E-Commerce Development",
    highlight: ["E-Commerce"],
    icon: "https://crezvatic.com/assets/images/web_services/e-com.svg",
  },
  {
    title: "New Website Design Development",
    highlight: ["Website Design"],
    icon: "https://crezvatic.com/assets/images/web_services/web-design.svg",
  },
  {
    title: "Re-Design Of Existing Website",
    highlight: ["Re-Design"],
    icon: "https://crezvatic.com/assets/images/web_services/re-design.svg",
  },
  {
    title: "Content Management System For Your Website",
    highlight: ["Content Management"],
    icon: "https://crezvatic.com/assets/images/web_services/content-management.svg",
  },
  {
    title: "Maintenance Service",
    highlight: ["Maintenance"],
    icon: "https://crezvatic.com/assets/images/web_services/web-maintaince.svg",
  },
  {
    title: "App Development",
    highlight: ["App"],
    icon: "https://crezvatic.com/assets/images/web_services/app-development.svg",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black py-14 px-4 md:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-white">
        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Our <span className="text-white">Web Design</span> &amp;{" "}
            <span className="text-white">Development</span> Service
          </h2>
        </AnimatedElement>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={0.2 + index * 0.1}
            >
              <div className="border border-gray-700 rounded-lg p-6 bg-black text-white flex flex-col items-center justify-center gap-4 transition-all duration-300 transform hover:scale-105 hover:bg-[#2a0000] hover:border-white">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />

                <h5 className="text-center text-lg font-medium leading-snug">
                  {service.title.split(" ").map((word, i) =>
                    service.highlight.some((hl) => hl.includes(word)) ? (
                      <span key={i} className="text-red-500">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h5>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Button */}
        <AnimatedElement animation="fadeInUp" delay={0.3 + services.length * 0.1}>
          <div
            id="ctc_button"
            className="scrollTrigger ctc_button mb-5 text-center pt-5"
          >
            <a
              href="#"
              className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:bg-[#620506] text-white font-medium rounded-3xl shadow-lg transition"
            >
              Let’s Connect
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
