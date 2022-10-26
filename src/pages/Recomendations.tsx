import React, {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import StarRecomendations from '../components/Simple/Main/Recomendations/Stars'

const Recomendations = () => {
  return (
    <section>
      <div className="flex max-w-5xl flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Рекомендации</h2>
          <p className="mt-6">Отзывы, рекомендации коллег и клиентов</p>
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
      </Swiper>
    </div>
  )
}

//TODO: надо это в json закинуть и через цикл вытащить.

const RecomendationItems = () => {
  return (
    <div className="flex h-80 w-full justify-between gap-4">
      <div className="flex w-80 flex-col gap-4 bg-white p-6 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Отличный специалист!</h4>
        <p>
          Я работала с Сунгатом в одном отделе на Mybuh.kz. Сунгат отвечал за разработку сайта компании...
          {/* Сунгат отвечал за разработку сайта компании. Я с ним плотно работала как дизайнер и передавала ему макеты в разработку. Я очень рада, что мы оказались с ним в одной команде. Он очень ответсвенный и высококвалифицированный специалист в своей области. Задачи он выполняет в срок, и находил оптимальные решения в сложных задачах. */}
        </p>
        <div className="mt-auto flex justify-start gap-x-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span className="my-auto">
            <h4 className="dark:text-whiteFont">Роза Тукенова</h4>
            <p>UI/UX Дизайнер</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col gap-4 bg-white p-6 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Ответственный сортудник!</h4>
        <p>Наша компания благодарна Сунгату за успешное сотрудничество.</p>
        <div className="mt-auto flex justify-start gap-x-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span className="my-auto">
            <h4 className="dark:text-whiteFont">Алексей П.</h4>
            <p>Директор ТОО "Mybuh.kz"</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col gap-4 bg-white p-6 dark:bg-darkView1">
        <StarRecomendations />
        <h4 className="dark:text-whiteFont">Благодарен за работу!</h4>
        <p>Заказывал у Сунгата проект под реализацию систему для управления аквариумом.</p>
        <div className="mt-auto flex justify-start gap-x-7">
          <img
            className="h-20 w-20 rounded-[50%] object-fill"
            src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
            alt="slide 1"
          />
          <span className="my-auto">
            <h4 className="dark:text-whiteFont">Дулат Сексенбайулы</h4>
            <p>Клиент</p>
          </span>
        </div>
      </div>
    </div>
  )
}