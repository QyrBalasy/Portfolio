import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Cv from "./cv/Cv";
import Home from "./home/Home";
import MyServices from "./myServices/MyServices";
import Portfolio from "./portfolio/Portfolio";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<MyServices />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
export default MainRouter