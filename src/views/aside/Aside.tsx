import React from 'react'
import Profile from '../../components/Simple/aside/Profile'
import About from '../../components/Simple/aside/About'
import SoftSkills, { ExtraSkills, HardSkills } from '../../components/Simple/aside/Skills'
import { Button } from '../../components/UI/buttons'
import { DownloadIcon } from '../../assets/icons/Icons'

const Aside = () => {
  return (
    <aside className=" h-screen w-[305px] bg-darkView1 px-10">
      <Profile />
      <div className="hideScroll mb-6 h-[calc(100vh-450px)] overflow-x-hidden overflow-y-scroll">
        <hr className="h-px w-full border-none bg-darkView2" />
        <About />
        <hr className="h-px w-full border-none bg-darkView2" />
        <SoftSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
        <HardSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
        <ExtraSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
      </div>

      <Button>
        Download cv
        <DownloadIcon className="h-3 w-3" />
      </Button>
    </aside>
  )
}
export default Aside
