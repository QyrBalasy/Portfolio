import React from 'react'
import Profile from '../../components/Simple/aside/Profile'
import About from '../../components/Simple/aside/About'
import Skills, { ExtraSkills } from '../../components/Simple/aside/Skills'
import {Button} from '../../components/UI/buttons'
import {DownloadIcon} from '../../assets/icons/Icons'
import {Scrollbars} from 'react-custom-scrollbars-2'


const Aside = () => {
  return (
    <aside className="w-[305px] bg-white dark:bg-darkView1">
      <div className="sticky top-0 flex flex-col gap-6 px-10">
        <Profile />
        <Scrollbars
          renderThumbVertical={props => <div {...props} className="mr-2 rounded-lg bg-yellow" />}
          autoHide={true}
          style={{height: `calc(100vh - 450px)`}}
          thumbSize={50}>
          <hr className="h-px w-full border-none bg-lightBg" />
          <About />
          <hr className="h-px w-full border-none bg-lightBg" />
          <Skills />
          <hr className="mt-6 h-px w-full border-none bg-lightBg" />
          <ExtraSkills />
          <hr className="mt-6 h-px w-full border-none bg-lightBg" />
        </Scrollbars>
        <Button className="darkMode-text">
          Download cv
          <DownloadIcon className="h-3 w-3 dark:fill-white" color="fill-lightDark" />
        </Button>
      </div>
    </aside>
  )
}
export default Aside
