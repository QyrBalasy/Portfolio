import React from 'react'
import Footer from '../../components/footer'
import Containers from '../../components/UI/Containers'
import Contacts from '../../pages/Contacts'
import Education from '../../pages/Education'
import HomePage from '../../pages/HomePage'
import MyPortfolios from '../../pages/MyPortfolios'
import PricePlans from '../../pages/PricePlans'
import Recomendations from '../../pages/Recomendations'
import Services from '../../pages/Services'
import WorkHistory from '../../pages/WorkHistory'

const Home = () => {
  return (
    <Containers>
      <HomePage />
      <Services />
      <PricePlans />
      <Recomendations />
      <Education />
      <WorkHistory />
      <MyPortfolios />
      <Contacts />
      <Footer />
    </Containers>
  )
}
export default Home
