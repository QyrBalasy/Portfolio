import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { StarIcon } from '../assets/icons/Icons'

const Recomendations = () => {
  return (
    <section>
      <div className="flex max-w-5xl flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Рекомендации</h2>
          <p className="mt-6">
            Отзывы, рекомендации коллег и клиентов
          </p>
        </div>
        <SwiperSliderComponent />
      </div>
    </section>
  )
}
export default Recomendations

const SwiperSliderComponent = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        className={'h-[370px]'}
        onSlideChange={() => console.log('slider changed')}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide>
          <RecomendationItems />
        </SwiperSlide>
        <SwiperSlide>
          <RecomendationItems />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

const RecomendationItems = () => {
  return (
    <div className="flex h-[320px] w-full justify-between gap-4">
      <div className="flex w-80 flex-col justify-center gap-4 bg-white px-6 py-4 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Отличный специалист!</h4>
        <p>
          Я работала с Сунгатом в одном отделе на Mybuh.kz. 
          
          {/* Сунгат отвечал за разработку сайта компании. Я с ним плотно работала как дизайнер и передавала ему макеты в разработку. Я очень рада, что мы оказались с ним в одной команде. Он очень ответсвенный и высококвалифицированный специалист в своей области. Задачи он выполняет в срок, и находил оптимальные решения в сложных задачах. */}
        </p>
        <div className="flex justify-start gap-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span>
            <h4 className="dark:text-whiteFont">Роза Тукенова</h4>
            <p>UI/UX Дизайнер</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col justify-center gap-4 bg-white px-6 py-4 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Ответственный сортудник!</h4>
        <p>
          Наша компания благодарна Сунгату за успешное сотрудничество.
        </p>
        <div className="flex justify-start gap-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span>
            <h4 className="dark:text-whiteFont">Алексей Попадченко</h4>
            <p>Директор ТОО "Mybuh.kz"</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col justify-center gap-4 bg-white px-6 py-4 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Amazing work!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.
          Morbi donec amet....
        </p>
        <div className="flex justify-start gap-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span>
            <h4 className="dark:text-whiteFont">Talan Westervelt</h4>
            <p>Business man</p>
          </span>
        </div>
      </div>
    </div>
  )
}

const StarRecomendations = () => {
  return (
    <tbody>
      <tr>
        <td>
          <StarIcon className="w-5" color="#FFB400" />
        </td>
        <td>
          <StarIcon className="w-5" color="#FFB400" />
        </td>
        <td>
          <StarIcon className="w-5" color="#FFB400" />
        </td>
        <td>
          <StarIcon className="w-5" color="#FFB400" />
        </td>
        <td>
          <StarIcon className="w-5" color="#FFB400" />
        </td>
      </tr>
    </tbody>
  )
}