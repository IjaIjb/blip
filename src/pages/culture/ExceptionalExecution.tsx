import React from "react";

const ExceptionalPeopleSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Stacked Layout */}
        <div className="flex flex-col gap-6">
          {/* Dark Blue Quote Box */}
          <div className="bg-slate-800 text-white p-8 flex items-center">
            <h2 className="text-2xl font-bold leading-tight">
              Exceptional execution is only possible with exceptional people
            </h2>
          </div>

          {/* Family/Team Image */}
          <div className="overflow-hidden">
            <img
              src="/assets/culture/happy.svg"
              alt="Family with children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Private Jet Image */}
        <div className="overflow-hidden relative h-full">
          <img
            src="/assets/culture/executive.svg"
            alt="Executive in private jet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-75 bg-gradient-to-b from-[#21100529]/[16%] to-[#874313E3]"></div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalPeopleSection;
