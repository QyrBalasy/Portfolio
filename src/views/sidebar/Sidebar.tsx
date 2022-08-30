import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <nav className='flex flex-col'>
      <Link to="./home">Home</Link>
      <Link to="./service">Service</Link>
      <Link to="./cv">Cv</Link>
      <Link to="./portfolio">Portfolio</Link>
      <Link to="./blog">Blog</Link>
      <Link to="./contact">Contact</Link>
    </nav>
  )
}
export default Sidebar