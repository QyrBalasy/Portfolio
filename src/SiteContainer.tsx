import React from 'react'
import MainRouter from './routes/MainRouter'
import Aside from './views/aside/Aside'
import Sidebar from './views/sidebar/Sidebar'

const SiteContainer = () => {
  return (
    <div className="container mx-auto flex justify-between gap-x-7">
      <Aside />
      <MainRouter />
      <Sidebar />
    </div>
  )
}
export default SiteContainer
