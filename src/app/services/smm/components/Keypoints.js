"use client";
import Image from "next/image";
import { AnimatedElement } from "@/components/common";

const keypoints = [
  {
    title: "Profile Optimization",
    img: "https://crezvatic.com/assets/images/smm_services/Profile Optimization.webp",
    desc: `Our social media team optimizes your social media profiles to ensure they accurately represent your brand and attract the right audience. This involves updating your profile picture, bio, and cover photo, as well as ensuring that your profiles are consistent across all platforms.`,
    link: "https://crezvatic.com/blogdetails/benefits-of-social-media-marketing-for-business",
  },
  {
    title: "Engaging Visuals & Content Creation",
    img: "https://crezvatic.com/assets/images/smm_services/Engaging_Visuals_Content.webp",
    desc: `Our team thoughtfully creates engaging visuals and content that is critical for building a strong social media presence. This involves creating eye-catching graphics, photos, videos, and other types of content optimized for each platform.`,
    link: "https://crezvatic.com/blogdetails/social-media-design",
  },
  {
    title: "Audience Interaction",
    img: "https://crezvatic.com/assets/images/smm_services/Audience_Interaction.webp",
    desc: `Engaging with your audience is a key part of building a strong social media presence. Responding to comments and messages, hosting Q&A sessions, or creating campaigns that encourage interaction.`,
  },
  {
    title: "Insight & Reporting",
    img: "https://crezvatic.com/assets/images/smm_services/Insight_Reporting.webp",
    desc: `Measuring the success of your social media efforts is essential for improving strategy and maximizing ROI. Tools like Google Analytics or native insights help track engagement, reach, and conversions to make data-driven decisions.`,
    link: "https://crezvatic.com/digital-markting-consultant-near-me",
  },
];

export default function Keypoints() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#ee2c2f]">Optimize</span> Your Social Media
          </h1>
        </div>
      </AnimatedElement>

      {/* Cards Grid */}
      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {keypoints.map((item, idx) => (
          <AnimatedElement key={idx} animation="fadeInUp" delay={0.2 + idx * 0.1}>
            <div
              className="flex flex-col items-center text-center px-6 py-8 rounded-2xl
                         bg-white/5 border border-white/10 shadow-md 
                         hover:shadow-2xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={220}
                height={180}
                className="object-contain mb-6"
              />
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {item.desc}{" "}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-[#ee2c2f] font-medium hover:underline"
                  >
                    Learn More
                  </a>
                )}
              </p>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* Centered Button */}
      <AnimatedElement animation="fadeInUp" delay={0.3 + keypoints.length * 0.1}>
        <div className="mt-12 flex justify-center">
          <a
            href="tel:+91-9820160482"
            className="inline-block px-8 py-4 rounded-full text-lg font-semibold 
                           text-white bg-gradient-to-r from-[#6d0000] to-[#a30000] shadow-lg 
                           relative overflow-hidden group"
          >
            <span className="relative z-10">Let&apos;s Connect</span>
            {/* Shine Effect */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                                 translate-x-[-100%] group-hover:translate-x-[100%] 
                                 transition-transform duration-700 ease-in-out"
            ></span>
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
