"use client";

const whyUsData = [
  {
    id: 1,
    icon: "https://crezvatic.com/assets/images/career/growth 1.png",
    title: "GROWTH-ORIENTED CULTURE",
    tagline: `"Your Success = Our Mission!"`,
    description:
      "We send you a list of basic questionnaires to understand your business goals, needs, wants & Pain points. Here we also understand the client's vision & mission for the online marketing world",
  },
  {
    id: 2,
    icon: "https://crezvatic.com/assets/images/career/balance 1.png",
    title: "WORK-LIFE BALANCE",
    tagline: `"Work Smart, Live Fully!"`,
    description:
      "Enjoy flexible work schedules, hybrid/remote options, and a fun, stress-free environment.",
  },
  {
    id: 3,
    icon: "https://crezvatic.com/assets/images/career/loyalty-program 1.png",
    title: "COMPETITIVE PERKS & REWARDS",
    tagline: `"Hard Work Pays Off!"`,
    description:
      "Get rewarded with performance-based incentives, bonuses, and well-deserved recognition.",
  },
  {
    id: 4,
    icon: "https://crezvatic.com/assets/images/career/collaboration 1.png",
    title: "INNOVATIVE & COLLABORATIVE TEAM",
    tagline: `"Create, Innovate, Succeed!"`,
    description:
      "Join a team of experts, share ideas, and work in a creative and open environment.",
  },
];

export default function WhyJoinUsSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          Why Join Us
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto relative">
        {whyUsData.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-start gap-4"
          >
            {/* Big Background Number */}
            <span className="absolute top-2 right-6 text-[120px] md:text-[150px] font-extrabold text-white/5 select-none">
              {item.id}
            </span>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-md">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold uppercase">{item.title}</h3>

            {/* Tagline */}
            <p className="italic text-gray-300">{item.tagline}</p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
