import React, { createContext, useEffect, useState } from 'react';

export const API_BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState(null); 
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("titanic");

    const fetchMovies = async (searchUrl) => {
        setIsLoading(true);
        try {
            const res = await fetch(searchUrl);
            const data = await res.json();
            if (data.Response === "True") {
                setMovies(data.Search || []);
                setIsError({ show: false, msg: "" });
            } else {
                setIsError({ show: true, msg: data.Error });
                setMovies([]);
            }
        } catch (err) {
            setIsError({ show: true, msg: "Network error. Please try again later." });
        } finally {
            setIsLoading(false);
        }
    };

   

    useEffect(() => {
        fetchMovies(`${API_BASE_URL}&s=${query}`);
    }, [query]);

    return (
        <AppContext.Provider value={{ isLoading, movies, movie, isError, setQuery}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
