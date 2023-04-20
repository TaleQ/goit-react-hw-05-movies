import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {fetchTrendingMovies} from 'api/Api'
import { Loader } from "components/Loader/Loader";
import { useCustomContext } from "context/Context";

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { isLoading, setIsLoading } = useCustomContext();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies();
        if (data.results.length === 0) {
          console.log('No movies found');
        } else {
          setTrendingMovies(data.results);
        }
      } catch (error) {
        console.log(`Oops, something went wrong. ${error}. Try again later.`);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <Loader/>}
      <ul>
        {trendingMovies.length > 0 ?
          trendingMovies.map(movie => (<li key={movie.id}><div><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} /><Link to={`movies/${movie.id}`}>{movie.original_title}</Link></div></li>)) : <p>No movies found</p> }
      </ul>
    </>
  )
};

export default Home;