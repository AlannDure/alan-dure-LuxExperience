export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  tagline: string;
}

export interface MoviesByCategory {
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export interface AppProps {
  initialMovies: MoviesByCategory;
}
