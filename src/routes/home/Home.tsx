import React from 'react'
import Footer from '../../components/footer'
import HomePage from '../../pages/HomePage'
import PricePlans from '../../pages/PricePlans'
import Services from '../../pages/Services'

const Home = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <HomePage />
      <Services />
      <PricePlans />
      <Footer/>
    </div>
  )
}
export default Home
