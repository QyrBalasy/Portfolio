import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/UI/buttons'
import basicImg from '../media/imgs/man-img.png'
import { PathsMap } from '../routes/routerPaths'
 
const HomePage = () => {
  const PushButton = useNavigate()

  return (
    <section className="bg-darkView1 px-14">
      <div className="flex justify-between gap-5">
        <article className="flex basis-2/3 flex-col gap-5 self-center">
          <h1 className="text-headline5XL">
            I’m Sungat Shakarim <span className="text-yellow">Front-end</span> Developer
          </h1>
          <p className="text-default text-paragraphFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
            rutrum semper sed suspendisse nunc lectus.
          </p>
          <Button onClick={() => PushButton(PathsMap.contact.get())}>Hire ME!</Button>
        </article>
        <div className="basis-1/3">
          <img src={basicImg} className="w-full" alt="HomePageImg" />
        </div>
      </div>
    </section>
  )
}
export default HomePage
