import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { getMovieById, clearMovie } from "../store/slices/movieSlice";
import { addToWishlist } from "../store/slices/wishlistSlice";
import { IMAGE_BASE_URL } from "../constants";
import MovieComponent from "../components/MovieComponent";

const MoviePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const categoryClass = location.state?.category || "";
  const movie = useSelector((state: RootState) => state.movie.current);
  const status = useSelector((state: RootState) => state.movie.status);
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  useEffect(() => {
    if (id) {
      dispatch(getMovieById(Number(id)));
    }
    return () => {
      dispatch(clearMovie());
    };
  }, [id, dispatch]);

  if (!id) return <div>Movie ID not provided</div>;
  if (status === "loading") return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  const isInWishlist = wishlist.some((item) => item.id === movie.id);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(movie));
    alert("Movie added to wishlist");
  };

  return (
    <div className={`movie-page ${categoryClass}`}>
      <h1>
        {movie.title} - {movie.release_date ?? ""}
      </h1>

      <MovieComponent
        left={
          movie.poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          )
        }
        right={
          <>
            <button
              onClick={handleAddToWishlist}
              //className="movie-button"
              className={`movie-button ${isInWishlist ? "disabled" : ""}`}
              disabled={isInWishlist}
            >
              {isInWishlist ? "Already on Wishlist" : "Add to Wishlist"}
            </button>
            <p>{movie.tagline ?? ""}</p>
          </>
        }
      />

      <div className="movie-description">
        <p>{movie.overview || "No description available."}</p>
      </div>
    </div>
  );
};

export default MoviePage;
