import React from 'react'
import { InternetMarketingIcon, PhotographerIcon, SoundDesignIcon, UxUiDesignIcon, VideoEditingIcon, WebDevelopmentIcon } from '../assets/icons/Icons'
import {Button} from '../components/UI/buttons'
import basicImg from '../media/imgs/man-img.png'

//TODO: вынести в отдельный компонент карточек и передавать значения пропсами

const Services = () => {
  return (
    <section>
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
        <WebDevelopmentIcon className="w-12" />
        <h4 className="text-headlineLG">Web development</h4>
        <p>blog, e-commerce</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <UxUiDesignIcon className="w-12" />
        <h4 className="text-headlineLG">UI/UX design</h4>
        <p>Mobile app, website design</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <SoundDesignIcon className="w-12" />
        <h4 className="text-headlineLG">Sound design</h4>
        <p>Voice Over, Beat Making</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <PhotographerIcon className="w-12" />
        <h4 className="text-headlineLG">Photography</h4>
        <p>portrait, product photography</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <VideoEditingIcon className="w-12" />
        <h4 className="text-headlineLG">Video editing</h4>
        <p>Instagram reels, tiktok videos</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-darkView1">
        <InternetMarketingIcon className="w-12" />
        <h4 className="text-headlineLG">Internet marketing</h4>
        <p>SMM, Targeting</p>
      </div>
    </div>
  )
}
