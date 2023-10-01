// import Hero from "./Hero.js";
import React from "react"; 
import { Link } from "react-router-dom";
// import BackgroundImagePage from "./background";

const MovieCard = ({movie}) =>{
  console.log(movie);
  const posterURL=`https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  const detailURL=`/movies/${movie.id}`;
  console.log(detailURL);
  return(
    <div className="col-lg-3 col-md-3 col-2 my-2">
        <div className="card">
        <img src={posterURL} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        
        <Link to= {detailURL} className="btn btn-primary">Info</Link>
        </div>
        </div>
    </div>
  )
} 

const SearchView = ({ keyword, searchResults }) => {
  // const title = `You are searching for ${keyword}`;
  
  const resultsHTML=searchResults.map((obj,i) =>{
    return <MovieCard movie={obj} key={i}/>
  })

  return (
    <div >
      {/* <Hero text={title} /> */}
      {resultsHTML &&
        <div className="container">
          
          <div className="row">
            {resultsHTML}
          </div>
        </div>
      } 
    </div>
  );
};

export default SearchView;

