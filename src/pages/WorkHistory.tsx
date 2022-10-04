import React from 'react'
import { Badge } from '../components/UI/text'

const WorkHistory = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Опыт работы</h2>
          <p className="mt-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. lorem ipsum
          </p>
        </div>
        <WorkHistoryList />
      </div>
    </section>
  )
}
export default WorkHistory


const WorkHistoryList = () => {
  return (
    <div className="flex flex-col gap-7 divide-y divide-whiteFont bg-white py-10 px-8 dark:bg-darkView1">
      <div className="flex justify-between">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">ТОО "Mybuh.kz"</h4>
          <span className="flex gap-5">
            <p>Фронтэнд разработчик</p>
            <Badge>01.05.2022 - 12.09.2022</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">
            Поддержка и развитие вэб-сервиса: cabinet.mybuh.kz
          </h4>
          <p>
            - Занимаюсь разработкой фронтовой части для нового вэб сервиса, переписываю компоненты. Документирую и
            собираю UI компоненты в Storybook. - Частично занимаюсь рефакторингом некоторых устаревших библиотек. На
            данный момент переписываю формы с Redux Form на Formik.
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">ТОО "Mybuh.kz"</h4>
          <span className="flex gap-5">
            <p>Вэб разработчик</p>
            <Badge>08.10.2021 - 01.05.2022</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">Поддержка и развитие сайта: mybuh.kz</h4>
          <p>
            Занимался поддержкой и развитием сайта mybuh.kz: -Верстал макеты страниц по дизайну, чекал их на
            PixelPerfect, собирал верстку на GULP. - Занимался версткой редизайна. Переписал шаблон темы, натягивал свою
            верстку на CMS Bitrix. - Занимался поддержкой имеющихся модулей внутри CMS. - Занимался некоторой
            административной частью внутри CMS (распределение прав пользователей, бэкап, обновление и тд). - Занимался
            менеджментом поставленных задач между исполнителями. Составлял и тречил таски.
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">КГУ "Государственный архив города Алматы"</h4>
          <span className="flex gap-5">
            <p>Инженер-программист</p>
            <Badge>01.04.2019 - 01.02.2022</Badge>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">Инженерные работы по обеспечению бесперебойной работы учреждения</h4>
          <p>
            - Разработка, внедрение, эксплуатация и модернизация программного обеспечения ЭЕАД (электронный архив единой
            документации); - Организация приема и передачи данных между программным обеспечением ЭЕАД - e-Акимат; -
            Администрирование операционных систем Windows; - Обеспечение бесперебойного функционирования серверного
            оборудования; - Работа с сетями и оборудованием (Mikrotik); - Разработка и внедрение сайта; - СММ, Таргетинг
            и продвижение организации в социальных сетях;
          </p>
        </div>
      </div>
    </div>
  )
}
