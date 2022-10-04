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
          <h2 className="text-headline3XL dark:text-whiteFont">Мои навыки</h2>
          <p className="mt-6">
            В данном разделе приведены, мои ключевые навыки с которыми мы можем взаимодействовать с вами!
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
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <WebDevelopmentIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">Вэб разработка</h4>
        <p>Блог, электронная коммерция</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <UxUiDesignIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">UI/UX дизайн</h4>
        <p>Дизайн вэб сайтов и мобильных приложении</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <SoundDesignIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">Контекстная реклама</h4>
        <p>Google, Yandex</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <PhotographerIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">Фотографии</h4>
        <p>Продуктовые съёмки</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <VideoEditingIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">Монтаж видео</h4>
        <p>Видеоролики для соц-сетей</p>
      </div>
      <div className="flex min-h-[225px] cursor-pointer flex-col items-center justify-center gap-4 bg-white dark:bg-darkView1">
        <InternetMarketingIcon className="w-12" color="#FFB400" />
        <h4 className="text-headlineLG dark:text-whiteFont">Джитал маркетинг</h4>
        <p>СММ, Таргетинг, Копирайтинг</p>
      </div>
    </div>
  )
}
