import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCustomContext } from 'context/Context';
import { fetchMovieReviews } from 'api/Api';
import { MovieThumb, StyledSpan } from 'pages/MovieDetails/MovieDetails.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const { setIsLoading } = useCustomContext();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data.results);
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieThumb>
        {movieReviews.length > 0 ? (
          <ul>
            {movieReviews.map(review => (
              <li key={review.id}>
                <p>
                  <span>Author:</span>
                  <StyledSpan>{review.author}</StyledSpan>
                </p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews for this movie yet</p>
        )}
      </MovieThumb>
    </>
  );
};

export default Reviews;
