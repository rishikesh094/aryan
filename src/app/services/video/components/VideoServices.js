"use client";
import { AnimatedElement } from "@/components/common";

export default function VideoServices() {
  const services = [
    {
      title: "Animated Explainer Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Animated-video.svg",
    },
    {
      title: "Product Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Product-Videos.svg",
    },
    {
      title: "Promo Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Promo-Videos.svg",
    },
    {
      title: "Demo Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Demo-Videos.svg",
    },
    {
      title: "Tutorial Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Tutorial-Videos.svg",
    },
    {
      title: "How-To Videos",
      img: "https://crezvatic.com/assets/images/video_creation/How-To-Videos.svg",
    },
    {
      title: "Company Overview Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Overview-Videos.svg",
    },
    {
      title: "Testimonial Videos",
      img: "https://crezvatic.com/assets/images/video_creation/Testimonial.svg",
    },
  ];

  return (
    <section className="bg-black text-white py-30 px-6">
      {/* Heading */}
      <AnimatedElement animation="fadeInUp" delay={0.1}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevate Your <span className="text-red-500">Brand</span> With Our{" "}
            <span className="text-red-500">Video Marketing Service</span>
          </h2>
          <p className="text-gray-300 text-lg">
            We create videos that will give you a visible boost in sales and
            help you achieve your business goal.
          </p>
        </div>
      </AnimatedElement>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <AnimatedElement
            key={index}
            animation="zoomIn"
            delay={0.1 * (index + 1)}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-base md:text-lg font-medium">
                {service.title}
              </h3>
            </div>
          </AnimatedElement>
        ))}
      </div>

      {/* CTA Button */}
      <AnimatedElement
        animation="fadeInUp"
        delay={0.1 * (services.length + 1)}
      >
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
      </AnimatedElement>
    </section>
  );
}
