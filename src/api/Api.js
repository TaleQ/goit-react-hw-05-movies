import axios from "axios";

const API_KEY = '9d4ece4211ac8e35ee810dac1072ece6';

export const fetchMoviesByQuery = async (searchQuery) => {
  const params = {
    api_key: API_KEY,
    query: searchQuery,
    language: 'en-US',
    page: 1,
    include_adult: false,

    };
  const searchParams = new URLSearchParams(params);
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`);
  return response.data;
};

export const fetchTrendingMovies = async () => {
  const params = {
    api_key: API_KEY,
    media_type: 'movie',
    time_window: 'week'
  };
  const response = await axios.get(`https://api.themoviedb.org/3/trending/${params.media_type}/${params.time_window}?api_key=${params.api_key}`);
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}