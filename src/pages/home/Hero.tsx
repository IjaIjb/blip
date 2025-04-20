import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover  w-full bg-center"
        style={{
          backgroundImage: `url('/assets/hero.svg')`,
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Custom gradient overlay */}
        <div className="absolute inset-0 opacity-75 bg-gradient-to-r from-[#8F3F05] to-[#874313E3]/[89%]"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col py-20 justify-center">
        <div className="container mx-auto px-6 md:px-12 ">
          <div className="max-w-[600px] ">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold lg:leading-[80px] text-white  mb-4">
              YOUR PARTNER TO GROWTH IN AFRICA
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-[32px] font-[400] md:leading-[39px] text-white mb-8">
              Partner with BLIP LLC for Topflight business in Africa
            </p>
            
            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium 
              hover:bg-gray-100 transition duration-300 text-sm uppercase tracking-wider">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;