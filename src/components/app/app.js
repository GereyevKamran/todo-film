import React from "react";

import Film from "../film";
import Home from "../home";
import About from "../about";
import LogoFilm from "../logo-film";

import "./app.css";

const App = () => {
  return (
    <div className={"root__main-container"}>
      <LogoFilm />
      <Home />
      <About />
      <Film />
    </div>
  );
};

export default App;
