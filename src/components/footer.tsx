import React from "react";
import { CopyrightIcon } from "../assets/icons/Icons";
import MyLocation from './Simple/footer/MyLocation'

const Footer = () => {
  return (
    <footer>
      <MyLocation />
      <div className="flex items-center justify-center gap-4 bg-darkView1 py-5">
        <CopyrightIcon className="h-5 w-5" />
        <p className="text-center text-whiteFont"> 2022 All Rights Reserved. Created by Sungat Shakarim</p>
      </div>
    </footer>
  )
}
export default Footer