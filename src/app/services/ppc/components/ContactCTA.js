"use client";

export default function ContactCTA() {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center justify-center">
      {/* Content */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Boost Your Online Presence!
        </h1>
        <h3 className="text-lg md:text-xl text-gray-300">
          Reach to the fingertips of your target audience with our PPC service
        </h3>
      </div>

      {/* Button */}
      <div className="mt-10">
        <a
          href="#"
          className="relative inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg transition-all duration-300 hover:scale-105 glow-on-hover"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
}
