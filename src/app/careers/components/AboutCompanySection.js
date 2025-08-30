"use client";

export default function AboutCompanySection() {
  return (
    <section className="bg-black text-white flex flex-wrap-reverse px-6 md:px-12 py-16">
      {/* Left Content */}
      <div className="w-full text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-4xl uppercase font-bold mb-6 ">
          A Little bit about our company
        </h2>
        <p className="text-base md:text-lg font-semibold text-gray-300 max-w-5xl leading-relaxed">
          Crez means growth and vatic (Sanskrit) means prediction. Crezvatic is
          a Results and ROI driven full fledged Digital/ Internet Marketing
          Agency. Along with 15 Years of experience in contact center sales and
          support in Mumbai, India. Powering digital dreams &amp; building the
          future for many businesses across the globe digitally.
        </p>
        <a
          href="https://crezvatic.com/digital-markting-consultant-near-me"
          className="mt-8 inline-block px-8 py-3 rounded-lg border border-red-600 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          Know More
        </a>
      </div>
    </section>
  );
}
