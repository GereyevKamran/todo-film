import React from "react";

import "./film.css";

function Cards(props) {
  return (
    <div className="notes">
      <div className="notes__card">
        <p className="card__film">{props.filmName}</p>
        <p className="card__raiting">{props.raiting}</p>
        <button
          className="remove__btn"
          onClick={() => props.onRemove(props.id)}
        >
          X
        </button>
        <img className="card__image" src={props.images} />
        <p className="card__about">{props.about}</p>
      </div>
    </div>
  );
}

export default Cards;
