"use client";
import React from "react";

export default function SeoAbout() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Optimize Your Website With Us
        </h1>

        <div className="flex flex-col gap-16">
          {/* 1st Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="md:w-1/2">
              <img
                src="https://crezvatic.com/assets/images/seo_services/A-Comprehensive-SEO-Strategy.webp"
                alt="SEO Strategy"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
            {/* Right Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold">
                A Comprehensive SEO Strategy
              </h2>
              <p className="text-gray-300">
                The team of experts at Crezvatic will help you build your SEO campaign
                as per your business requirements. We specialize in giving you customized SEO campaigns
                through on-page & off-page SEO, content creation, link building as well as keyword research.
              </p>
            </div>
          </div>

          {/* 2nd Row (reverse) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Right Image */}
            <div className="md:w-1/2">
              <img
                src="https://crezvatic.com/assets/images/seo_services/Benefits-Of-SEO-for-Your-Business.webp"
                alt="SEO Benefits"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
            {/* Left Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold">
                How Can SEO Services Help Your
               Business?
              </h2>
              <p className="text-gray-300">
                Most website traffic comes from search engines. People usually click on
                the top results, and visiting your website gives you a high chance of
                converting them into customers.
              </p>
            </div>
          </div>

          {/* 3rd Row */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="md:w-1/2">
              <img
                src="https://crezvatic.com/assets/images/seo_services/How-Can-SEO-Services-Help-Your-Business.webp"
                alt="SEO Business"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
            {/* Right Text */}
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold">
                Benefits Of SEO For Your Business
              </h2>
              <p className="text-gray-300">
                Some of the reasons why business owners should seriously consider investing
                in professional SEO services:
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Increased Traffic",
                  "ROI (Return On Investment)",
                  "Cost-Effectiveness",
                  "Improved Site Usability",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-900 rounded-md hover:bg-blue-900/40 transition"
                  >
                    <img
                      src="https://crezvatic.com/assets/images/web_services/check-success.svg"
                      alt="check"
                      className="w-4"
                    />
                    <p className="text-gray-300 hover:cursor-pointer">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
