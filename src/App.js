import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Movie from './Movie';
import Search from './Search';
import SingleMovie from './singlemovie';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <div className="app-container">
                    <Search/>
                    <Routes>
                        <Route path="/" element={<Movie />} />
                        <Route path="movie/:id" element={<SingleMovie />} />
                    </Routes>
                </div>
            </Router>
        </AppProvider>
    );
};

export default App;
