import React from 'react'
import {CheckIcon, XmarkIcon} from '../assets/icons/Icons'
import {Button} from '../components/UI/buttons'

//TODO: вынести в отдельный компонент карточек и передавать значения пропсами

const PricePlans = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL">Price plans</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <ItemCard />
      </div>
    </section>
  )
}
export default PricePlans

const ItemCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      <div className="flex min-h-[225px] flex-col items-center justify-center gap-6 bg-darkView1 pb-6 text-center">
        <span className="w-full bg-yellow py-1 text-paragraphFont">Most popular</span>
        <h3 className="text-headline2XL">Silver</h3>
        <span>
          <h2 className="text-headline3XL">$0.00</h2>
          <p>/hour</p>
        </span>
        <p className="px-6">For most businesses that want to optimize web queries</p>
        <ul className="grid w-full grid-cols-1 divide-y divide-whiteFont px-6 text-left">
          <li className="flex items-center gap-4 py-2">
            <CheckIcon className="h-3 w-4" color="#FFB400" />
            <p className="text-white">UI Design</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <CheckIcon className="h-3 w-4" color="#FFB400" />
            <p className="text-white">Web development</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>Logo design</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>Seo optimization</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>WordPress integration</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>5 Websites</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>Unlimited user</p>
          </li>
          <li className="flex items-center gap-4 py-2">
            <XmarkIcon className="h-3 w-4" color="#767676" />
            <p>20 gB bandwith</p>
          </li>
        </ul>
        <Button color="secondary">Order now</Button>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <h3 className="text-headline2XL">gold</h3>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <h3 className="text-headline2XL">dimond</h3>
        <p>blog, e-commerce</p>
      </div>
    </div>
  )
}
