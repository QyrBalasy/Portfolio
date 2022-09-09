import React from 'react'
import Profile from '../../components/Simple/aside/Profile'
import About from '../../components/Simple/aside/About'
import SoftSkills, {ExtraSkills, HardSkills} from '../../components/Simple/aside/Skills'
import {Button} from '../../components/UI/buttons'
import {DownloadIcon} from '../../assets/icons/Icons'
import {Scrollbars} from 'react-custom-scrollbars-2'

//context

const Aside = () => {
  return (
    <aside className=" h-screen w-[305px] bg-darkView1 px-10">
      <Profile />
      {/* <div className="hideScroll mb-6 h-[calc(100vh-450px)] overflow-x-hidden overflow-y-scroll"> */}
      <Scrollbars
        renderThumbVertical={props => <div {...props} className="mr-2 rounded-lg bg-yellow" />}
        style={{height: 350}}
        thumbSize={50}>
        <hr className="h-px w-full border-none bg-darkView2" />
        <About />
        <hr className="h-px w-full border-none bg-darkView2" />
        <SoftSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
        <HardSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
        <ExtraSkills />
        <hr className="h-px w-full border-none bg-darkView2" />
      </Scrollbars>

      {/* </div> */}

      <Button>
        Download cv
        <DownloadIcon className="h-3 w-3" />
      </Button>
    </aside>
  )
}
export default Aside
