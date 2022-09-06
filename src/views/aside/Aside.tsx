import React from 'react'
import Profile from '../../components/Simple/aside/Profile'
import About from '../../components/Simple/aside/About'
import SoftSkills, { ExtraSkills, HardSkills } from '../../components/Simple/aside/Skills'
import { Button } from '../../components/UI/buttons'
import { DownloadIcon } from '../../assets/icons/Icons'

const Aside = () => {
  return (
    <aside className=" w-[305px] bg-darkView1 px-10">
      <Profile />
      <hr className="h-px w-full border-none bg-darkView2" />
      <About />
      <hr className="h-px w-full border-none bg-darkView2" />
      <SoftSkills />
      <hr className="h-px w-full border-none bg-darkView2" />
      <HardSkills />
      <hr className="h-px w-full border-none bg-darkView2" />
      <ExtraSkills />
      <hr className="h-px w-full border-none bg-darkView2" />
      <Button>
        Download cv
        <DownloadIcon className='w-3 h-3' />
      </Button>
    </aside>
  )
}
export default Aside
