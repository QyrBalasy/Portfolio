import React, {ReactNode} from 'react'
import {NavLink} from 'react-router-dom'
import {BriefcaseIcon, CodeIcon, CommentsIcon, GraduationCapIcon, HomeIcon, PenIcon} from '../../assets/icons/Icons'
import {ToggleSwitch} from '../../components/UI/switch'
import {PathsMap} from '../../routes/routerPaths'
import styled from 'styled-components'
import { Tooltip } from '../../components/UI/tooltip'


type SidebarDataT = {
  title: string
  path: string
  icon: ReactNode
}

const Sidebar = () => {
  const SidebarData: SidebarDataT[] = [
    {
      title: 'Home',
      path: PathsMap.home.get(),
      icon: <HomeIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Service',
      path: PathsMap.services.get(),
      icon: <CodeIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Cv',
      path: PathsMap.cv.get(),
      icon: <GraduationCapIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Portfolio',
      path: PathsMap.portfolio.get(),
      icon: <BriefcaseIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Blog',
      path: PathsMap.blog.get(),
      icon: <PenIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Contact',
      path: PathsMap.contact.get(),
      icon: <CommentsIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
  ]
  return (
    <div className="bg-darkView1 pt-[52px]">
      <div className="sticky top-0 flex h-screen flex-col justify-center py-12">
        <div className="w-28 py-5 px-0">
          <ToggleSwitch />
        </div>
        <nav>
          <ul className="flex w-28 flex-col gap-10 ">
            {SidebarData.map((items, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={items.path}
                    className="flex w-full flex-col items-center justify-center text-center"
                    style={({isActive}) => ({
                      color: isActive ? 'green' : 'blue',
                    })}>
                    {items.icon}
                    {/* {items.title} */}
                    {/* <Tooltip position="top">{items.title}</Tooltip> */}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Sidebar
