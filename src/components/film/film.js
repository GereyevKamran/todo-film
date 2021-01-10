import React, { useReducer, useEffect } from "react";
import Cards from "./cards";
import { getRate } from "../../REST";
import constants from "../../constants/constants";
import { initialState, reducer } from "../../reducer/reducer";

import "./film.css";

const FilmRating = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRate().then((res) => {
      dispatch({
        type: constants.SAVE_CARDS,
        payload: res.films,
      });
    });
  }, []);

  const { movies } = state;

  const handleRemove = (filmId) => {
    console.log(filmId);
    dispatch({
      type: constants.REMOVE_CARD,
      payload: filmId,
    });
  };

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
                  id={move.filmId}
                  key={index}
                  citys={move.nameEn}
                  about={move.year}
                  images={move.posterUrl}
                  countries={move.rating}
                  onRemove={handleRemove}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default FilmRating;
