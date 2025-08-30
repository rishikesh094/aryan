"use client";

export default function ContactUs() {
  return (
    <section className="bg-black text-white py-20 px-6 flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s boost your social media presence!
        </h1>
        <h3 className="text-lg md:text-xl font-light">
          Reach the fingertips of your target audience with{" "}
          <a
            href="https://crezvatic.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ee2c2f] font-semibold hover:underline"
          >
            social media marketing
          </a>
        </h3>
      </div>

      {/* Call To Action Button */}
      <div className="mt-12">
        <a
          href="#"
          className="relative px-8 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg glow-on-hover"
        >
          Let&apos;s Connect
        </a>
      </div>

      {/* Custom Button Glow Style */}
      <style jsx>{`
        .glow-on-hover {
          background: linear-gradient(90deg, #ee2c2f, #ff4447, #ee2c2f);
          background-size: 200% auto;
          border: none;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
}
