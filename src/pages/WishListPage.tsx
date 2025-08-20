import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  removeFromWishlist,
  clearWishlist,
} from "../store/slices/wishlistSlice";
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../constants";
import MovieComponent from "../components/MovieComponent";

const WishlistPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.wishlist.items);

  //console.log("wishlist", items);

  if (items.length === 0) {
    return (
      <div>
        Your wishlist is empty, <Link to="/">check our movies</Link>
      </div>
    );
  }

  const handleRemoveFromWishList = (id: number) => {
    dispatch(removeFromWishlist(id));
    alert("Movie removed from wishlist");
  };

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>

      <div>
        {items.map((movie) => (
          <MovieComponent
            key={movie.id}
            left={
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            }
            right={
              <>
                <button
                  onClick={() => handleRemoveFromWishList(movie.id)}
                  className="secondary-btn"
                >
                  Remove
                </button>
                <h3>
                  {movie.title} - {movie.release_date ?? ""}
                </h3>
              </>
            }
          />
        ))}
      </div>

      {items.length > 0 && (
        <div className="button-container">
          <button
            onClick={() => dispatch(clearWishlist())}
            className="primary-btn"
          >
            Clear Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
