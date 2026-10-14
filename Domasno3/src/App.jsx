import React from "react";
import { Movies } from "./components/Movies";

export function App() {
  const movies = [
  {
    name: "Inception",
    date: 2010,
    genre: "Sci-Fi",
    plot: "A thief enters people's dreams to steal secrets.",
    imdbLink: "https://www.imdb.com/title/tt1375666/",
    imgUrl: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    name: "Interstellar",
    date: 2014,
    genre: "Sci-Fi",
    plot: "Astronauts search for a new home for humanity.",
    imdbLink: "https://www.imdb.com/title/tt0816692/",
    imgUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    name: "The Dark Knight",
    date: 2008,
    genre: "Action",
    plot: "Batman faces the Joker in Gotham City.",
    imdbLink: "https://www.imdb.com/title/tt0468569/",
    imgUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    name: "Titanic",
    date: 1997,
    genre: "Romance, Drama",
    plot: "Two people fall in love aboard the Titanic.",
    imdbLink: "https://www.imdb.com/title/tt0120338/",
    imgUrl: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    name: "The Conjuring",
    date: 2013,
    genre: "Horror",
    plot: "Investigators help a family facing paranormal events.",
    imdbLink: "https://www.imdb.com/title/tt1457767/",
    imgUrl: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
  }
]





  return (
    <div>
      <h1>Movies</h1>
      <Movies filmovi={movies} />
    </div>
  );
}
