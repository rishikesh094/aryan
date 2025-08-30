'use client';
import React from 'react';

const GetInTouch = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Let’s make your dream of becoming a top brand into reality with proven strategies & realistic approach.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2">
            <form
              action="https://crezvatic.com/Contact/contactmail"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  required
                  className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Website"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-[#111] border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  value="1"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-300">
                  I agree to receive promotional updates via email and WhatsApp from{' '}
                  <strong>Crezvatic</strong>.
                </label>
              </div>

              <button
                type="submit"
                name="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded mt-4 w-full transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Google Map */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30144.969779250998!2d72.954922!3d19.189907000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe51ccf4213ab2fff!2sCrezvatic!5e0!3m2!1sen!2sin!4v1662525234817!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-md border border-gray-600"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
