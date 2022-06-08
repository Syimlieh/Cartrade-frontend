import React from 'react'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Recommendations from '../../components/home/Recommendations'
import Services from '../../components/services/Services'
import ServiceSection from '../../components/services/ServiceSection'

const Home = () => {
  return (
    <div className=''>
        <Hero />
      {/* <Services /> */}
      <div className='relative'>
        <ServiceSection />
      </div>
      <Recommendations />
      <Footer />
    </div>
  )
}

export default Home