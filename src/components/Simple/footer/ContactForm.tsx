import React from 'react'

import {MapIcon} from '../../../assets/icons/Icons'
// import {Button} from '../../UI/buttons'
import {Input} from '../../UI/inputs'

const ContactForm = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-x-7">
      <div>
        <h2 className="mb-12 text-headline3XL dark:text-whiteFont">Остались вопросы?</h2>
        <form className="flex flex-col gap-y-6 bg-white p-6">
          <div>
            <Input type={'text'} placeholder={'name@flowbite.com'} required />
          </div>
          <div>
            <label className="text-sm text-gray-900 dark:text-gray-300 mb-2 block font-medium">Subject</label>
            <input
              type={'email'}
              className="text-sm text-gray-900 bg-gray-50 border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border-0 border p-3 dark:text-white"
              placeholder={'Let us know how we can help you'}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-900 dark:text-gray-400 mb-2 block font-medium">Your message</label>
            <textarea
              id="message"
              rows={6}
              className="text-sm text-gray-900 bg-gray-50 shadow-sm border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border-0 border p-2.5 dark:text-white"
              placeholder={'Leave a comment...'}
            />
          </div>
        </form>
      </div>
      <div className="">
        <h2 className="mb-12 text-headline3XL dark:text-whiteFont">Контакты</h2>
        <ContactInformationCards />
        <ContactInformationCards />
        <ContactInformationCards />
      </div>
    </div>
  )
}
export default ContactForm

const ContactInformationCards = () => {
  return (
    <div className="bg-white px-6 pt-6 pb-4 ">
      <div className="mx-auto mb-8 h-10 w-10 rounded-[50%] bg-yellow p-2">
        <MapIcon className="h-4 w-4  dark:fill-white" color="fill-lightDark" />
      </div>
      <div className="flex justify-between whitespace-nowrap">
        <p className="px-2 py-0.5 text-default">Страна:</p>
        <a href="https://goo.gl/maps/PqnuS8gEGmBwtuVY8" target={'_blank'} rel="noreferrer" className="darkMode-text">
          Казахстан
        </a>
      </div>
      <div className="flex justify-between whitespace-nowrap">
        <p className="px-2 py-0.5 text-default">Город:</p>
        <a href="https://goo.gl/maps/PqnuS8gEGmBwtuVY8" target={'_blank'} rel="noreferrer" className="darkMode-text">
          Алматы
        </a>
      </div>
    </div>
  )
}
