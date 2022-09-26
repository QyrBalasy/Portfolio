import React, {ReactNode} from 'react'
import {NavLink} from 'react-router-dom'
import {BriefcaseIcon, CodeIcon, CommentsIcon, GraduationCapIcon, HomeIcon, PenIcon} from '../../assets/icons/Icons'
import {ToggleSwitch} from '../../components/UI/switch'
import {PathsMap} from '../../routes/routerPaths'
import ThemeContext from '../../context/ThemeContext'
import Tooltip from '../../components/UI/tooltip'

type SidebarDataT = {
  title: string
  path: string
  icon: ReactNode
}

const Sidebar = () => {
  const SidebarData: SidebarDataT[] = [
    {
      title: 'Home',
      path: PathsMap.root.get(),
      icon: <HomeIcon className="h-8 w-8 p-2" />,
    },
    {
      title: 'Service',
      path: PathsMap.services.get(),
      icon: <CodeIcon className="h-8 w-8  p-2" />,
    },
    {
      title: 'Cv',
      path: PathsMap.cv.get(),
      icon: <GraduationCapIcon className="h-8 w-8 p-2" />,
    },
    {
      title: 'Portfolio',
      path: PathsMap.portfolio.get(),
      icon: <BriefcaseIcon className="h-8 w-8 p-2" />,
    },
    {
      title: 'Blog',
      path: PathsMap.blog.get(),
      icon: <PenIcon className="h-8 w-8 p-2" />,
    },
    {
      title: 'Contact',
      path: PathsMap.contact.get(),
      icon: <CommentsIcon className="h-8 w-8 p-2" />,
    },
  ]
  const {currentTheme, changeCurrentTheme} = React.useContext(ThemeContext)
  return (
    <div className="bg-white pt-[52px] dark:bg-darkView1">
      <div className="sticky top-0 flex h-screen flex-col justify-center py-12">
        <div className="w-28 py-5 px-0 text-center">
          <ToggleSwitch onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')} />
        </div>
        <nav>
          <ul className="flex w-28 flex-col gap-10 ">
            {SidebarData.map((items, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={items.path}
                    className="relative mx-auto flex h-10 w-10 flex-col items-center justify-center rounded-[50%] text-center"
                    style={({isActive}) => ({
                      backgroundColor: isActive ? '#FFB400' : '#767676',
                    })}>
                    <Tooltip content={items.title}>
                      {items.icon}
                    </Tooltip>
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


