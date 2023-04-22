import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'api/Api';
import { useCustomContext } from 'context/Context';
import {
  MoviesList,
  MoviesListItem,
} from 'components/MoviesList/MoviesList.styled';
import { DefaultImg } from 'components/DefaultImg/DefaultImg';
import { Report } from 'notiflix';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { setIsLoading } = useCustomContext();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies();
        if (data.results.length > 0) {
          setTrendingMovies(data.results);
        }
      } catch (error) {
        Report.info('An error occurred, try again later', `${error}`, 'Okay');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Trending today movies</h1>
      <MoviesList>
        {trendingMovies.length > 0 ? (
          trendingMovies.map(movie => (
            <MoviesListItem key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: '/' }}>
                {movie.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <DefaultImg />
                )}
                <p>{movie.title}</p>
              </Link>
            </MoviesListItem>
          ))
        ) : (
          <p>No trending movies found</p>
        )}
      </MoviesList>
    </>
  );
};

export default Home;
