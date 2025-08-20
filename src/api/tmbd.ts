import axios from "axios";
import { BASE_URL } from "../constants";

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

export const fetchMoviesByCategory = async (category: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${category}`, {
    params: { api_key: API_KEY, language: "en-US", page: 1 },
  });
  return response.data.results;
};

export const fetchPopularMovies = () => fetchMoviesByCategory("popular");
export const fetchTopRatedMovies = () => fetchMoviesByCategory("top_rated");
export const fetchUpcomingMovies = () => fetchMoviesByCategory("upcoming");

export const fetchMovieById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY, language: "en-US" },
  });
  return response.data;
};
