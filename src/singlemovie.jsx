import { useState, useEffect } from 'react'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_BASE_URL } from './context'


const Singlemovie = () => {

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setmovie] = useState(null);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const fetchMovies = async (searchUrl) => {
    setIsLoading(true);
    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setmovie(data);
        setIsError({ show: false, msg: "" });
      } else {
        setIsError({ show: true, msg: data.Error });
        setmovie();
      }
    } catch (err) {
      setIsError({ show: true, msg: "Network error. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchMovies(`${API_BASE_URL}&i=${id}`);
  }, [id]);


  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <div className="container single-movie py-5">
  <div className="row">
    <div className="col-md-8 offset-md-2 movie-background d-flex align-items-start text-light p-4 rounded">
      <div className="col-md-4">
        <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
      </div>
      <div className="col-md-8 ps-4">
        <h2 className="mb-3">{movie.Title}</h2>
        <p className="lead">{movie.Released}</p>
        <p>{movie.imdbRating}</p>
        <p>{movie.Genre}</p>
        <p>{movie.Plot}</p>
        <p>{movie.Year}</p>
        <br />
        <NavLink to={'/'}> <button className='btn btn-danger'>Go Back </button></NavLink>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Singlemovie
