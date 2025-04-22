import React from 'react';

const PortfolioGrid = () => {
  const portfolioItems = [
    {
      id: 1,
      name: 'Urban',
      logo: '/assets/portfolio/urban.png',
      description: 'At Urban, we have noticed a significant transition to travel since primarily to the travel sector and can transform the market while demand remains the same. However, conversion and provide the ultimate connection for tourism for all people.'
    },
    {
      id: 2,
      name: 'Nipost',
      logo: '/assets/portfolio/nipost.png',
      description: 'Connecting partners through various delivery solutions and authentications of assets. Validation of commercial transactions across Nigeria. This has enabled rapid optimization.'
    },
    {
      id: 3,
      name: 'LearnX',
      logo: '/assets/portfolio/learnx.png',
      description: 'At LearnX, we believe that every child deserves quality education. We have invested time and resources in the youth of Nigeria. Our aim is to provide all child-focused business, education and leadership. Learn from the best in an accessible way.'
    },
    {
      id: 4,
      name: 'Nextmove',
      logo: '/assets/portfolio/n.png',
      description: 'We have significantly and innovatively contributed to the infrastructural challenges during the airports across Nigeria through our collaboration with the Federal Airport Authority of Nigeria (FAAN). This initiative has enabled convenient mobility of people and financial services plus points logging.'
    },
    {
      id: 5,
      name: 'Forge',
      logo: '/assets/portfolio/forge.png',
      description: 'Our adaptive affairs with Forge Ads has propelled our advertising advancement across the airports in Nigeria, bringing brands to the forefront of the market. We now tailor-made contents to surplant ideal customer parties more.'
    },
    {
      id: 6,
      name: 'FAAN',
      logo: '/assets/portfolio/faan.png',
      description: 'For over two years, craft footstep infrastructure with the Federal Airport Authority of Nigeria (FAAN) through Outdoor Activation of various access to transportation across the airports in Nigeria plus growing revenue and income through excellent retail and business service delivery.'
    }
  ];


  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-medium text-amber-800 mb-8">Our Growing Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item:any) => (
            <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm">
              <img src={item.logo} alt='' />
              
              <h3 className="font-[500] text-[28px] mt-4 mb-2">{item.name}</h3>
              
              <p className="text-[14px] font-[300] text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;