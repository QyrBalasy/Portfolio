import React from 'react'

const SoftSkills = () => {
  const kzLang = 100,
    ruLang = 100
  const engLang = 60
  return (
    <div className='my-6'>
      <ul>
        <h4>Languages</h4>
        <li className="grid grid-cols-2">
          <p>Kazakh</p>
          <p className="text-right">{kzLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>Russian</p>
          <p className="text-right">{ruLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>English</p>
          <p className="text-right">{engLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
      </ul>
    </div>
  )
}
export default SoftSkills

export const HardSkills = () => {
  const kzLang = 100,
    ruLang = 100
  const engLang = 60
  return (
    <div className="my-6">
      <ul>
        <h4>HardSkills</h4>
        <li className="grid grid-cols-2">
          <p>Html</p>
          <p className="text-right">{kzLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>CSS</p>
          <p className="text-right">{ruLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>Js</p>
          <p className="text-right">{engLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>Php</p>
          <p className="text-right">{engLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
        <li className="grid grid-cols-2">
          <p>Wordpress</p>
          <p className="text-right">{engLang}%</p>
          <span className="col-span-2 h-2  w-full rounded border border-yellow bg-lightDark"></span>
        </li>
      </ul>
    </div>
  )
}

export const ExtraSkills = () => {
  const kzLang = 100,
    ruLang = 100
  const engLang = 60
  return (
    <div className="my-6">
      <ul>
        <h4>Extra Skills</h4>
        <li>Bootstrap, Materialize</li>
        <li>Stylus, Sass, Less</li>
        <li>Gulp, Webpack, Grunt</li>
        <li>GIT Knowledge</li>
      </ul>
    </div>
  )
}