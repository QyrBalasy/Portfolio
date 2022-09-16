import React from 'react'
import ProgressBar from '../../UI/ProgressBar'

const ProgressBarData = [
  {Title: 'Kazakh', fill: '100', completed: '100'},
  {Title: 'Russian', fill: '100', completed: '100'},
  {Title: 'English', fill: '60', completed: '60'},
]

// type SkillsDataType = {
//   SkillsTitle?: string
//   ProgressBarType?: {
//     Title: string
//     completed: string
//     fill: string
//   }[]
// }

// TODO: must be combined into one large object

const Skills = () => {
  // const SkillsData: SkillsDataType[] = [
  //   {
  //     SkillsTitle: 'SoftSkills',
  //     ProgressBarType: [
  //       {Title: 'Kazakh', fill: '100', completed: '100'},
  //       {Title: 'Russian', fill: '100', completed: '100'},
  //       {Title: 'English', fill: '60', completed: '60'},
  //     ],
  //   },
  //   {
  //     SkillsTitle: 'HardSkills',
  //     ProgressBarType: [
  //       {Title: 'Html', fill: '100', completed: '100'},
  //       {Title: 'CSS', fill: '100', completed: '100'},
  //       {Title: 'Js', fill: '90', completed: '90'},
  //       {Title: 'PHP', fill: '40', completed: '40'},
  //       {Title: 'WordPress', fill: '70', completed: '70'},
  //       {Title: 'Bitrix', fill: '90', completed: '90'},
  //     ],
  //   },
  // ]

  return (
    <div>
      <ul>
        <h4 className='text-whiteFont text-headlineLG'>Languages</h4>
        {ProgressBarData.map((item, index) => (
          <ProgressBar key={index} Title={item.Title} completed={item.completed} fill={item.fill} />
        ))}
      </ul>
    </div>
  )
}
export default Skills

// export const ExtraSkills = () => {
//   const kzLang = 100,
//     ruLang = 100
//   const engLang = 60
//   return (
//     <div className="my-6">
//       <ul>
//         <h4>Extra Skills</h4>
//         <li>Bootstrap, Materialize</li>
//         <li>Stylus, Sass, Less</li>
//         <li>Gulp, Webpack, Grunt</li>
//         <li>GIT Knowledge</li>
//       </ul>
//     </div>
//   )
// }
