import React from 'react'
import PricePlans from '../../pages/PricePlans'
import Services from '../../pages/Services'
import Footer from '../../components/footer'
import Containers from '../../components/UI/Containers'


const MyServices = () => {
  return (
    <Containers>
      <Services />
      <PricePlans />
      <Footer/>
    </Containers>
  )
}
export default MyServices
