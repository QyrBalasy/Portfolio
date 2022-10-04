import React from "react";

const About = () => {
  let now = new Date()
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const dateBirth = new Date(1996, 5, 1)
  let dateBirthNow = new Date(today.getFullYear(), dateBirth.getMonth(), dateBirth.getDate())
  let currentAge

  currentAge = today.getFullYear() - dateBirth.getFullYear()
  if (today < dateBirthNow) {
    currentAge = currentAge - 1
  }
  return (
    <div className="my-6 flex flex-col gap-y-2.5">
      <div className="flex justify-between">
        <p className="darkMode-text bg-yellow px-2 py-0.5 text-default">Возраст:</p>
        <span className="darkMode-text">{currentAge}</span>
      </div>
      <div className="flex justify-between">
        <p className="darkMode-text bg-yellow px-2 py-0.5 text-default">Резиденство:</p>
        <span className="darkMode-text">KZ</span>
      </div>
      <div className="flex justify-between">
        <p className="darkMode-text bg-yellow px-2 py-0.5 text-default">Фриланс:</p>
        <span className="darkMode-text">Доступен</span>
      </div>
      <div className="flex justify-between whitespace-nowrap">
        <p className="darkMode-text bg-yellow px-2 py-0.5 text-default">Адрес:</p>
        <a href="https://goo.gl/maps/PqnuS8gEGmBwtuVY8" target={'_blank'} rel="noreferrer" className="darkMode-text">
          Алматы
        </a>
      </div>
    </div>
  )
}
export default About