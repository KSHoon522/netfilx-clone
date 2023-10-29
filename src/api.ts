const BASH_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTI4Y2U1N2M3NTJlNTQ5ODNlOWVjNmMwNDQzN2E5NiIsInN1YiI6IjY1M2IzODE0ZTg5NGE2MDBlMmNjZWU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._r6p_Mz1mXBO-9EfVBbPVst846n-egzVJsvp_xfSsiw",
  },
};

export function getMovies() {
  return fetch(
    `${BASH_PATH}/movie/now_playing?language=en-US&page=1`,
    options
  ).then((response) => response.json());
}
