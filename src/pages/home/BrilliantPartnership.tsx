import { X } from "lucide-react";
import React, { useState } from "react";

const PartnershipSection = () => {
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
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-[32px] font-[600] text-primary mb-8">
          Think brilliant Partnership. Think BLIP LLC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Career Opportunities Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
            <img src="/assets/compass.svg" className="w-16 h-16" alt="" />
            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">
              Career Opportunities
            </h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              It's important to work at BLIP LLC because of the progressive
              international exposure and career development opportunities,
              opportunity for mentorship and to enhance soft skills needed to
              get ahead in life.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
                More Info
              </button>
            </div>
          </div>

          {/* Our Programmes Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
            <img src="/assets/dart-board-01.svg" className="w-16 h-16" alt="" />

            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">
              Our Programmes
            </h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              At BLIP LLC we collaborate with various educational institutions
              to expose students to real work by creating opportunities for
              internships. We do this through a variety of programs such as
              graduate programs and mentorship.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
                Programmes
              </button>
            </div>
          </div>

          {/* Our Culture Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
            <img src="/assets/heart-care-01.svg" className="w-16 h-16" alt="" />

            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">
              Our Culture
            </h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              BLIP, being innovative and pioneering always, gets things done
              through a team of high resourceful individuals with the right
              caliber from diverse backgrounds and global experience.
            </p>
            <div className="mt-auto">
              <div className="flex justify-center mb-4"></div>
              <div className="mt-auto">
                <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
                  Culture
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={openModal}
            className="text-white uppercase py-3 w-fit  px-8 bg-primary rounded-full  text-[16px] font-[500] hover:bg-primary/[80%] transition-colors"
          >
            Get in touch
          </button>
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
    </section>
  );
};

export default PartnershipSection;
