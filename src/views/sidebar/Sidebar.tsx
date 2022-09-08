import React, {ReactNode} from 'react'
import {NavLink} from 'react-router-dom'
import {BriefcaseIcon, CodeIcon, CommentsIcon, GraduationCapIcon, HomeIcon, PenIcon} from '../../assets/icons/Icons'
import {ToggleSwitch} from '../../components/UI/switch'
import {PathsMap} from '../../routes/routerPaths'

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
      path: PathsMap.home.get(),
      icon: <PenIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
    {
      title: 'Contact',
      path: PathsMap.contact.get(),
      icon: <CommentsIcon className="h-10 w-10 rounded-[50%] bg-yellow p-2" />,
    },
  ]
  return (
    <div className="flex flex-col justify-center bg-darkView1">
      <ToggleSwitch />
      <nav className="flex w-24 flex-col items-center justify-center gap-10">
        {SidebarData.map((items, index) => {
          return (
            <ul key={index}>
              <NavLink to={items.path}>
                {items.icon}
                {items.title}
              </NavLink>
            </ul>
          )
        })}
      </nav>
    </div>
  )
}
export default Sidebar
