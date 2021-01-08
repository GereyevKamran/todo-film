import React, { useState, useEffect } from "react";
import Cards from "./cards";
import * as api from "../../services/swagger-service";

import "./film.css";

const FilmRating = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    //
    const films = api.getRate(); //componentDidMount - когда срендерился(отрисовался) компонент
    setMovies(await films);

    return () => {
      //componentWillUnmount - когда кмопонент удалился из вёрстки
      setMovies([]);
    };
  }, []);

  return (
    <div data-at={"root__wrapper"}>
      <div>
        <h1 className={"wrapper__header"}>FILMS</h1>
      </div>
      <div className={"root__dictionary"}>
        <div>
          {movies.length
            ? movies.map((move, index) => (
                <Cards
                  key={index}
                  citys={move.nameEn}
                  about={move.year}
                  images={move.posterUrl}
                  countries={move.rating}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FilmRating);
