import { useEffect, useState } from 'react';
import { useCustomContext } from 'context/Context';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/Api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList, MoviesListItem } from 'components/MoviesList/MoviesList.styled';
import { SearchForm, SearchButon, SearchInput } from './Movies.styled';
import { TfiSearch } from "react-icons/tfi";

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const { isLoading, setIsLoading } = useCustomContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = inputValue.trim().toLowerCase();
    if (!searchQuery) {
        console.log("Please enter search query");
        return
    };
    setSearchParams({ query: searchQuery });
    setInputValue('');
  }

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesByQuery(searchQuery);
        if (data.results.length === 0) {
          console.log('No movies found');
        } else {
          setMoviesByQuery(data.results);
        }
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery) {
      getMovies();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
          <SearchInput
        type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        value={inputValue}
        onChange={handleChange}/>
        <SearchButon type="submit">
          <TfiSearch fill="#ffffff"/>
      </SearchButon>
      </SearchForm>
      {isLoading && <Loader />}
      <MoviesList>
        {moviesByQuery.length > 0 ? (
          moviesByQuery.map(movie => (
            <MoviesListItem key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: `/movies?query=${searchQuery}` }}><img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                /><p>{movie.title}</p></Link>
            </MoviesListItem>
          ))
        ) : null}
      </MoviesList>
      </>
  );
};

export default Movies;
