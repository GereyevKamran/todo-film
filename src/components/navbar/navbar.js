import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Film from "../film/film";
import Home from "../home/home";
import About from "../about/about";
import LogoFilm from "../logo-film/logo-film";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Dowland...</div>} />
        <div>
          <ul className={"root__container-list"}>
            <li className={"container-list__logo"}>LOGOFILM</li>
            <li>
              <Link to="/" className={"container-list__home"}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={"container-list__about"}>
                About
              </Link>
            </li>
            <li>
              <Link to="/film" className={"container-list__film"}>
                Film
              </Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" exact component={Home}>
              <Home />
            </Route>
            <Route exact path="/" component={LogoFilm}>
              <LogoFilm />
            </Route>
            <Route path="/about" component={About}>
              <About />
            </Route>
            <Route path="/film" component={Film}>
              <Film />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Navbar;
