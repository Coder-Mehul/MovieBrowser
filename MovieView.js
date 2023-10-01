import { useParams } from "react-router-dom";
import Hero from "./Hero.js";
import { useState,useEffect } from "react";


const MovieView = () => {
    const {id}= useParams()
    console.log(id);

    const [movieDetails , setMovieDetails] = useState({});
    const[isLoading , setIsLoading] = useState(true);

    useEffect(()=>{
        console.log('Make an api request' , id);
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjczMGEzNjZmODllMTg5YmExNzdjZTlmMmUzMzRkMyIsInN1YiI6IjY1MGQyZDM3NDRlYTU0MDBhZDc5ZTQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBDWbMLzjDLfNcbVW1iDEytTKwwGupkSTIUuprBjuck'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                
                setMovieDetails(data);
                setIsLoading(false);
            
                
            })
            
    }, [id]);

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading . . ."/>
        }
        if(movieDetails){
          console.log(movieDetails);

          //TODO : Deal with a possible missing image
          const posterURL=`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;
          const backdropURL=`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
            return (
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropURL}/>
            <div className="container my-5">
              <div className="row">
                <div className="col-md-3">
                  <img src={posterURL} alt={movieDetails.original_title} className="img-fluid shadow"/>
                  
                </div>
                 <div className="col-md-9">
                    <h2 className="text-center">{movieDetails.original_title}</h2>
                    <p className="lead ">
                      {movieDetails.overview}
                    </p>
                    <div >
                    
                    <p className="text-start my-5 text-warning">
                     Rating: {movieDetails.vote_average}/10
                    </p>
                    
                    </div>
                 </div>
              </div>

            </div>
            </> 
            
            
            )
        }
    }

  return renderMovieDetails()
};

export default MovieView;
