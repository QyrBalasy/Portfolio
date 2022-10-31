import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import {CheckIcon} from '../assets/icons/Icons'
import { Button } from '../components/UI/buttons'
import { PathsMap } from '../routes/routerPaths'

const PricePlans = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Прайс лист</h2>
          <p className="mt-6">
            Важно! Цены приведены с учетом определенных услуг. Если нужно что-то комплексное, цена оговаривается
            индивидуально.
          </p>
        </div>
        <div className="flex flex-row gap-5">
          {cardsData.map((props, index) => {
            return <PriceCard {...props} key={index} />
          })}
          
        </div>
      </div>
    </section>
  )
}
export default PricePlans

type PriceCardType = {
  type?: string
  title?: string
  description?: string
  price?: number
  mostPopular?: boolean
  data?: string[]
}

const cardsData: PriceCardType[] = [
  {
    type: 'silver',
    title: 'серебрянный',
    description: 'Верстка макета согласно дизайну и интеграция с АПИ',
    price: 4.5,
    mostPopular: false,
    data: ['Вэб-разработка'],
  },
  {
    type: 'gold',
    title: 'золотой',
    description: 'Для большинство компании который хотят редизайн своего сайта',
    price: 6.5,
    mostPopular: true,
    data: ['Вэб-дизайн', 'Вэб-разработка', 'SEO оптизимация'],
  },
  {
    type: 'diamond',
    title: 'алмазный',
    description: 'Комплексная разработка под ключ',
    price: 10.00,
    mostPopular: false,
    data: [
      'Вэб-дизайн',
      'Вэб-разработка',
      'SEO оптизимация',
      'Копирайтинг',
      'Интеграция на CMS',
    ],
  },
]


const PriceCard: FC<PriceCardType> = props => {
  const PushButton = useNavigate()
  return (
    <div className="relative flex basis-1/3 flex-col gap-y-5 bg-white px-6 pt-12 pb-6 text-center dark:bg-darkView1">
      {props.mostPopular ? (
        <span className="absolute top-0 left-0 w-full bg-yellow py-1 text-lightDark">Популярный</span>
      ) : null}
      <h3 className="text-headline2XL dark:text-whiteFont">{props.title}</h3>
      <span>
        <h2 className="text-headline3XL dark:text-whiteFont">${props.price}</h2>
        <p>/ч</p>
      </span>
      <p>{props.description}</p>
      <CardFeatures data={props.data} />
      {props.mostPopular ? (
        <Button color="secondary" className="mx-auto mt-auto" onClick={() => PushButton(PathsMap.contact.get())}>
          связаться
        </Button>
      ) : (
        <Button color="primary" className="mx-auto mt-auto" onClick={() => PushButton(PathsMap.contact.get())}>
          связаться
        </Button>
      )}
    </div>
  )
}


const CardFeatures: FC<PriceCardType> = ({data}) => {
  return (
    <>
      <ul className="divide-y divide-whiteFont">
        {data?.map((item, index) => {
          return (
            <li className="flex items-center gap-4 py-2" key={index}>
              <CheckIcon className="h-3 w-4" color="#FFB400" />
              <p className="dark:text-whiteFont">{item}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

