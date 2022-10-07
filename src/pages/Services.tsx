import React from 'react'
import {
  InternetMarketingIcon,
  PhotographerIcon,
  SoundDesignIcon,
  UxUiDesignIcon,
  VideoEditingIcon,
  WebDevelopmentIcon,
} from '../assets/icons/Icons'
import { Button } from '../components/UI/buttons'
import Cards from '../components/UI/cards'

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
  const ItemCardData = [
    {
      icon: <WebDevelopmentIcon className="w-12" color="#FFB400" />,
      Title: 'Вэб разработка',
      description: 'Блог, электронная коммерция',
    },
    {
      icon: <UxUiDesignIcon className="w-12" color="#FFB400" />,
      Title: 'UI/UX дизайн',
      description: 'Дизайн вэб сайтов и мобильных приложении',
    },
    {
      icon: <SoundDesignIcon className="w-12" color="#FFB400" />,
      Title: 'Контекстная реклама',
      description: 'Google, Yandex',
    },
    {
      icon: <PhotographerIcon className="w-12" color="#FFB400" />,
      Title: 'Фотографии',
      description: 'Продуктовые съёмка',

    },
    {
      icon: <VideoEditingIcon className="w-12" color="#FFB400" />,
      Title: 'Монтаж видео',
      description: 'Видеоролики для соц-сетей',
    },
    {
      icon: <InternetMarketingIcon className="w-12" color="#FFB400" />,
      Title: 'Джитал маркетинг',
      description: 'СММ, Таргетинг, Копирайтинг',
    },
  ]
  return (
    <div className="grid grid-cols-3 gap-5">
      {ItemCardData.map((item, key) => {
        return (
          <Cards className="bg-white dark:bg-darkView1" key={key}>
            <div>
              {item.icon}
              <h4 className="text-headlineLG dark:text-whiteFont">{item.Title}</h4>
            </div>
            <div>
              <p>{item.description}</p>
              <Button color="secondary">перейти</Button>
            </div>
          </Cards>
        )
      })}
    </div>
  )
}
