"use client";
import MyAnimation from "./MyAnimation";
import { AnimatedElement } from "@/components/common";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[40vh] bg-gradient-to-b from-[#4a0000] to-black">
        <AnimatedElement animation="fadeInUp" delay={0.1}>
          <h1 className="scrollTrigger text-6xl md:text-7xl font-extrabold tracking-wide text-white">
            ABOUT US
          </h1>
        </AnimatedElement>
      </section>

      {/* Second Section */}
      <section className="flex flex-wrap-reverse items-center gap-12 px-6 lg:px-20">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <h2 className="scrollTrigger text-4xl md:text-5xl font-bold leading-snug">
              Boosts Your <span className="text-red-500">Digital Traffic!</span>
            </h2>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={0.3}>
            <p className="scrollTrigger text-base md:text-lg text-gray-300 leading-relaxed">
              Crez means growth and vatic (Sanskrit) means prediction. <br />
              Crezvatic is a Results and ROI driven full fledged Digital/Internet
              Marketing Agency. Along with 15 Years of experience in contact
              center sales and support in Mumbai, India. Powering digital dreams &
              building the future for many businesses across the globe digitally.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="bounceIn" delay={0.4}>
            <a
              href="https://crezvatic.com/contact-us-for-best-digital-marketing-services"
              className="scrollTrigger inline-block bg-red-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition w-fit"
            >
              Connect with Us
            </a>
          </AnimatedElement>
        </div>

        {/* Right - Lottie Animation */}
        <AnimatedElement animation="fadeInRight" delay={0.5}>
          <div className="scrollTrigger w-full lg:w-full flex justify-center items-center mt-10 lg:mt-0">
            <div className="max-w-md w-full">
              <MyAnimation />
            </div>
          </div>
        </AnimatedElement>
      </section>
    </main>
  );
}
