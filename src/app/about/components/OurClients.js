"use client";

export default function OurClients() {
  const clients = [
    "https://crezvatic.com/assets/images/about/bharang.webp",
    "https://crezvatic.com/assets/images/about/consverge.webp",
    "https://crezvatic.com/assets/images/about/curve.webp",
    "https://crezvatic.com/assets/images/about/labquip.webp",
    "https://crezvatic.com/assets/images/about/myrooots.webp",
    "https://crezvatic.com/assets/images/about/sports.webp",
    "https://crezvatic.com/assets/images/about/tentotreat.webp",
    "https://crezvatic.com/assets/images/about/wayam.webp",
    "https://crezvatic.com/assets/images/about/labindia.webp",
  ];

  return (
    <section className="py-16 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-red-500">Clients</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Driving technology for leading brands
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {clients.concat(clients).map((logo, idx) => (
            <div
              key={idx}
              className="mx-2 flex items-center justify-center min-w-[250px]"
            >
              <img
                src={logo}
                alt="client logo"
                className="h-36 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
