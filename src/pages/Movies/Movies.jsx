import { useEffect, useState } from 'react';
import { useCustomContext } from 'context/Context';
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/Api';
import {
  MoviesList,
  MoviesListItem,
} from 'components/MoviesList/MoviesList.styled';
import { SearchForm, SearchButon, SearchInput } from './Movies.styled';
import { TfiSearch } from 'react-icons/tfi';
import { Notify, Report } from 'notiflix';
import { DefaultImg } from 'components/DefaultImg/DefaultImg';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const { setIsLoading } = useCustomContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = inputValue.trim().toLowerCase();
    if (!searchQuery) {
      Notify.info('Please enter search query');
      return;
    }
    setSearchParams({ query: searchQuery });
    setInputValue('');
  };

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMoviesByQuery(searchQuery);
        if (data.results.length === 0) {
          Notify.failure('No movies found', { timeout: 700 });
          setMoviesByQuery([]);
          setTimeout(() => {
            navigate(location.pathname);
          }, '700');
        } else {
          setMoviesByQuery(data.results);
        }
      } catch (error) {
        Report.info('An error occurred, try again later', `${error}`, 'Okay');
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
          onChange={handleChange}
        />
        <SearchButon type="submit">
          <TfiSearch fill="#ffffff" />
        </SearchButon>
      </SearchForm>
      <MoviesList>
        {moviesByQuery.length > 0
          ? moviesByQuery.map(movie => (
              <MoviesListItem key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.poster_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  ) : (
                    <DefaultImg />
                  )}
                  <p>{movie.title}</p>
                </Link>
              </MoviesListItem>
            ))
          : null}
      </MoviesList>
    </>
  );
};

export default Movies;
