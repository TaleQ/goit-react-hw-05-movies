import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {fetchTrendingMovies} from 'api/Api'
import { Loader } from "components/Loader/Loader";
import { useCustomContext } from "context/Context";
import { MoviesList, MoviesListItem } from "components/MoviesList/MoviesList.styled";

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
      <MoviesList>
        {trendingMovies.length > 0 ?
          trendingMovies.map(movie => (<MoviesListItem key={movie.id}><Link to={`movies/${movie.id}`} state={{ from: "/" }}><img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} /><p>{movie.title}</p></Link></MoviesListItem>)) : <p text-align="center">No trending movies found</p> }
      </MoviesList>
    </>
  )
};

export default Home;