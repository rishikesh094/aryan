import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="scrollTrigger heading mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span>
              Why choose{' '}
              <a
                href="https://crezvatic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                crezvatic
              </a>{' '}
            </span>
            over others
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="scrollTrigger p-6 border-gray-500 border-1 rounded-lg hover:bg-red-950 transition-all duration-300 shadow-md flex flex-col items-center gap-4">
            <img
              width={60}
              src="https://crezvatic.com/assets/images/web_services/qualified-team.svg"
              alt="Qualified Team"
            />
            <span className="font-semibold">Qualified Team</span>
          </div>

          <div className="scrollTrigger p-6 border-gray-500 border-1 rounded-lg hover:bg-red-950 transition-all duration-300 shadow-md flex flex-col items-center gap-4">
            <img
              width={60}
              src="https://crezvatic.com/assets/images/web_services/dedicated-support.svg"
              alt="Dedicated Support"
            />
            <span className="font-semibold">Dedicated Support</span>
          </div>

          <div className="scrollTrigger p-6 border-gray-500 border-1 rounded-lg hover:bg-red-950 transition-all duration-300 shadow-md flex flex-col items-center gap-4">
            <img
              width={60}
              src="https://crezvatic.com/assets/images/web_services/highly-secure.svg"
              alt="Highly Secure"
            />
            <span className="font-semibold">Highly Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
