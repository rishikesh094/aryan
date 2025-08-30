"use client";
import React from "react";
import { AnimatedElement } from "@/components/common";

const steps = [
  {
    title: "Website Analysis",
    img: "https://crezvatic.com/assets/images/seo_services/web_analysis.svg",
    desc: "We conduct a thorough analysis of your website to identify any technical issues or areas for improvement. This includes analyzing load time, mobile responsiveness, URL structure, web design, and more.",
  },
  {
    title: "Strategy Planning",
    img: "https://crezvatic.com/assets/images/seo_services/strategy-planing.svg",
    desc: "After analysis, we create a customized SEO strategy based on your business goals, target audience, and competition.",
  },
  {
    title: "Competitor Analysis",
    img: "https://crezvatic.com/assets/images/seo_services/competitor_analysis.svg",
    desc: "We research competitors to understand strengths and weaknesses, analyzing content and backlinks for opportunities.",
  },
  {
    title: "Keyword Research",
    img: "https://crezvatic.com/assets/images/seo_services/keyword_research.svg",
    desc: "We identify the best keywords to target for SEO success, ensuring maximum visibility and ranking.",
  },
  {
    title: "On-Page & Off-Page Optimization",
    img: "https://crezvatic.com/assets/images/seo_services/onpage_optimize.svg",
    desc: "We optimize your content and structure while building high-quality backlinks for authority & relevance.",
  },
  {
    title: "Content Optimization",
    img: "https://crezvatic.com/assets/images/seo_services/content-optimize.svg",
    desc: "We create SEO-friendly blogs, infographics, and videos to boost ranking and engage users.",
  },
  {
    title: "Website Submissions",
    img: "https://crezvatic.com/assets/images/seo_services/website_submission.svg",
    desc: "We submit your website to directories and search engines to increase visibility.",
  },
  {
    title: "Reporting",
    img: "https://crezvatic.com/assets/images/seo_services/report.svg",
    desc: "We track progress with analytics, monitor rankings, and provide SEO reports.",
  },
];

export default function SeoProcess() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our SEO Process To Grow Your Online Presence
          </h1>
        </AnimatedElement>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={0.15 * (index + 1)} // staggered delay
            >
              <div className="bg-[#111] border border-gray-700 rounded-lg p-6 transition transform hover:scale-105 hover:bg-blue-900/30">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* CTA */}
        <AnimatedElement animation="fadeInUp" delay={0.2 * steps.length}>
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
