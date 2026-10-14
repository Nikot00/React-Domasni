import React from "react";

export const Movies = ({ filmovi }) => {
  return (
    <div>
      {filmovi.map((film, i) => {
        return (
          <div key={i}>
            <h2>{film.name}</h2>
            <p>{film.date}</p>
            <p>{film.genre}</p>
            <p>{film.plot}</p>
            <a href={film.imdbLink}>IMDb</a>
            <br />
            <img src={film.imgUrl} width="200" />
          </div>
        );
      })}
    </div>
  );
};