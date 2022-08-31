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
    <div className="flex flex-col gap-y-2.5 my-6">
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
        <span>Kazakhstan, Almaty</span>
      </div>
    </div>
  )
}
export default About