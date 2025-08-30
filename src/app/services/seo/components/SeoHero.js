import React from "react";

const SeoHero = () => {
  return (
    <section className="bg-black min-h-screen flex justify-center items-start pt-32">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {/* Title */}
          <div className="text-gray-600 text-sm">Google</div>
          <div className="w-3"></div>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo style text */}
          <h1 className="text-4xl font-bold">
            <span className="text-[#4285F4]">C</span>
            <span className="text-[#EA4335]">r</span>
            <span className="text-[#FBBC05]">e</span>
            <span className="text-[#4285F4]">z</span>
            <span className="text-[#34A853]">v</span>
            <span className="text-[#EA4335]">a</span>
            <span className="text-[#4285F4]">t</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">c</span>
          </h1>

          {/* Search bar */}
          <div className="flex items-center justify-between w-full md:w-2/3 border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                fill="#5f6368"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 
                  12.59 16 11.11 16 9.5 16 5.91 
                  13.09 3 9.5 3S3 5.91 3 9.5 
                  5.91 16 9.5 16c1.61 0 3.09-.59 
                  4.23-1.57l.27.28v.79l5 
                  4.99L20.49 19l-4.99-5zm-6 
                  0C7.01 14 5 11.99 5 9.5S7.01 
                  5 9.5 5 14 7.01 14 9.5 11.99 
                  14 9.5 14z"
                />
              </svg>
              <span>Best Seo Company in Noida</span>
            </div>
            <img
              src="https://i.imgur.com/IxH0oFY.webp"
              alt="voice"
              className="w-5 ml-2"
            />
          </div>

          {/* Subtitle */}
          <h5 className="text-gray-500 font-medium max-w-2xl">
            We’re Here To Make Your Brand Visible And Drive More Sales With Every Click
          </h5>

          {/* CTA */}
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-2 rounded-full text-black font-semibold shadow-md"
          >
            Rank Your Website on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
