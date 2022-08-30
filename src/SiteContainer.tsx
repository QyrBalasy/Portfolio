import React from 'react'
import MainRouter from './routes/MainRouter'
import Aside from './views/aside/Aside'
import Footer from './views/footer/Footer'
import Header from './views/header/Header'
import Sidebar from './views/sidebar/Sidebar'


const SiteContainer = () => {
  return (
    <div className="container max-w-7xl mx-auto flex justify-between">
      <Aside />
      <MainRouter />
      <Sidebar />
    </div>
  )
}
export default SiteContainer
