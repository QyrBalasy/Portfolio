import React from 'react'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  YoutubeIcon,
} from '../../../assets/icons/Icons'

const Profile = () => {
  return (
    <div className="mb-6">
      <div className="xs:h-[150px] bg-stone-400 mx-auto mt-12 mb-7 w-[150px] overflow-hidden rounded-[50%] text-center">
        <img alt="profile icon" src="http://dummyimage.com/150x150/c0c0c0" />
      </div>
      <h4 className="mb-4 text-center text-lg font-medium text-white">Sungat Shakarim</h4>
      <p className="text-mainTextColor mb-4 text-center text-base font-normal text-paragraphFont">Font-end Developer</p>
      <ul className="flex justify-between  ">
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow  ">
          <a href="/#">
            <FacebookIcon className="mx-auto h-3 w-[7px] fill-white" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <InstagramIcon className="mx-auto h-3 w-3 fill-white" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <LinkedinIcon className="mx-auto h-3 w-3 fill-white" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <GithubIcon className="mx-auto h-3 w-3 fill-white" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <TelegramIcon className="mx-auto h-[9px] w-3 fill-white" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <YoutubeIcon className="h-[9px] w-3 fill-white" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Profile
