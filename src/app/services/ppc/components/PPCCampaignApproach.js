"use client";
import { AnimatedElement } from "@/components/common";

export default function PPCTimeline() {
  const steps = [
    {
      title: "Understand your Business Goals",
      desc: "We learn about your products/services and create customized PPC campaigns to meet your business goals.",
      img: "https://crezvatic.com/assets/images/ppc_services/Understand-your-Business-Goals.webp",
    },
    {
      title: "PPC Strategy",
      desc: "Keyword research and optimization for advertising on multiple platforms, to reach and convert people in your target audience.",
      img: "https://crezvatic.com/assets/images/ppc_services/PPC-Strategy.webp",
    },
    {
      title: "Ad Copywriting",
      desc: "We do research about your target audience and create highly effective ad copies.",
      img: "https://crezvatic.com/assets/images/ppc_services/Ad-Copywriting.webp",
    },
    {
      title: "PPC Optimization",
      desc: "Adding Negative Keywords, changing bids, discovering new keywords – Optimization is the key to a successful Campaign.",
      img: "https://crezvatic.com/assets/images/ppc_services/PPC-Optimization.webp",
    },
    {
      title: "Ads Reporting",
      desc: "Track and measure ad spend, impressions & clicks to analyze best-performing ads.",
      img: "https://crezvatic.com/assets/images/ppc_services/Ads-Reporting.webp",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      {/* Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How we <span className="text-[#ee2c2f]">approach</span> PPC campaign
          </h2>
        </div>
      </AnimatedElement>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 border-r-2 border-dashed border-red-600"></div>

        <div className="flex flex-col gap-16 relative">
          {steps.map((step, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={0.2 * (index + 1)}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 border-4 border-black z-10"></div>

                {/* Card */}
                <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg md:w-1/2">
                  <div className="flex items-start gap-4">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-30 h-30 object-contain rounded-lg bg-black p-2"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-xl">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <AnimatedElement animation="fadeInUp" delay={0.2 * (steps.length + 1)}>
        <div
          id="ctc_button"
          className="scrollTrigger ctc_button mb-5 text-center pt-5"
        >
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#4e0405] text-white font-medium rounded-3xl shadow-lg transition"
          >
            Let’s Connect
          </a>
        </div>
      </AnimatedElement>
    </section>
  );
}
