import React from 'react'
import {useNavigate} from 'react-router-dom'
import Quotes from '../API/quotesAPI/Quotes'
import {ArrowRightIcon} from '../assets/icons/Icons'
import {Button} from '../components/UI/buttons'
import {PathsMap} from '../routes/routerPaths'
import Scene from '../Scene'

const HomePage = () => {
  const PushButton = useNavigate()

  return (
    <section className="bg-white px-14 dark:bg-darkView1">
      <div className="flex justify-between gap-5">
        <article className="flex basis-2/3 flex-col gap-5 self-center">
          <h1 className="text-headline5XL dark:text-whiteFont">
            Привет! Я Сунгат - <span className="text-yellow">Фронтенд </span> разработчик
          </h1>
          <Quotes />
          <Button className="darkMode-text" onClick={() => PushButton(PathsMap.contact.get())}>
            КОНТАКТЫ <ArrowRightIcon className="h-3 w-3 dark:fill-white" color="fill-darkBg" />
          </Button>
        </article>
        <div className="basis-1/3">
          <Scene />
        </div>
      </div>
    </section>
  )
}
export default HomePage

