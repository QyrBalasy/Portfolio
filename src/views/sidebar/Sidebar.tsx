import React from 'react'
import { Link } from 'react-router-dom'
import { PathsMap } from '../../routes/routerPaths'

const Sidebar = () => {
  return (
    <nav className="flex w-24 flex-col bg-darkView1 justify-center">
      <Link to={PathsMap.home.get()}>Home</Link>
      <Link to={PathsMap.services.get()}>Service</Link>
      <Link to={PathsMap.cv.get()}>Cv</Link>
      <Link to={PathsMap.portfolio.get()}>Portfolio</Link>
      <Link to={PathsMap.blog.get()}>Blog</Link>
      <Link to={PathsMap.contact.get()}>Contact</Link>
    </nav>
  )
}
export default Sidebar