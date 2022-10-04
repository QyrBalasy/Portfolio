import React from 'react'
import {CloneIcon} from '../../../assets/icons/Icons'
import ProgressBar, {ProgressBarDataType} from '../../UI/ProgressBar'

const ProgressBarData: ProgressBarDataType[] = [
  {
    Title: 'Софт скиллы',
    Content: [
      {
        description: 'Казахский',
        fill: '100',
        completed: '100',
      },
      {
        description: 'Русский',
        fill: '100',
        completed: '100',
      },
      {
        description: 'Английский',
        fill: '60',
        completed: '60',
      },
    ],
  },
  {
    Title: 'Хард Скиллы',
    Content: [
      {
        description: 'Html',
        fill: '100',
        completed: '100',
      },
      {
        description: 'CSS',
        fill: '100',
        completed: '100',
      },
      {
        description: 'Js',
        fill: '90',
        completed: '90',
      },
      {
        description: 'React',
        fill: '40',
        completed: '40',
      },
      {
        description: 'PHP',
        fill: '30',
        completed: '30',
      },
      {
        description: 'CMS WordPress',
        fill: '70',
        completed: '70',
      },
      {
        description: 'CMS Open-Card',
        fill: '70',
        completed: '70',
      },
      {
        description: 'CMS Bitrix',
        fill: '80',
        completed: '80',
      },
    ],
  },
]

const Skills = () => {
  return (
    <div>
      {ProgressBarData.map((item, index) => {
        if (item.Title === 'Soft Skills') {
          return (
            <>
              <ProgressBar key={index} Item={item} />
              <hr className="mt-6 h-px w-full border-none bg-lightBg" />
            </>
          )
        }
        return <ProgressBar key={index} Item={item} />
      })}
    </div>
  )
}
export default Skills

export const ExtraSkills = () => {
  return (
    <div className="my-6">
      <ul>
        <h4 className="darkMode-text mb-4 text-headlineLG">Прочие навыки</h4>
        {/* Эту хуету переписать надо */}
        <li className="flex items-center justify-start gap-x-4">
          <CloneIcon className="h-4 w-4" />
          <p className="text-paragraphFont dark:text-whiteFont">Bootstrap, Materialize</p>
        </li>
        <li className="flex items-center justify-start  gap-x-4">
          <CloneIcon className="h-4 w-4" />
          <p className="text-paragraphFont dark:text-whiteFont">Sass, Less, Tailwind</p>
        </li>
        <li className="flex items-center justify-start  gap-x-4">
          <CloneIcon className="h-4 w-4" />
          <p className="text-paragraphFont dark:text-whiteFont">Gulp, Webpack</p>
        </li>
        <li className="flex items-center justify-start  gap-x-4">
          <CloneIcon className="h-4 w-4" />
          <p className="text-paragraphFont dark:text-whiteFont">Git, GitLab</p>
        </li>
        <li className="flex items-center justify-start  gap-x-4">
          <CloneIcon className="h-4 w-4" />
          <p className="text-paragraphFont dark:text-whiteFont">Figma, Adobe (Ps,Ae,Pp)</p>
        </li>
      </ul>
    </div>
  )
}
