import React from 'react';

const Consistent = () => {
  return (
    <div className="relative flex justify-center py-16 ">
      {/* Background image can be added as a background image in a real implementation */}
      <div className="max-w-7xl  -mt-[100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-b-[24px] shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-amber-800 mb-4">
            Consistent Success in Execution
          </h2>
          
          <div className="text-gray-700 text-sm md:text-base mb-6">
            <p className="mb-4">
              Our broad-based execution and transaction experience extends across a range of situations, industries and enterprise values. We provide responsible advice leveraging our deep domain knowledge, access to key relationships, and breadth of execution experience over the years. Every transaction is personally managed from start to finish by experienced senior bankers with specific sector experience and a deep commitment to the success of our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
            {/* Image 1 */}
            <div className="overflow-hidden h-48 rounded-sm">
              <img 
                src="/assets/portfolio/port1.png" 
                alt="Business professionals in a meeting" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            
            {/* Image 2 */}
            <div className="overflow-hidden h-48 rounded-sm">
              <img 
                             src="/assets/portfolio/port2.png" 
                alt="Business professional reviewing documents" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            
            {/* Image 3 */}
            <div className="overflow-hidden h-48 rounded-sm">
              <img 
                               src="/assets/portfolio/port3.png" 

                alt="Business professionals in discussion" 
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consistent;