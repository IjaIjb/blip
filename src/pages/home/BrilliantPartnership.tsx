import React from 'react';

const PartnershipSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-[32px] font-[600] text-primary mb-8">
          Think brilliant Partnership. Think BLIP LLC
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Career Opportunities Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
           <img src='/assets/compass.svg' className='w-16 h-16' alt='' />
            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">Career Opportunities</h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              It's important to work at BLIP LLC because of the progressive international exposure and career development opportunities, opportunity for mentorship and to enhance soft skills needed to get ahead in life.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
             More Info
              </button>
            </div>
          </div>
          
          {/* Our Programmes Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
          <img src='/assets/dart-board-01.svg' className='w-16 h-16' alt='' />

            
            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">Our Programmes</h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              At BLIP LLC we collaborate with various educational institutions to expose students to real work by creating opportunities for internships. We do this through a variety of programs such as graduate programs and mentorship.
            </p>
            <div className="mt-auto">
              <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
                Programmes
              </button>
            </div>
          </div>
          
          {/* Our Culture Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
          <img src='/assets/heart-care-01.svg' className='w-16 h-16' alt='' />

            <h3 className="text-[#000000] font-[500] text-[32px] mb-3 ">Our Culture</h3>
            <p className="text-[#000000] tex-[20px] font-[300] mb-6 flex-grow">
              BLIP, being innovative and pioneering always, gets things done through a team of high resourceful individuals with the right caliber from diverse backgrounds and global experience.
            </p>
            <div className="mt-auto">
              <div className="flex justify-center mb-4">
              
              </div>
              <div className="mt-auto">
              <button className="w-full py-3 px-4 bg-[#D8D5D3A1]/[63%] rounded-full text-[#000000] text-[16px] font-[500] hover:bg-gray-200 transition-colors">
           Culture
              </button>
            </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-6'>
        <button className="text-white uppercase py-3 w-fit  px-8 bg-primary rounded-full  text-[16px] font-[500] hover:bg-primary/[80%] transition-colors">
            Get in touch
              </button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;