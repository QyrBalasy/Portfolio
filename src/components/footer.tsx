import React from "react";
import { CopyrightIcon } from "../assets/icons/Icons";

const Footer = () => {
  return (
    <footer className="gap-4 bg-darkView1 flex justify-center items-center py-5">
      <CopyrightIcon className="h-5 w-5" />
      <p className="text-center text-whiteFont"> 2022 All Rights Reserved. Created by Sungat Shakarim</p>
    </footer>
  )
}
export default Footer