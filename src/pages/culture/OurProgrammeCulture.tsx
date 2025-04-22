import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProgrammesCultureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const slides = [
    {
      id: 1,
      category: "PROGRAMMES",
      title:
        "BLIP LLC truly believes that Africa is home to vast business opportunities that can significantly contribute to our continent. We maintain that what we need most to unlock Africa's potential is partnerships that can...",
      image: "/assets/culture/culture1.png",
      buttonText: "Learn More",
      modalContent: {
        title: "Our Programmes",
        content:
          "BLIP LLC truly believes that Africa is home to vast business opportunities that can significantly contribute to our continent. We maintain that what we need most to unlock Africa's potential is partnerships that can connect African entrepreneurs with the right resources, technology, and global markets.\n\nOur programmes are designed to bridge these gaps through mentorship, funding, and strategic partnerships with both local and international stakeholders. We focus on sectors with high growth potential including technology, agriculture, renewable energy, and infrastructure development.\n\nThrough our tailored programmes, we've helped over 200 businesses scale their operations and create sustainable impact across 15 African countries.",
      },
    },
    {
      id: 2,
      category: "DIVERSITY, EQUITY, AND INCLUSION",
      title:
        "At BLIP LLC, we strive to create an inclusive environment for all people, regardless of gender, race or social status. We believe in the power of diverse perspectives and fostering a fair and dignified workplace where everyone is valued.",
      image: "/assets/culture/culture2.png",
      buttonText: "Read More",
      modalContent: {
        title: "Diversity, Equity, and Inclusion at BLIP LLC",
        content:
          "At BLIP LLC, we strive to create an inclusive environment for all people, regardless of gender, race or social status. We believe in the power of diverse perspectives and fostering a fair and dignified workplace where everyone is valued.\n\nOur DEI initiatives include comprehensive training programmes, community outreach, and partnerships with organizations that champion diversity. We maintain transparent hiring practices with clear metrics for improvement and accountability.\n\nWe regularly assess our policies and procedures to eliminate any biases or barriers that might prevent full participation of any group. This commitment extends beyond our company to our partners and suppliers, ensuring our entire ecosystem embraces these values.",
      },
    },
    {
      id: 3,
      category: "BLIP FOR HER",
      title:
        "Gender equality is a key part of our overall transformation strategy, and we acknowledge the immense contribution that women make to all aspects of our business and the wider continent.",
      image: "/assets/culture/culture3.png",
      buttonText: "Read More",
      modalContent: {
        title: "BLIP for Her",
        content:
          "Gender equality is a key part of our overall transformation strategy, and we acknowledge the immense contribution that women make to all aspects of our business and the wider continent.\n\nBLIP for Her is our flagship initiative focused on empowering women in business across Africa. The program provides tailored support including specialized training, mentorship matching with successful female business leaders, and access to funding opportunities specifically designed for women entrepreneurs.\n\nSince its launch in 2019, BLIP for Her has supported over 500 women-led businesses, facilitated more than $2 million in investment, and created a vibrant network of female business leaders who continue to inspire the next generation of entrepreneurs.",
      },
    },
    {
      id: 4,
      category: "WORKING AT BLIP LLC",
      title:
        "As a company that puts people first, BLIP LLC creates an environment where individuals thrive and contribute toward the mission to fully enhance business for our clients.",
      image: "/assets/culture/culture4.png",
      buttonText: "Find More",
      modalContent: {
        title: "Working at BLIP LLC",
        content:
          "As a company that puts people first, BLIP LLC creates an environment where individuals thrive and contribute toward the mission to fully enhance business for our clients.\n\nWe foster a culture of innovation, continuous learning, and personal growth. Our team members enjoy competitive benefits, flexible working arrangements, and regular opportunities for career advancement.\n\nBeyond professional development, we encourage community involvement and support our employees' passion projects that align with our mission of developing African businesses. Our collaborative workspace, regular team-building activities, and open-door policy create an atmosphere where everyone feels valued and heard.\n\nJoin us in our mission to transform business in Africa while growing personally and professionally in a supportive, dynamic environment.",
      },
    },
  ];

  // Auto slide functionality - pause when modal is open
  useEffect(() => {
    if (activeModal) return; // Don't auto-slide when modal is open

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length, activeModal]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Calculate which slides to show (current and next two)
  const getVisibleSlides = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % slides.length;
      result.push(slides[index]);
    }
    return result;
  };

  const openModal = (slideId: any) => {
    setActiveModal(slideId);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-left mb-8 text-orange-700">
          Our Programmes and Culture
        </h2>

        {/* Slider Container */}
        <div className="relative">
          {/* Slides */}
          <div className="flex space-x-6 overflow-x-hidden">
            {getVisibleSlides().map((slide, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 transition-all duration-500"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <div className="relative hover:h-[400px] h-48">
                    <img
                      src={slide.image}
                      alt={slide.category}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay - appears on hover */}
                    <div className="absolute h-full inset-0 bg-gradient-to-t from-orange-800 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

                    {/* Hover content - similar to the image you provided */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-sm font-semibold text-white mb-2">
                        {slide.category}
                      </h3>
                      <p className="text-base text-white font-medium mb-4">
                        {slide.title}
                      </p>
                      <button
                        onClick={() => openModal(slide.id)}
                        className="bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-100 transition duration-300 self-start"
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow group-hover:hidden">
                    <h3 className="text-sm font-semibold text-orange-700 mb-3">
                      {slide.category}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 flex-grow">
                      {slide.title}
                    </p>
                    <button
                      onClick={() => openModal(slide.id)}
                      className="bg-white border border-orange-700 text-orange-700 px-4 py-2 rounded-full text-xs font-medium hover:bg-orange-50 transition duration-300 self-start"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50"
          >
            <ChevronLeft size={20} className="text-orange-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50"
          >
            <ChevronRight size={20} className="text-orange-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-orange-700"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center z-10">
              <h3 className="text-xl font-bold text-orange-700">
                {
                  slides.find((slide) => slide.id === activeModal)?.modalContent
                    .title
                }
              </h3>
              <button
                onClick={closeModal}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={slides.find((slide) => slide.id === activeModal)?.image}
                alt={slides.find((slide) => slide.id === activeModal)?.category}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              {slides
                .find((slide) => slide.id === activeModal)
                ?.modalContent.content.split("\n\n")
                .map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
            </div>
            <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-orange-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-800 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammesCultureSlider;
