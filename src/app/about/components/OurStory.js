"use client";
import { AnimatedElement } from "@/components/common";

export default function OurStory() {
  const timeline = [
    {
      year: "2013",
      title: "Project Idea",
      desc: "We started with a small team of three - 1 developer, 1 sales & 1 marketer",
    },
    {
      year: "2015",
      title: "Business Conception",
      desc: "Trained contact centers for sales & marketing, provided companies digital marketing",
    },
    {
      year: "2017",
      title: "Legal Review",
      desc: "We registered our company as Crezvatic Pvt. Ltd. on 19th June 2017. GST No. - 27AAHCC0592M1ZB",
    },
    {
      year: "2017-19",
      title: "Global Sales & Marketing",
      desc: "Achieved a revenue of half a million dollars in just 2 years",
    },
    {
      year: "2020-22",
      title: "Digital Revolution",
      desc: "Pandemic forced every business to go digital and we right here to serve your digital marketing needs",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedElement animation="fadeInUp" delay={0.1}>
            <p className="text-red-500 font-semibold uppercase tracking-widest">
              OUR STORY
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The <span className="text-red-500">Story</span> of Crezvatic
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <p className="mt-4 text-gray-300">
              We Planned It, Believed It, Aim It, And Achieved It under our story
              section.
            </p>
          </AnimatedElement>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-red-500">
          {timeline.map((item, index) => (
            <AnimatedElement 
              key={index}
              animation="fadeInLeft" 
              delay={0.4 + (index * 0.1)}
            >
              <div
                className="mb-10 ml-8 relative group cursor-pointer"
              >
                {/* Dot on line */}
                <span
                  className="
                    absolute -left-[22px] flex items-center justify-center 
                    w-3 h-3 rounded-full transition-colors duration-300
                    bg-red-500 group-hover:bg-green-500
                  "
                ></span>

                {/* Year badge */}
                <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  {item.year}
                </span>

                {/* Content box */}
                <div className="mt-3 bg-[#111111] rounded-lg p-5 shadow-md border border-gray-800 transition-colors duration-300">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
