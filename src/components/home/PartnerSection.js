"use client";
import React from "react";

const data = [
  {
    number: "1000+",
    text: "High Ticket B2B Leads generated for",
    link: "https://www.labindia-analytical.com/",
    brand: "Labindia Analytical",
  },
  {
    number: "4X",
    text: "More reservations confirmed for",
    link: "https://shrikanchanhotels.com/",
    brand: "Shrikanchan Hotels and resorts",
  },
  {
    number: "6000+",
    text: "New Customers acquired for",
    link: "https://wayam.in/",
    brand: "wayam magazine",
  },
  {
    number: "7X",
    text: "More bookings for",
    link: "https://tentotreat.com/",
    brand: "Tentotreat",
  },
  {
    number: "3X",
    text: "More Brand Visibility in E-commerce space for",
    link: "https://myrooots.com/",
    brand: "Myrooots",
  },
  {
    number: "5X",
    text: "More Social Media Engagement For",
    link: "https://www.lechler.com/in-en",
    brand: "Lechler India",
  },
];

const GrowthPartnerSection = () => {
  return (
    <section className="bg-black py-16">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Why Choose <span className="text-red-600">Crezvatic</span> as your
          Digital Growth Partner
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#111111] rounded-lg p-8 text-center hover:bg-[#4e0405] transition-all duration-300"
          >
            <h3 className="text-3xl font-bold text-white mb-3">
              {item.number}
            </h3>
            <p className="text-gray-300 text-base">
              {item.text}{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-medium"
              >
                {item.brand}
              </a>
            </p>
          </div>
        ))}
      </div>
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
    </section>
  );
};

export default GrowthPartnerSection;
