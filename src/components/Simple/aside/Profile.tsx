import React from 'react'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  YoutubeIcon,
} from '../../../assets/icons/Icons'
import profileImg from '../../../media/imgs/profileIcon.jpg'


const Profile = () => {
  return (
    <div>
      <div className="xs:h-[150px] bg-stone-400 mx-auto mt-12 mb-7 w-[150px] overflow-hidden rounded-[50%] text-center">
        <img alt="profile icon" src={profileImg} />
      </div>
      <h4 className="text-lg mb-4 text-center font-medium text-white">Sungat Shakarim</h4>
      <p className="text-mainTextColor text-base mb-4 text-center font-normal text-paragraphFont">Font-end Developer</p>
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
