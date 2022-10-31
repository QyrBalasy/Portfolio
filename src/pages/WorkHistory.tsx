import React from 'react'
import {Badge} from '../components/UI/text'

const WorkHistory = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-12 ">
        <div className="mx-auto w-96 text-center ">
          <h2 className="text-headline3XL dark:text-whiteFont">Опыт работы</h2>
        </div>
        <WorkHistoryList />
      </div>
    </section>
  )
}
export default WorkHistory

const WorkHistoryList = () => {
  return (
    <div className="flex flex-col gap-7 divide-y divide-lightBg bg-white py-10 px-8 dark:divide-white dark:bg-darkView1">
      <div className="flex justify-between gap-x-5">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">ТОО "Mybuh.kz"</h4>
          <span className="flex justify-between gap-x-1">
            <p className="basis-2/5">Фронтэнд разработчик</p>
            <p className="darkMode-text self-center bg-yellow px-2 py-0.5 text-defaultXS">01.05.2022 - 12.09.2022</p>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">
            Поддержка и развитие вэб-сервиса: &nbsp;
            <a href="https://cabinet.mybuh.kz/login/" className="underline" target={'_blank'} rel="noreferrer">
              cabinet.mybuh.kz
            </a>
          </h4>
          <ul className="list-decimal space-y-1 pl-5 marker:text-darkFont">
            <li>
              <p>Занимаюсь разработкой фронтовой части для нового вэб сервиса, переписываю компоненты.</p>
            </li>
            <li>
              <p>Документирую и собираю UI компоненты в Storybook.</p>
            </li>
            <li>
              <p>
                Частично занимаюсь рефакторингом некоторых устаревших библиотек. На данный момент переписываю формы с
                Redux Form на Formik.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-x-5 pt-7">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">ТОО "Mybuh.kz"</h4>
          <span className="flex justify-between gap-x-1">
            <p className="basis-2/5">Вэб разработчик</p>
            <p className="darkMode-text self-center bg-yellow px-2 py-0.5 text-defaultXS">08.10.2021 - 01.05.2022</p>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">
            Поддержка и развитие сайта: &nbsp;
            <a href="https://mybuh.kz/" className="underline" target={'_blank'} rel="noreferrer">
              mybuh.kz
            </a>
          </h4>
          <ul className="list-decimal space-y-1 pl-5 marker:text-darkFont">
            <li>
              <p>Верстал макеты страниц по дизайну, чекал их на PixelPerfect, собирал верстку на GULP.</p>
            </li>
            <li>
              <p>Занимался версткой редизайна. Переписал шаблон темы, натягивал свою верстку на CMS Bitrix.</p>
            </li>
            <li>
              <p>Занимался поддержкой имеющихся модулей внутри CMS.</p>
            </li>
            <li>
              <p>
                Занимался некоторой административной частью внутри CMS (распределение прав пользователей, бэкап,
                обновление и тд).
              </p>
            </li>
            <li>
              <p>Занимался менеджментом поставленных задач между исполнителями. Составлял и тречил таски.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-x-5 pt-7">
        <div className="basis-1/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">КГУ "Государственный архив города Алматы"</h4>
          <span className="flex justify-between gap-5">
            <p className="basis-2/5">Инженер-программист</p>
            <p className="darkMode-text self-center bg-yellow px-2 py-0.5 text-defaultXS">01.04.2019 - 01.02.2022</p>
          </span>
        </div>
        <div className="basis-2/3">
          <h4 className="pb-6 text-headlineLG dark:text-whiteFont">
            Инженерные работы по обеспечению бесперебойной работы учреждения
          </h4>
          <ul className="list-decimal space-y-1 pl-5 marker:text-darkFont">
            <li>
              <p>
                Разработка, внедрение, эксплуатация и модернизация программного обеспечения ЭЕАД (электронный архив
                единой документации);
              </p>
            </li>
            <li>
              <p>Организация приема и передачи данных между программным обеспечением ЭЕАД - e-Акимат;</p>
            </li>
            <li>
              <p>Администрирование операционных систем Windows;</p>
            </li>
            <li>
              <p>Обеспечение бесперебойного функционирования серверного оборудования;</p>
            </li>
            <li>
              <p>Работа с сетями и оборудованием (Mikrotik); </p>
            </li>
            <li>
              <p>Разработка и внедрение сайта;</p>
            </li>
            <li>
              <p>СММ, Таргетинг и продвижение организации в социальных сетях;</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
