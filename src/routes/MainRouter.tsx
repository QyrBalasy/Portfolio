import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/ErrorPage/Error404";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Cv from "./cv/Cv";
import Home from "./home/Home";
import MyServices from "./myServices/MyServices";
import Portfolio from "./portfolio/Portfolio";
import { PathsMap } from "./routerPaths";

const MainRouter = () => {
  return (
    <main className="max-w-5xl">
      <Routes>
        <Route path={PathsMap.root.get()} element={<Home />} />
        <Route path={PathsMap.home.get()} element={<Home />} />
        <Route path={PathsMap.services.get()} element={<MyServices />} />
        <Route path={PathsMap.cv.get()} element={<Cv />} />
        <Route path={PathsMap.portfolio.get()} element={<Portfolio />} />
        <Route path={PathsMap.blog.get()} element={<Blog />} />
        <Route path={PathsMap.contact.get()} element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  )
}
export default MainRouter