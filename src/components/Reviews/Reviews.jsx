import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "context/Context";
import { fetchMovieReviews } from "api/Api";
import { Loader } from "components/Loader/Loader";

export const Reviews = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading } = useCustomContext();
  const [movieReviews, setMovieReviews] = useState([])

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieReviews(movieId);
        console.log(data.results);
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
      {isLoading && <Loader />}
      <ul>
        {movieReviews.map(review => <li key={review.id}><p><span>Author:</span><span>{review.author}</span></p><p>{review.content}</p></li>)}
      </ul>
    </>
  )
};

export default Reviews;