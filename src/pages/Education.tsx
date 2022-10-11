import React from "react";
import { Badge } from "../components/UI/text";

const Education = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Образование</h2>
          {/* <p className="mt-6">
            Раздел
          </p> */}
        </div>
        <EducationList />
      </div>
    </section>
  )
}
export default Education

const EducationList = () => {
  return (
    <div className="flex flex-col gap-7 divide-y divide-whiteFont bg-white py-10 px-8 dark:bg-darkView1">
      <div className="flex justify-between">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">КазНУ им.аль-Фараби</h4>
          <span className="flex gap-5">
            <p>Магистратура</p>
            <Badge>15.08.2017- 15.02.2019</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">Диплом об окончании магистратуры</h4>
          <p>Обучался я на магистратуре по специальности: Радиотехника-Электроника и Телекоммуникации</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">АУЭС</h4>
          <span className="flex gap-5">
            <p>Бакалавриат</p>
            <Badge>01.09.2013 - 05.06.2017</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">Диплом об окончаии бакалавриата</h4>
          <p>
            Обучался я на бакалавриате по специальности: Вычислительная Техника и Программное Обеспечение
          </p>
        </div>
      </div>
    </div>
  )
}