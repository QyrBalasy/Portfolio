import React from 'react'
import PricePlans from '../../pages/PricePlans'
import Services from '../../pages/Services'
import Footer from '../../components/footer'


const MyServices = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <Services />
      <PricePlans />
      <Footer/>
    </div>
  )
}
export default MyServices
