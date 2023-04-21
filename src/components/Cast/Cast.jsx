import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomContext } from "context/Context";
import { fetchMovieCast } from "api/Api";
import { Loader } from "components/Loader/Loader";

export const Cast = () => {
  const { movieId } = useParams();
  const { isLoading, setIsLoading } = useCustomContext();
  const [movieCast, setMovieCast] = useState([])

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setMovieCast(data.cast);
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {movieCast.map(cast => (<li key={cast.id}><img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt='' /><p>{cast.name}</p><p><span>Character:</span><span>{cast.character}</span></p></li>) )}
      </ul>
    </>
  )
};

export default Cast;