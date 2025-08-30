"use client";

import dynamic from "next/dynamic";

// Dynamically import Lottie Player (SSR safe)
const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), {
  ssr: false,
});

export default function WhyChooseUs() {
  const points = [
    {
      title: "Working Process",
      desc: "We understand your business goals & your products. Research, Perform, Report & Repeat",
      icon: "https://crezvatic.com/assets/images/about/success.svg",
    },
    {
      title: "Dedicated Team Members",
      desc: "Our digital team will kickstart campaigns and maximize your ROAS(Return on Advertising Spend)",
      icon: "https://crezvatic.com/assets/images/about/success.svg",
    },
    {
      title: "24/7 Hours Support",
      desc: "Dedicated project managers ensure that your business runs smoothly without any interruption",
      icon: "https://crezvatic.com/assets/images/about/success.svg",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <LottiePlayer
            autoplay
            loop
            src="https://crezvatic.com/assets/images/about/web.lottie"
            style={{ height: "400px", width: "100%" }}
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="text-red-500 font-semibold tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Save <span className="text-red-500">Time & Effort</span> With Crezvatic
          </h2>

          {/* Keypoints */}
          <div className="flex flex-col gap-6 mt-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-[#111111] p-5 rounded-lg border border-gray-800 hover:border-green-500 transition"
              >
                {/* Icon */}
                <img src={point.icon} alt="icon" className="w-10 h-10" />

                {/* Text */}
                <div>
                  <h4 className="text-lg font-semibold">{point.title}</h4>
                  <p className="text-gray-400">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
