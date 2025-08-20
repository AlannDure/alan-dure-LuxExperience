import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../components/Carousel";
import { fetchMovies } from "../store/slices/moviesSlice";
import type { RootState, AppDispatch } from "../store";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    if (!data.popular.length) {
      dispatch(fetchMovies());
    }
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="titles">Popular Movies</h1>
      <Carousel movies={data.popular} category="popular" />

      <h1 className="titles">Top Rated Movies</h1>
      <Carousel movies={data.topRated} category="topRated" />

      <h1 className="titles">Upcoming Movies</h1>
      <Carousel movies={data.upcoming} category="upcoming" />
    </>
  );
};

export default Home;
