import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomContext } from 'context/Context';
import { fetchMovieCast } from 'api/Api';
import { Report } from 'notiflix';
import { CastList, CastItem, DefaultCastImg } from './Cast.styled';
import { StyledSpan, MovieThumb } from 'pages/MovieDetails/MovieDetails.styled';
import profileImg from '../../img/cast_img.png';

export const Cast = () => {
  const { movieId } = useParams();
  const { setIsLoading } = useCustomContext();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieCast(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        Report.failure('Try again later', `${error}`, 'Okay');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieThumb>
        <CastList>
          {movieCast.map(cast => (
            <CastItem key={cast.id}>
              <div>
                {cast.profile_path === null ? (
                  <DefaultCastImg src={profileImg} alt="" />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                    alt=""
                  />
                )}
              </div>
              <div>
                <p>{cast.name}</p>
                <p>
                  <span>Character:</span>
                  <StyledSpan>{cast.character}</StyledSpan>
                </p>
              </div>
            </CastItem>
          ))}
        </CastList>
      </MovieThumb>
    </>
  );
};

export default Cast;
