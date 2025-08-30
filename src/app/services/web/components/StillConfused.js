import React from 'react';

const StillConfused = () => {
  return (
    <div className="still_confuse text-center py-16 bg-black text-white">
      <div className="heading space-y-4">
        <h1 className="scrollTrigger text-4xl font-bold">
          <span>Still Confused ???</span>
        </h1>
        <h4 className="scrollTrigger text-lg sm:text-xl font-medium">
          Schedule Your{' '}
          <a
            href="https://crezvatic.com/contact"
            className="text-red-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            FREE Consultation
          </a>{' '}
          Now!
        </h4>
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
  );
};

export default StillConfused;
