'use client';
import React from 'react';

const ContactInfo = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Find The <span className="text-red-500">Perfect Solution</span> For Your Business
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          We have world-class, flexible support via live chat, email, and phone. 
          We guarantee that you’ll be able to have any issue resolved within 24 hours.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        {/* Phone */}
        <div className="border border-gray-600 rounded-md px-6 py-8 text-center w-full lg:w-1/4 bg-[#111]">
          <img
            src="https://crezvatic.com/assets/images/contact/phone.svg"
            alt="Phone"
            className="mx-auto mb-4 w-8 h-8"
          />
          <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
          <p className="text-gray-300">+91 9820160482</p>
        </div>

        {/* Email */}
        <div className="border border-gray-600 rounded-md px-6 py-8 text-center w-full lg:w-1/4 bg-[#111]">
          <img
            src="https://crezvatic.com/assets/images/contact/email.svg"
            alt="Email"
            className="mx-auto mb-4 w-8 h-8"
          />
          <h3 className="text-lg font-semibold mb-1">Email Address</h3>
          <p className="text-gray-300">connect@crezvatic.com</p>
        </div>

        {/* Address */}
        <div className="border border-gray-600 rounded-md px-2 py-5 text-center w-full lg:w-1/2 bg-[#111]">
          <img
            src="https://crezvatic.com/assets/images/contact/location.svg"
            alt="Location"
            className="mx-auto mb-4 w-8 h-8"
          />
          <h3 className="text-lg font-semibold mb-2">Office Address</h3>
          <p className="text-gray-300 text-sm leading-relaxed w-full">
            907, Opal Square IT Park, C-2, Padwal Nagar Wagle Estate,
            Shri Hanuman Marg, MIDC, Thane West,
            Thane, Maharashtra 400604
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
