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
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL">Recomendations</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <SwiperSliderComponent />
      </div>

      {/* <RecomendationItems /> */}
    </section>
  )
}
export default Recomendations

const SwiperSliderComponent = () => {
  return (
    <div className='container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slider changed')}
        onSwiper={swiper => console.log(swiper)}>
        <SwiperSlide>
          <RecomendationItems />
        </SwiperSlide>
        <SwiperSlide>
          <RecomendationItems />
        </SwiperSlide>
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
    <div className="flex w-full justify-center gap-4">
      <div className="flex w-80 flex-col justify-center gap-4 bg-darkView1 px-6 py-4">
        <StarRecomendations />
        <h4>Great Quality!</h4>
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
            <h4>James Gouse</h4>
            <p>Graphic Designer</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col justify-center gap-4 bg-darkView1 px-6 py-4">
        <StarRecomendations />
        <h4>Amazing work!</h4>
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
            <h4>Tiana Philips</h4>
            <p>Photographer</p>
          </span>
        </div>
      </div>
      <div className="flex w-80 flex-col justify-center gap-4 bg-darkView1 px-6 py-4">
        <StarRecomendations />
        <h4>Amazing work!</h4>
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
            <h4>Talan Westervelt</h4>
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