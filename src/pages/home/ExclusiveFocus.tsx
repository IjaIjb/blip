import React, { useState } from "react";

const VerticalFocusSection = () => {
  const [activeVertical, setActiveVertical] = useState(null);

  const verticals = [
    {
      id: "advice",
      title: "Advice",
      icon: "/assets/user-heart-02.svg",
      content:
        "We have a deep understanding of the markets in which we operate, which combined with our industry and product knowledge, enables us to offer our clients innovative solutions to help them achieve their strategic goals. Our extensive advisory services include RevOps and advising, arranging and facilitating capital in the verticals we operate through B2B, Public Private Partnerships (PPPs), and Equity Offerings. We furthermore offer sponsor services to governments and private sector players.",
    },
    {
      id: "finance",
      title: "Finance",
      icon: "/assets/Finance Icons.svg",
      content:
        "Our highly-skilled teams work across asset classes, industries and currencies to advise, structure, arrange, underwrite, distribute and provide funding across our clients' capital structures. Our highly-skilled teams work across asset classes, industries and currencies to advise, structure, arrange, underwrite, distribute and provide funding across our clients' capital structures.",
    },
    {
      id: "travel",
      title: "Travel",
      icon: "/assets/travel.svg",
      content:
        "Travel, Transport and logistics play a critical part in growing the economy, as many other sectors are reliant on logistics and transport as a key part of their value chain to deliver goods and services. The importance of scale and delivery in this sector is key, as technology enables opportunities to create operational efficiencies and evolve business. Digitization, shifts in international trade, changes in markets' domestic commerce, along with automation process changes all impact the transport and logistics sector. Our travel, transport and logistics sector experts offer clients financial advice and support for growth and expansion across Africa.",
    },
    {
      id: "revops",
      title: "RevOps",
      icon: "/assets/revops.svg",
      content:
        "Travel, Transport and logistics play a critical part in growing the economy, as many other sectors are reliant on logistics and transport as a key part of their value chain to deliver goods and services. The importance of scale and delivery in this sector is key, as technology enables opportunities to create operational efficiencies and evolve business. Digitization, shifts in international trade, changes in markets' domestic commerce, along with automation process changes all impact the transport and logistics sector. Our travel, transport and logistics sector experts offer clients financial advice and support for growth and expansion across Africa.",
    },
    {
      id: "technology",
      title: "Technology",
      icon: "/assets/technology.svg",
      content:
        "We continually invest in state-of-the-art infrastructure and business technology to enable clients to process transactions and information services digitally and more efficiently. Our online travel and financial platform and flexible B2B, B2G offer clients secure, controlled, real-time access to bitable financial solutions. We offer our clients an omni channel experience which gives them access to a range of bitable financial channels, travel tools and solutions.",
    },
  ];

  const handleLearnMore = (id: any) => {
    if (activeVertical === id) {
      setActiveVertical(null); // Toggle off if already active
    } else {
      setActiveVertical(id);
    }
  };

  return (
    <section className="py-16  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="md:text-[32px] text-[20px] font-bold text-primary mb-12">
        Exclusive Focus on Select Verticals
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {verticals.map((vertical) => {
          const isActive = activeVertical === vertical.id;
          const isInactive = activeVertical !== null && !isActive;

          return (
            <div
              key={vertical.id}
              className={`flex flex-col items-center transition-opacity duration-300 ${
                isInactive ? "opacity-50" : "opacity-100"
              }`}
            >
              <h3
                className={`text-[#000000] font-[500] md:text-[32px] text-[20px] text-center ${
                  isInactive ? "text-gray-500" : ""
                }`}
              >
                {vertical.title}
              </h3>
              <div className="w-[140px] h-[140px] flex justify-center">
                <img
                  src={vertical.icon}
                  alt={vertical.title}
                  className={`transition-filter duration-300 ${
                    isInactive ? "grayscale" : ""
                  }`}
                />
              </div>
              <button
                className={`text-[16px] mt-3 font-[400] border rounded-full px-4 py-1 transition-colors ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "border-primary text-[#000000] hover:bg-primary/[70%] hover:text-white"
                }`}
                onClick={() => handleLearnMore(vertical.id)}
              >
                {isActive ? "Close" : "Learn More"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Conditional content section */}
      {activeVertical && (
        <div className="max-w-[950px] mx-auto mb-12 bg-gray-50 py-6 rounded-lg shadow-sm transform transition-all duration-300 ease-in-out">
          <h3 className="text-[24px] font-[500] mb-4 text-primary">
            {verticals.find((v) => v.id === activeVertical)?.title}
          </h3>
          <p className="max-w-[900px] text-[24px] font-[400] mx-auto text-[#000000]">
            {verticals.find((v) => v.id === activeVertical)?.content}
          </p>
        </div>
      )}

      {/* Default description if no vertical is selected */}
      {!activeVertical && (
        <div className="max-w-[950px] text-[24px] font-[400] mx-auto text-[#000000]">
          <p className="mb-4">
            At BLIP LLC our thinking digs deeper and sees further. It's an
            approach we call Solutionist Thinking: A can-do mindset that is
            considered and innovative, curious and resilient, with a passion for
            possibilities.
          </p>
          <p>
            It constantly challenges the conventional and embraces the power of
            collective thinking to unlock unique opportunities for our clients.
            It's the magic that inspires everything we do.
          </p>
        </div>
      )}
    </section>
  );
};

export default VerticalFocusSection;
