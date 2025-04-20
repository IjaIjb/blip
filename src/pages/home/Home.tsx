import React from 'react'
import Navbar from '../../component/Navbar'
import HeroSection from './Hero'
import VerticalFocusSection from './ExclusiveFocus'
import PartnershipSection from './BrilliantPartnership'
import TabComponent from './WhoWeAre'
import Footer from '../../component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <VerticalFocusSection />
        <PartnershipSection />
        <TabComponent />
<Footer />
    </div>
  )
}

export default Home