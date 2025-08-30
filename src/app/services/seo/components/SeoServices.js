"use client";
import React from "react";
import { AnimatedElement } from "@/components/common";

const services = [
  { id: "01", title: "E-Commerce SEO" },
  { id: "02", title: "Local SEO" },
  { id: "03", title: "B2B SEO" },
  { id: "04", title: "International SEO" },
  { id: "05", title: "Technical SEO" },
  { id: "06", title: "App SEO" },
];

export default function SeoServices() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Generate Traffic, Leads & Revenue Through SEO Services
          </h2>
        </AnimatedElement>

        {/* Services in Zig-Zag */}
        <div className="flex flex-col items-center space-y-8">
          {services.map((service, index) => (
            
              <div
                className={`w-full md:w-2/3 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`flex items-center justify-between px-6 py-6 w-[80%] md:w-[60%]
                              bg-gradient-to-r from-indigo-500 to-blue-500
                              rounded-md text-white font-semibold text-lg shadow-lg
                              clip-hexagon `}
                >
                  {index % 2 === 0 ? (
                    <>
                      <span>{service.title}</span>
                      <span className="text-2xl font-bold">{service.id}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl font-bold">{service.id}</span>
                      <span>{service.title}</span>
                    </>
                  )}
                </div>
              </div>
           
          ))}
        </div>
      </div>

      {/* Hexagon Shape */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(
            10% 0%,
            90% 0%,
            100% 50%,
            90% 100%,
            10% 100%,
            0% 50%
          );
        }
      `}</style>

      {/* CTA */}
      <AnimatedElement animation="fadeInUp" delay={0.2 * services.length}>
        <div
          id="ctc_button"
          className="scrollTrigger ctc_button mb-5 text-center pt-5"
        >
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:bg-teal-600 text-white font-medium rounded-3xl shadow-lg transition"
          >
            Let’s Connect
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
