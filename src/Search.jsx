import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './main.css';
import { AppContext } from './context';

const Search = () => {

    const {query,setQuery,error}=useContext(AppContext)

    
  return (
    <div>
      <div className="container my-3">
        <div className="row align-items-center">
            <div className="col-md-4 text-white">
                <NavLink to={'/'} style={{textDecoration:"none",color:"white"}}><h2>MoviesHub</h2></NavLink>
            </div>
           
            <div className="col-md-4">
                <form action="" onSubmit={(e)=>e.preventDefault()}>
                    <input type="search" className="form-control" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search" />
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
