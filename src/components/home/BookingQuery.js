'use client';
import React from 'react';

const items = [
  {
    icon: 'https://crezvatic.com/assets/images/icons/1.webp',
    text: 'Areas of Improvement in your Website',
  },
  {
    icon: 'https://crezvatic.com/assets/images/icons/2.webp',
    text: 'Growth opportunities in the online world',
  },
  {
    icon: 'https://crezvatic.com/assets/images/icons/3.webp',
    text: 'Digital marketing services your Brand will need & Pricing',
  },
  {
    icon: 'https://crezvatic.com/assets/images/icons/4.webp',
    text: 'Glimpse of Digital Roadmap for your Brand',
  },
];

const BookingQuery = () => {
  return (
    <section className="py-10 bg-black text-white">
      <div id="booking_query_section" className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why you <span className="text-white">should</span>{' '}
            <span className="text-gray-400">book a call with us</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            In this 30 minute call we will give you guys some insights on below mentioned things
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-center gap-4 py-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#5a0000] text-white rounded-xl md:h-[90px] md:w-[450px] px-5 py-4 flex items-center gap-3 shadow-md hover:bg-[#2a2a2a] transition-all duration-200"
            >
              <img
                src={item.icon}
                alt="Icon"
                className="w-6 h-6 md:w-7 md:h-7 mt-1 object-contain"
              />
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-[#5a0000] hover:bg-red-700 text-white py-2 px-6 rounded-full text-sm md:text-base transition-all duration-300">
            Let’s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingQuery;
