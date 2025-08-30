"use client";

import dynamic from "next/dynamic";

// ✅ Correct: import default export (Player component)
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-red-500">Video Marketing Agency</span> To Make
            Brands Stand Out like no other
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-300">
            We convey your story through videos that connect
          </h2>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#"
              className="relative inline-block px-6 md:px-8 py-3 md:py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg transition-all duration-300 hover:scale-105 glow-on-hover"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right Side (Lottie Animation) */}
        <div className="flex justify-center items-center md:w-1/2">
          <LottiePlayer
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json" 
            style={{ height: "350px", width: "350px" }}
          />
        </div>
      </div>

      {/* Glow Effect */}
      <style jsx>{`
        .glow-on-hover {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .glow-on-hover::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ff0000, #ff4d4d, #ff1a75, #ff0000);
          background-size: 400%;
          z-index: -1;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          border-radius: 9999px;
          animation: glowing 20s linear infinite;
        }
        .glow-on-hover:hover::before {
          opacity: 1;
        }
        @keyframes glowing {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
      `}</style>
    </section>
  );
}
