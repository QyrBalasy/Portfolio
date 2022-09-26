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
      <h4 className="text-lg darkMode-text mb-4 text-center font-medium">Sungat Shakarim</h4>
      <p className="text-mainTextColor text-base mb-4 text-center font-normal">Font-end Developer</p>
      <ul className="flex justify-between  ">
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow  ">
          <a href="https://www.facebook.com/profile.php?id=100035914818991" target={'_blank'} rel="noreferrer">
            <FacebookIcon className="mx-auto h-3 w-[7px]  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="https://www.instagram.com/_qyrbalasy/" target={'_blank'} rel="noreferrer">
            <InstagramIcon className="mx-auto h-3 w-3  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="https://www.linkedin.com/in/shakarimsungat/" target={'_blank'} rel="noreferrer">
            <LinkedinIcon className="mx-auto h-3 w-3  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="https://github.com/QyrBalasy" target={'_blank'} rel="noreferrer">
            <GithubIcon className="mx-auto h-3 w-3  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="https://t.me/idmavesna" target={'_blank'} rel="noreferrer">
            <TelegramIcon className="mx-auto h-[9px] w-3  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
        <li className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-yellow text-center">
          <a href="/#">
            <YoutubeIcon className="h-[9px] w-3  dark:fill-white" color="fill-lightDark" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Profile
