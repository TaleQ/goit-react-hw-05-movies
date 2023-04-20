import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useCustomContext } from 'context/Context';
import { fetchMovieDetails } from 'api/Api';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading } = useCustomContext();
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovieData(data);
        setGenres(data.genres);
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <button type="button">Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={movieData.original_title}
        ></img>
      </div>
      <div>
        <h1>{movieData.original_title}</h1>
        <p>
          <span>User score:</span>
          <span>{movieData.vote_average}</span>
        </p>
        <h2>Overview</h2>
        <p>{movieData.overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li><NavLink to="cast">Cast</NavLink>
          </li>
          <li><NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
