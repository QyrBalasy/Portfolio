import React from 'react'
import { Button } from '../components/UI/buttons'
import basicImg from '../media/imgs/man-img.png'
 
const HomePage = () => {
  return (
    <section className="bg-darkView1 px-14">
      <div className="flex justify-between gap-5">
        <article className="flex flex-col gap-5 self-center basis-2/3">
          <h1 className="text-headline5XL">
            I’m Sungat Shakarim <span className="text-yellow">Front-end</span> Developer
          </h1>
          <p className="text-default text-paragraphFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
            rutrum semper sed suspendisse nunc lectus.
          </p>
          <Button>Hire ME!</Button>
        </article>
        <div className="basis-1/3">
          <img src={basicImg} className="w-full" alt="HomePageImg" />
        </div>
      </div>
    </section>
  )
}
export default HomePage
