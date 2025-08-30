"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

const features = [
  {
    label: "Domain Registration",
    icon: "https://crezvatic.com/assets/images/web_services/www.svg",
  },
  {
    label: "Website Hosting",
    icon: "https://crezvatic.com/assets/images/web_services/hosting.svg",
  },
  {
    label: "Responsive & Mobile-Friendly Experience",
    icon: "https://crezvatic.com/assets/images/web_services/responsive.svg",
  },
  {
    label: "CRM Development",
    icon: "https://crezvatic.com/assets/images/web_services/crm.svg",
  },
  {
    label: "Royalty Free Licensed Image",
    icon: "https://crezvatic.com/assets/images/web_services/royalty-image.svg",
  },
  {
    label: "Business Email Accounts",
    icon: "https://crezvatic.com/assets/images/web_services/business-email.svg",
  },
  {
    label: "Social Media Account Integration",
    icon: "https://crezvatic.com/assets/images/web_services/social-media.svg",
  },
  {
    label: "Content Management System",
    icon: "https://crezvatic.com/assets/images/web_services/content-management-1.svg",
  },
];

export default function WebServiceFeatures() {
  return (
    <section className="w-full bg-black text-white py-16 px-4 md:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            What will you get in our{" "}
            <span className="text-white">Website design</span> and{" "}
            <span className="text-white">development service</span>
          </h2>
        </AnimatedElement>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation="fadeInUp"
              delay={0.2 + index * 0.1}
            >
              <div className="border border-gray-700 rounded-lg p-6 bg-black text-white flex flex-col items-center justify-center gap-4 transition-all duration-300 transform hover:scale-105 hover:bg-[#2a0000] hover:border-white text-center">
                <Image
                  src={feature.icon}
                  alt={feature.label}
                  width={60}
                  height={60}
                />
                <span className="text-base font-medium">{feature.label}</span>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Button */}
        <AnimatedElement
          animation="fadeInUp"
          delay={0.3 + features.length * 0.1}
        >
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
