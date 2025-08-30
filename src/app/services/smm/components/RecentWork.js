"use client";
import Image from "next/image";

const brands = {
  left: {
    link: "https://www.instagram.com/lechlernozzles/",
    img: "https://crezvatic.com/assets/images/lechlorcreative-new.webp",
    alt: "Lechler Nozzles",
  },
  right: [
    {
      link: "https://www.instagram.com/proventuseducation/",
      img: "https://crezvatic.com/assets/images/proventus_creative-new.webp",
      alt: "Proventus Education",
    },
    {
      link: "https://www.instagram.com/shrikanchanhotels/",
      img: "https://crezvatic.com/assets/images/shrikanchancreative-new.webp",
      alt: "Shrikanchan Hotels",
    },
    {
      link: "https://www.instagram.com/erayba.india/",
      img: "https://crezvatic.com/assets/images/eraybacreative-new.webp",
      alt: "Erayba India",
    },
    {
      link: "https://instagram.com/tentotreat",
      img: "https://crezvatic.com/assets/images/tent-to-treat-creative-new.webp",
      alt: "Tent To Treat",
    },
  ],
};

export default function RecentWork() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Brands We <span className="text-[#ee2c2f]">Have Worked With</span>
          </h1>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Large Brand */}
          <div className="flex-1">
            <a
              href={brands.left.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Image
                src={brands.left.img}
                alt={brands.left.alt}
                width={600}
                height={400}
                className="rounded-xl shadow-lg group-hover:scale-[1.02] transition duration-300"
              />
            </a>
          </div>

          {/* Right Side 2x2 Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {brands.right.map((brand, idx) => (
              <a
                key={idx}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Image
                  src={brand.img}
                  alt={brand.alt}
                  width={300}
                  height={200}
                  className="rounded-xl shadow-md group-hover:scale-105 transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
        <div
          id="ctc_button"
          className="scrollTrigger ctc_button mb-5 text-center pt-5"
        >
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-[#4e0405] hover:bg-[#620506] text-white font-medium rounded-3xl shadow-lg transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
