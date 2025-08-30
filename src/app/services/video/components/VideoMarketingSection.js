"use client";
import { AnimatedElement } from "@/components/common";

export default function VideoMarketingSection() {
  const processHighlights = [
    "Successful Goal-Setting",
    "Video Strategy Development",
    "Script/Storyboard Creation",
    "Video Production",
    "Customization for Social Media",
  ];

  const importanceHighlights = [
    "Brand Awareness",
    "Website Traffic",
    "Online Sales",
    "Brand Visibility",
    "Purchase Intent",
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto flex flex-col gap-20">
        {/* First Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <div className="flex-1 space-y-5 p-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Upgrade your <span className="text-red-500">digital presence</span>{" "}
                with <span className="text-red-500">video marketing services</span>
              </h2>
              <p>
                According to a Google survey, today customers buy products or
                services only after watching a video about it.
              </p>
              <p className="font-semibold">Our Video Marketing Process:</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {processHighlights.map((item, index) => (
                  <AnimatedElement
                    key={index}
                    animation="zoomIn"
                    delay={0.1 * (index + 2)}
                  >
                    <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg">
                      <img
                        src="https://crezvatic.com/assets/images/web_services/check-success.svg"
                        alt="check"
                        className="w-4"
                      />
                      <p className="text-sm">{item}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>

          {/* Image */}
          <AnimatedElement animation="fadeInRight" delay={0.2}>
            <div className="flex-1 flex justify-center">
              <img
                src="https://crezvatic.com/assets/images/video_creation/Video Marketing-01.webp"
                alt="Video Marketing"
                className="rounded-xl shadow-lg"
              />
            </div>
          </AnimatedElement>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <AnimatedElement animation="fadeInLeft" delay={0.2}>
            <div className="flex-1 flex justify-center">
              <img
                src="https://crezvatic.com/assets/images/video_creation/important For Your Business-01.webp"
                alt="Importance"
                className="rounded-xl shadow-lg"
              />
            </div>
          </AnimatedElement>

          {/* Text Content */}
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <div className="flex-1 space-y-5 p-5">
              <h2 className="text-2xl md:text-3xl font-bold">
                Why <span className="text-red-500">video marketing</span> is
                important for your business
              </h2>
              <p>
                Nowadays, watching videos is something that everyone does daily in
                some form or another. Therefore, businesses can take advantage of
                this and promote their offering through our video marketing
                Service. <br /> <br />
                Video is a Fantastic Opportunity to Produce Content that Informs,
                Engages, and Converts. Videos can help business increase:
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {importanceHighlights.map((item, index) => (
                  <AnimatedElement
                    key={index}
                    animation="zoomIn"
                    delay={0.1 * (index + 2)}
                  >
                    <div className="flex items-center gap-2 bg-zinc-900 px-3 py-2 rounded-lg">
                      <img
                        src="https://crezvatic.com/assets/images/web_services/check-success.svg"
                        alt="check"
                        className="w-4"
                      />
                      <p className="text-sm">{item}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* CTA Button */}
        <AnimatedElement animation="fadeInUp" delay={0.1 * 10}>
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
      </div>
    </section>
  );
}
