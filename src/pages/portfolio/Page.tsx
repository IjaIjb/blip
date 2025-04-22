import React from 'react'
import Navbar from '../../component/Navbar'
import Hero from './Hero'
import Constistence from './Constistence'
import PortfolioGrid from './OurGrowing'
import Footer from '../../component/Footer'

const Page = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Constistence />
        <PortfolioGrid />
        <Footer />
    </div>
  )
}

export default Page