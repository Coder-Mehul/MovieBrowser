// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import MovieView from "./components/MovieView";
import About from "./components/About.js";
import { Routes, Route } from "react-router-dom";
import SearchView from "./components/SearchView.js";
import {useState ,useEffect} from 'react';


// OMDB API KEY =c2584e88;
// https://www.omdbapi.com/?t=star+wars&apikey=c2584e88

function App() {
  const[searchResults , setSearchResults]= useState([]);
  const[searchText , setSearchText] = useState('');
  


  useEffect(()=>{
    if(searchText){
    console.log(searchText , "is the search text");
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjczMGEzNjZmODllMTg5YmExNzdjZTlmMmUzMzRkMyIsInN1YiI6IjY1MGQyZDM3NDRlYTU0MDBhZDc5ZTQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xBDWbMLzjDLfNcbVW1iDEytTKwwGupkSTIUuprBjuck'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => 
        setSearchResults(data.results));
      
  }
}, [searchText]);





  return (
    <div className="App">
      <Navbar className="abc" searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}  />

        <Route path="/Movies/:id" element={<MovieView/>}/>
      </Routes>
    </div>
  );
}

export default App;
