import React from 'react'
import MainRouter from './routes/MainRouter'
import Aside from './views/aside/Aside'
import Sidebar from './views/sidebar/Sidebar'


const SiteContainer = () => {
  return (
    <div className="container bg-[#18191A]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Aside />
        <MainRouter />
        <Sidebar />
      </div>
    </div>
  )
}
export default SiteContainer
