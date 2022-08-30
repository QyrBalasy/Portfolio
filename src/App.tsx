import React from "react";
import { BrowserRouter } from "react-router-dom";
import SiteContainer from "./SiteContainer";

const App = () => {
  return (
    <BrowserRouter>
      <SiteContainer/>
    </BrowserRouter>
  )
}
export default App