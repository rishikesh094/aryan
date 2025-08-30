"use client";
import { AnimatedElement } from "@/components/common";

const logos = [
  'https://crezvatic.com/assets/images/certificate/1.webp',
  'https://crezvatic.com/assets/images/certificate/2.webp',
  'https://crezvatic.com/assets/images/certificate/3.webp',
  'https://crezvatic.com/assets/images/certificate/4.webp',
  'https://crezvatic.com/assets/images/certificate/5.webp',
  'https://crezvatic.com/assets/images/certificate/6.webp',
  'https://crezvatic.com/assets/images/certificate/7.webp',
  'https://crezvatic.com/assets/images/certificate/8.webp',
  'https://crezvatic.com/assets/images/certificate/9.webp',
  'https://crezvatic.com/assets/images/certificate/10.webp',
  'https://crezvatic.com/assets/images/certificate/11.webp',
  'https://crezvatic.com/assets/images/certificate/12.webp',
  'https://crezvatic.com/assets/images/certificate/13.webp',
  'https://crezvatic.com/assets/images/certificate/14.webp',
];

const TechnologyUsed = () => {
  const repeatedLogos = [...logos, ...logos, ...logos]; // infinite scroll illusion

  return (
    <section className="py-12 bg-black">
      <div className="text-center mb-8">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-red-500">Technology</span> we used
          </h2>
        </AnimatedElement>
        <AnimatedElement animation="fadeInUp" delay={0.2}>
          <p className="text-white mt-2">Driving technology for leading brands</p>
        </AnimatedElement>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex w-max animate-marquee space-x-10 px-4">
          {repeatedLogos.map((src, idx) => (
            <AnimatedElement 
              key={idx}
              animation="scaleIn" 
              delay={0.3 + (idx * 0.05)}
            >
              <img
                src={src}
                alt={`Certificate ${idx + 1}`}
                className="h-36 w-auto object-contain"
                loading="lazy"
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
