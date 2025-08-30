"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // Don't forget to import this!

const archives = [
  {
    title: "LabIndia",
    img: "https://crezvatic.com/assets/images/archive/white/labindia/1.webp",
  },
  {
    title: "MyRoots",
    img: "https://crezvatic.com/assets/images/archive/white/myrooots/1.webp",
  },
  {
    title: "Shrikanchan Hotels",
    img: "https://crezvatic.com/assets/images/archive/white/shrikanchan/1.webp",
  },
  {
    title: "Tent-O-Treat",
    img: "https://crezvatic.com/assets/images/archive/white/tot/1.webp",
  },
  {
    title: "Wayam",
    img: "https://crezvatic.com/assets/images/archive/white/wayam/1.webp",
  },
];

const ArchiveCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 30 },
      },
    },
  });

  return (
    <section id="archive_section" className="w-full py-12 bg-black relative">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          What we have <span className="text-red-500">Acheived</span>
        </h2>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 z-10 h-10 bg-[#440000] text-white rounded-full flex items-center justify-center hover:bg-[#440000] cursor-pointer border-1 border-white"
      >
        <i className="fa-solid fa-arrow-left-long" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-[#440000] text-white rounded-full flex items-center justify-center hover:bg-[#440000] cursor-pointer border-1 border-white"
      >
        <i className="fa-solid fa-arrow-right-long" />
      </button>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider px-6">
        {archives.map((item, index) => (
          <div key={index} className="keen-slider__slide flex justify-center">
            <div className="box bg-white rounded-xl shadow-lg overflow-hidden w-[670px]">
              {/* Dots (Top Bar) */}
              <div className="dots flex justify-between items-start p-3 border-b border-gray-200">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                </div>
                <p className="m-0 font-medium text-gray-700">{item.title}</p>
                <div>
                  <img
                    src="https://crezvatic.com/assets/images/icons/enlarge.webp"
                    alt="icon"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {/* Image */}
              <img
                src={item.img}
                alt="Poster"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-red-800 hover:bg-red-700 text-white py-2 px-6 rounded-full transition-all duration-300">
          Let’s Connect
        </button>
      </div>
    </section>
  );
};

export default ArchiveCarousel;
