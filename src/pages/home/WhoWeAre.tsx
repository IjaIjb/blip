import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState<any>('who');

  const tabs = [
    { id: 'who', label: 'Who we are' },
    { id: 'what', label: 'What we do' },
    { id: 'believe', label: 'What we believe' }
  ];

  const tabContents:any = {
    who: (
      <div className="mt-6">
        <p className="text-gray-800 mb-4">
          BLIP LLC is a high-market driven enterprise, providing financial, technological, and strategic advice to our clients. Our firm is built simply on two core businesses – Revenue Operations and Technology.
        </p>
        <p className="text-gray-800">
          We bring a unique combination of insights, expertise and innovations, enabling us to address our clients' most challenging assignments.
        </p>
      </div>
    ),
    what: (
      <div className="mt-6">
        <p className="text-gray-800 mb-4">
          At BLIP LLC, we believe in doing a few things and doing them well. This helps us excel in our purpose to serve our clients better than anyone else.
        </p>
        <p className="text-gray-800 mb-4">
          We help our clients by providing deep understanding of the sectors we cover, extensive network across the ecosystem and consistent success in closing complex deals - We are uniquely positioned to provide tailored, responsible and unbiased solutions.
        </p>
        <p className="text-gray-800">
          We bring our expertise in serving a wide range of clients including cutting-edge start-ups, established market leaders, major government departments and large global corporate entities.
        </p>
      </div>
    ),
    believe: (
      <div className="mt-6">
        <ol className="list-decimal pl-5 space-y-2 text-gray-800">
          <li>It is our expertise but it is your decision</li>
          <li>Total confidentiality outward but transparency inward</li>
          <li>Rigor in our analysis, but trust in our relationship</li>
          <li>Creativity and innovation bringing simple solutions to complex problems.</li>
        </ol>
      </div>
    )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex bg-gray-100 rounded-full w-fit flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full text-[20px]  transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-white font-[500]'
                : ' text-[#000000] font-[300] hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="mt-6 text-[#000000] text-[20px] font-[500]">
        {tabContents[activeTab]}
      </div>
    </div>
  );
};

export default TabComponent;