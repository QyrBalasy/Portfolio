import React from 'react'
import {Button} from '../components/UI/buttons'
import basicImg from '../media/imgs/man-img.png'

//TODO: вынести в отдельный компонент карточек и передавать значения пропсами

const Services = () => {
  return (
    <section className="container px-14">
      <div className="flex flex-col gap-y-12">
        <div className="mx-auto w-96 text-center">
          <h2 className="text-headline3XL">My services</h2>
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
export default Services


const ItemCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <img className="h-[55px] w-[55px]" src="https://via.placeholder.com/55" />
        <h4 className="text-headlineLG">web development</h4>
        <p>blog, e-commerce</p>
      </div>
    </div>
  )
}
