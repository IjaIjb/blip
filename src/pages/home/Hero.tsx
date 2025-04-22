import React, { useState } from "react";
import { X } from "lucide-react";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover w-full bg-center"
        style={{
          backgroundImage: `url('/assets/hero.svg')`,
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Custom gradient overlay */}
        <div className="absolute inset-0 w-full opacity-75 bg-gradient-to-r from-[#8F3F05] to-[#874313]/[89%]">
          <img src="/assets/R.png" alt="/"/>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col py-20 justify-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[600px]">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold lg:leading-[80px] text-white mb-4">
              YOUR PARTNER TO GROWTH IN AFRICA
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-[32px] font-[400] md:leading-[39px] text-white mb-8">
              Partner with BLIP LLC for Topflight business in Africa
            </p>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="bg-white text-black px-6 py-3 rounded-full font-medium 
                hover:bg-gray-100 transition duration-300 text-sm uppercase tracking-wider"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            {/* Modal content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-center text-orange-700 mb-6">
                GET IN TOUCH
              </h2>

              <form className="space-y-4">
                {/* Name field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 h-24"
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2 flex">
                  <button
                    type="submit"
                    className="bg-orange-700 text-white px-8 py-2 rounded-full font-medium hover:bg-orange-800 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
