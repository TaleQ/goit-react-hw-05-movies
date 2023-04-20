import { useEffect, useState } from 'react';
import { useCustomContext } from 'context/Context';
import { Link } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/Api';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const { isLoading, setIsLoading } = useCustomContext();

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
    setSearchQuery(searchQuery);
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
      <form onSubmit={handleSubmit}>
        <input
        type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        value={inputValue}
        onChange={handleChange}/>
      <button type="submit"></button>
      </form>
      {isLoading && <Loader />}
      <ul>
        {moviesByQuery.length > 0 ? (
          moviesByQuery.map(movie => (
            <li key={movie.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                />
                <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>
              </div>
            </li>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </ul>
      </>
  );
};

export default Movies;
