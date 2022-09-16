import React from "react";
import { Badge } from "../../UI/text";

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
        <Badge>age:</Badge>
        <span>{currentAge}</span>
      </div>
      <div className="flex justify-between">
        <Badge>Residence:</Badge>
        <span>KZ</span>
      </div>
      <div className="flex justify-between">
        <Badge>Freelance:</Badge>
        <span>Available</span>
      </div>
      <div className="flex justify-between whitespace-nowrap">
        <Badge>Address:</Badge>
        <a href="https://goo.gl/maps/PqnuS8gEGmBwtuVY8" target={"_blank"} rel="noreferrer">Almaty</a>
      </div>
    </div>
  )
}
export default About