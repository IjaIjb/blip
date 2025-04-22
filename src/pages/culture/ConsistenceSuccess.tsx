import React from "react";

const ConsistentSuccessInExecution = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side - Illustration */}
          <div className="flex items-center bg-[#FFB58014] justify-center p-6 relative">
            {/* Tree trunk */}
            <img src="/assets/culture/B.svg" alt="" />
          </div>

          {/* Right side - Text content */}
          <div className="p-6 md:p-8 shadow-md bg-white">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              Consistent Success In Execution
            </h2>

            <div className="space-y-4 text-gray-700 text-sm md:text-base">
              <p className="text-[#000000] leading-[30px] text-[18px] max-w-[500px] font-[400]">
                As a respected talent brand, BLIP LLC creates an environment
                where exceptional people can create their own opportunities,
                supported by sound corporate principles and innovative thinking.
              </p>

              <p className="text-[#000000] leading-[30px] text-[18px] max-w-[500px] font-[400]">
                While most Companies compete on the same basis, it is ISJP LLC's
                people, our 'never-manager' culture, conditions and benefits
                which makes us different from the rest. We are always on the
                lookout for bright minds to join our fantastic Credit analyst,
                accountant and IT talent pipeline.
              </p>

              <p className="text-[#000000] leading-[30px] text-[18px] max-w-[500px] font-[400]">
                ISJP LLC is a value-driven organization where human development
                is far greater than only results. That's why it's crucial we
                hire the right people and give them the freedom to be awesome.
              </p>

              <p className="text-[#000000] leading-[30px] text-[18px] max-w-[500px] font-[400]">
                We recently added a few new innovative thinkers to our talent
                pool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsistentSuccessInExecution;
