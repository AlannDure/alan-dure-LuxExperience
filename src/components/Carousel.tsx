import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Movie } from "../types";

interface CarouselProps {
  movies: Movie[];
  category: string;
}

const Carousel: React.FC<CarouselProps> = ({ movies, category }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % movies.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + movies.length) % movies.length);

  //console.log("Carousel movies", movies);
  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={prev}>
        &#8672;
      </button>
      {movies.length > 0 && (
        <div className="carousel-card">
          <Link to={`/movie/${movies[current].id}`} state={{ category }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movies[current].poster_path}`}
              alt={movies[current].title}
            />
          </Link>

          <p>{movies[current].title}</p>
        </div>
      )}
      <button className="carousel-btn" onClick={next}>
        &#8674;
      </button>
    </div>
  );
};

export default Carousel;
