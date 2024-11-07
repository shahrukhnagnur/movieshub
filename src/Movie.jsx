import React, { useContext } from 'react';
import { AppContext } from './context';
import { NavLink } from 'react-router-dom';
import './main.css';

const Movie = () => {
    const { movies, isLoading, isError } = useContext(AppContext);

    if (isLoading) return <div>Loading...</div>;
    if (isError.show) return <div>Error: {isError.msg}</div>;

    return (
        <div className="container movie-container">
            {movies && movies.length > 0 ? (
                movies.map((movie) => {
                    const { imdbID, Title, Poster } = movie;
                    const title = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;
                    return (
                        <NavLink to={`/movie/${imdbID}`} key={imdbID} className="movie-card">
                            <img src={Poster} alt={Title} className="movie-poster" />
                            <h1 className="movie-title">{title}</h1>
                        </NavLink>
                    );
                })
            ) : (
                <div>No movies found.</div>
            )}
        </div>
    );
};

export default Movie;
