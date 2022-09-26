import React from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import SiteContainer from "./SiteContainer";


const App = () => {
  return (
    <ThemeContextWrapper>
      <BrowserRouter>
        <SiteContainer />
      </BrowserRouter>
    </ThemeContextWrapper>
  )
}
export default App