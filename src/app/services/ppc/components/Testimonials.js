'use client';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
  {
    rating: 5,
    text: `Crezvatic has made our hotel an all-seasonal destination. Amazing Marketing, especially when our property is far off. Crezvatic helps us set up our complete sales funnel via online aggregators and phone support. We get a crowd that is perfect for our business and they help us set up our marketing funnel.`,
    name: 'Tent-O-Treat',
    company: 'Tent-O-Treat',
    image: 'https://crezvatic.com/assets/images/testimonial/2.webp',
  },
  {
    rating: 5,
    text: `We never thought social media will make a difference in B2B sector, the marketing efforts done by the team at crezvatic is commendable, & would recommend them to all B2B sector companies if you want to get better results over a period of time`,
    name: 'Lechler India',
    company: 'Lechler',
    image: 'https://crezvatic.com/assets/images/testimonial/1.webp',
  },
  // Add more if needed
];

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
    },
  });

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            What Our <span className="text-red-500">Clients Says</span>
          </h2>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-[#111111] border border-gray-600 rounded-xl p-6 flex flex-col justify-between min-h-[320px]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <img
                    key={i}
                    src="https://crezvatic.com/assets/images/smm_services/star.svg"
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-gray-300 mb-6">{item.text}</p>

              {/* Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <span className="text-sm text-gray-400">{item.company}</span>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="flex justify-end mt-4">
                <img
                  src="https://crezvatic.com/assets/images/smm_services/quote.svg"
                  alt="quote"
                  className="w-14 h-14 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
