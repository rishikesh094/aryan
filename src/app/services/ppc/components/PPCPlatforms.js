"use client";
import { AnimatedElement } from "@/components/common";

export default function PPCPlatforms() {
  const platforms = [
    {
      name: "Google Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/google.webp",
    },
    {
      name: "Facebook Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/fb.webp",
    },
    {
      name: "LinkedIn Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/linkedIn.webp",
    },
    {
      name: "YouTube Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/youtube.webp",
    },
    {
      name: "Google Local Services Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/google-local-ads.webp",
    },
    {
      name: "Instagram Ads",
      img: "https://crezvatic.com/assets/images/ppc_services/insta.webp",
    },
  ];

  return (
    <section className="bg-black text-white px-6">
      {/* Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl capitalize font-bold">
            PPC services that we offer include{" "}
            <span className="text-[#ee2c2f]">multiple platform management</span>
          </h2>
        </div>
      </AnimatedElement>

      {/* Platforms Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {platforms.map((platform, index) => (
          <AnimatedElement
            key={index}
            animation="zoomIn"
            delay={0.1 * (index + 2)} // stagger effect
          >
            <div
              className="flex flex-col items-center justify-start gap-3 
                        rounded-xl p-6 shadow-lg"
            >
              <img
                src={platform.img}
                alt={platform.name}
                className="w-20 h-20 object-contain"
              />
              <p className="text-xl font-medium text-gray-200">
                {platform.name}
              </p>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* CTA Button */}
      <AnimatedElement animation="fadeInUp" delay={0.2 * (platforms.length + 1)}>
        <div
          id="ctc_button"
          className="scrollTrigger ctc_button text-center pt-5"
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
