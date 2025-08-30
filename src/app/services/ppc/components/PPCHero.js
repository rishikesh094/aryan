"use client";

export default function PPCHero() {
  return (
    <section className="bg-black text-white py-26 px-26 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-sembold leading-tight">
          <span className="text-[#ee2c2f]">ROI Driven PPC Service</span>{" "}
          <span className="text-white">in</span>{" "}
          <span className="text-gray-200">Mumbai, India</span>
        </h1>

        <h2 className="text-lg md:text-xl font-light text-gray-300">
          Catch Your Customer&apos;s attention with our unique Ad creatives that
          guarantee getting you notice.
        </h2>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="#"
            className="inline-block bg-[#5c0d0e] text-white font-medium px-6 py-3 rounded-full hover:bg-[#ee2c2f] transition-all duration-300"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="https://crezvatic.com/assets/images/ppc_services/hero_banner.svg"
          alt="PPC Hero Banner"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
}
