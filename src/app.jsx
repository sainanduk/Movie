import React, { useEffect, useState} from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
//key:6cdf4e4d
const Apikey = 'http://www.omdbapi.com/?i=tt3896198&apikey=6cdf4e4d' 

const App = ()=>
{  
const [searchTerm,setSearchTerm] = useState("")
const [movies, setMovies] = useState([])
useEffect(()=>{
   searchmovies("spiderman")
},[])

const searchmovies = async(title)=>{
   const response = await fetch(`${Apikey}&s=${title}`)
   const data = await response.json()
   setMovies(data.Search)

}
 
   return(
      <div className="app">
         <h1>movies</h1>
         <div className="search">
            <input value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            placeholder ="search movies"></input>
         <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        />
         </div>
         {
            movies?.length >0 ?(
               <div className="container">
                  {movies.map((movie)=>(
                     <MovieCard movie={movie}/>
                  ))}
                  </div>
                   ) : (
                     <div className="empty">
                       <h2>No movies found</h2>
                     </div>
                   )}
                 </div>
               )
}
export default App 