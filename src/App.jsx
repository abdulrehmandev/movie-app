import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import MovieCard from "./components/MovieCard";


function App() {

  function getSearch(data) {
    console.log(data);
  }

  return (
    <div className="App min-h-screen">
      <div className="container mx-auto w-[95%]">
        <Navigation onSearch={getSearch} />
        {/* <Home /> */}
        <MovieCard />
      </div>
    </div>
  );
}

export default App;
