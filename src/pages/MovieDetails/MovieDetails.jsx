import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useCustomContext } from 'context/Context';
import { fetchMovieDetails } from 'api/Api';
import {
  MovieThumb,
  GoBackButton,
  GenresItem,
  GenresList,
  StyledSpan,
  MovieCard,
  AddInfoLink,
} from './MovieDetails.styled';
import { DefaultImg } from 'components/DefaultImg/DefaultImg';
import { Report } from 'notiflix';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const { setIsLoading } = useCustomContext();

  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState([]);
  const [releaseDate, setReleaseDate] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieData(data);
        setGenres(data.genres);
        setReleaseDate(data.release_date.slice(0, 4));
      } catch (error) {
        Report.info('An error occurred, try again later', `${error}`, 'Okay');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GoBackButton type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </GoBackButton>
      <MovieCard>
        {movieData.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
            alt={movieData.title}
          />
        ) : (
          <DefaultImg />
        )}
        <div>
          <h1>
            {movieData.title}
            {releaseDate !== '' && (
              <StyledSpan>{`(${releaseDate})`}</StyledSpan>
            )}
          </h1>
          <p>
            <span>User score:</span>
            <StyledSpan>{movieData.vote_average}</StyledSpan>
          </p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          {genres.length > 0 && (
            <>
              <h2>Genres</h2>
              <GenresList>
                {genres.map(genre => (
                  <GenresItem key={genre.id}>{genre.name}</GenresItem>
                ))}
              </GenresList>
            </>
          )}
        </div>
      </MovieCard>
      <MovieThumb>
        <h2>Additional information</h2>
        <ul>
          <AddInfoLink>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </AddInfoLink>
          <AddInfoLink>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </AddInfoLink>
        </ul>
      </MovieThumb>
      <Outlet />
    </>
  );
};

export default MovieDetails;
