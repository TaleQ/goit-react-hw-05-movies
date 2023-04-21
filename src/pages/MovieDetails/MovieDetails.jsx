import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate , NavLink, Outlet } from 'react-router-dom';
import { useCustomContext } from 'context/Context';
import { fetchMovieDetails } from 'api/Api';
import { Loader } from 'components/Loader/Loader';
import { MovieThumb, GoBackButton, GenresItem, GenresList, StyledSpan, MovieCard, AddInfoLink } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading } = useCustomContext();
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState('Release year is unknown');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        console.log(data);
        setMovieData(data);
        setGenres(data.genres);
        setReleaseDate(data.release_date.slice(0, 4));
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    navigate(location.state.from);
  };

  return (
    <>
      {isLoading && <Loader />}
      <GoBackButton type="button" onClick={handleClick}>Go back</GoBackButton>
        <MovieCard>
        <img
          src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
          alt={movieData.title}
        ></img>
      <div>
          <h1>{movieData.title}<StyledSpan>{`(${releaseDate})`}</StyledSpan></h1>
        <p>
          <span>User score:</span>
          <StyledSpan>{movieData.vote_average}</StyledSpan>
        </p>
        <h2>Overview</h2>
          <p>{movieData.overview}</p>
          {genres.length > 0 && (<><h2>Genres</h2><GenresList>
            {genres.map(genre => (
              <GenresItem key={genre.id}>{genre.name}</GenresItem>
            ))}
          </GenresList></>)}
      </div>
      </MovieCard>
      <MovieThumb>
        <h2>Additional information</h2>
        <ul>
          <AddInfoLink><NavLink to="cast">Cast</NavLink>
          </AddInfoLink>
          <AddInfoLink><NavLink to="reviews">Reviews</NavLink>
          </AddInfoLink>
        </ul>
      </MovieThumb>
      <MovieThumb>
        <Outlet/>
      </MovieThumb>
    </>
  );
};

export default MovieDetails;
