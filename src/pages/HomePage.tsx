import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from '../assets/icons/Icons'
import { Button } from '../components/UI/buttons'
import basicImg from '../media/imgs/man-img.png'
import { PathsMap } from '../routes/routerPaths'
 
const HomePage = () => {
  const PushButton = useNavigate()

  return (
    <section className="bg-white px-14 dark:bg-darkView1">
      <div className="flex justify-between gap-5">
        <article className="flex basis-2/3 flex-col gap-5 self-center">
          <h1 className="text-headline5XL dark:text-whiteFont">
            Привет! Я Сунгат - <span className="text-yellow">Фронтенд </span> разработчик
          </h1>
          <p className="text-default text-paragraphFont">
            Закончить работу можно однажды, но образование - никогда. Александр Дюма <br />
            One`s work may be finished someday, but one`s education never. Alexandre Dumas
          </p>
          <Button onClick={() => PushButton(PathsMap.contact.get())}>
            КОНТАКТЫ <ArrowRightIcon className="h-3 w-3" color="bg-darkBg" />
          </Button>
        </article>
        <div className="basis-1/3">
          <img src={basicImg} className="w-full" alt="HomePageImg" />
        </div>
      </div>
    </section>
  )
}
export default HomePage
