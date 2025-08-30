"use client";
import { useState } from "react";

export default function OurWork() {
  const [activeVideo, setActiveVideo] = useState(null);

  const works = [
    {
      id: 1,
      title: "Proventus",
      subtitle: "Career Counselling",
      description: "We made an engaging explainer video for career guidance.",
      thumbnail: "https://crezvatic.com/assets/images/video_creation/image1.webp",
      video: "https://fast.wistia.net/embed/iframe/pw94gmyx0f",
    },
    {
      id: 2,
      title: "Proventus",
      subtitle: "Overseas Education",
      description: "Helping students explore global education opportunities.",
      thumbnail: "https://crezvatic.com/assets/images/video_creation/image2.webp",
      video: "https://fast.wistia.net/embed/iframe/lt1ejytso4",
    },
    {
      id: 3,
      title: "Lechler",
      subtitle: "Industrial Solutions",
      description: "Created a corporate video showcasing innovation.",
      thumbnail: "https://crezvatic.com/assets/images/video_creation/image3.webp",
      video: "https://fast.wistia.net/embed/iframe/xj5p9r0hja",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Our <span className="text-red-500">Work</span>
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => setActiveVideo(work.video)}
              className="relative group cursor-pointer perspective"
            >
              {/* Flip Card */}
              <div className="relative w-full h-72 transform transition-transform duration-500 group-hover:rotate-y-180 preserve-3d">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-red-600 rounded-xl flex flex-col justify-center items-center text-center p-6 rotate-y-180 backface-hidden">
                  <h3 className="text-lg md:text-xl font-bold">{work.title}</h3>
                  {work.subtitle && (
                    <p className="text-sm md:text-base mt-1">{work.subtitle}</p>
                  )}
                  <p className="text-xs md:text-sm mt-3 opacity-90">
                    {work.description}
                  </p>
                  <span className="mt-4 inline-block px-4 py-2 border border-white rounded-lg text-xs uppercase tracking-wide">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-[90%] md:w-[70%] lg:w-[60%] bg-black rounded-xl overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-white text-2xl"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>
              {/* Video */}
              <div className="w-full aspect-video">
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  title="Work Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
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
    </section>
  );
}
