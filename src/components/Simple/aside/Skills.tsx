import React from 'react'
import ProgressBar, {ProgressBarDataType} from '../../UI/ProgressBar'

const ProgressBarData: ProgressBarDataType[] = [
  {
    Title: 'Soft Skills',
    Content: [
      {
        description: 'Kazakh',
        fill: '100',
        completed: '100',
      },
      {
        description: 'Russian',
        fill: '100',
        completed: '100',
      },
      {
        description: 'English',
        fill: '60',
        completed: '60',
      },
    ],
  },
  {
    Title: 'Hard Skills',
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
              <hr className="h-px w-full border-none bg-darkView2 mt-6" />
            </>
          )
        } return <ProgressBar key={index} Item={item} />
      })}
    </div>
  )
}
export default Skills

export const ExtraSkills = () => {
  return (
    <div className="my-6">
      <ul className="list-inside list-disc">
        <h4 className="mb-4 text-headlineLG">Extra Skills</h4>
        <li>Bootstrap, Materialize</li>
        <li>Sass, Less, Tailwind</li>
        <li>Gulp, Webpack</li>
        <li>GIT Knowledge</li>
        <li>Figma, Photoshop, Premiere Pro</li>
      </ul>
    </div>
  )
}
