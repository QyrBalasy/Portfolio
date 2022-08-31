import React from 'react'
import Profile from '../../components/Simple/aside/Profile'
import About from '../../components/Simple/aside/About'
import Skills from '../../components/Simple/aside/Skills'
import ExrtaSkills from '../../components/Simple/aside/ExtraSkills'

const Aside = () => {
  return (
    <aside className=" w-[305px] bg-darkView1 px-10">
      <Profile />
      <hr className="h-px w-full border-none bg-darkView2" />
      <About />
      <hr className="h-px w-full border-none bg-darkView2" />
      <Skills />
      <hr className="h-px w-full border-none bg-darkView2" />
      <Skills />
      <hr className="h-px w-full border-none bg-darkView2" />
      <ExrtaSkills />
      <hr className="h-px w-full border-none bg-darkView2" />
    </aside>
  )
}
export default Aside
