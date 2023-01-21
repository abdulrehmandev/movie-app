import React, { useEffect } from 'react';
import { tmdb_api_key, TMDB_URL } from '../_api';
import MovieCard from "../components/MovieCard";

// function MainMovie({ img }) {
//   return (
//     <div className="px-8 mb-8">
//       <div className="relative w-fit">
//         <img className="max-w-[900px] rounded-[2rem]" src={img} alt="movie" />
//         <a className="rounded-full bg-indigo-700 px-6 py-3 text-white absolute bottom-12 right-12 drop-shadow-2xl hover:scale-110 duration-300">more</a>
//       </div>
//     </div>
//   );
// }

function Popular() {

  const [popData, setPopData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    fetch(`${TMDB_URL}/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`)
      .then(res => res.json())
      .then(res => setPopData(prevPopData => (
        page === prevPopData.length / 20 ? prevPopData : prevPopData.concat(res.results)
      )));
  }, [page])

  function handleMore() {
    setPage(prevPage => prevPage += 1);
  }

  return (
    <div className="">
      <h3 className="font-semibold text-3xl ml-4 mb-4">Popular Movies</h3>
      <div className="p-0 flex items-center grow-0 overflow-scroll overflow-y-hidden scrollbar-hide h-[22rem]">
        {popData.map(item => <MovieCard key={item} data={item} />)}
        <button className="ml-4 px-4 bg-indigo-700 h-10 rounded-full text-white"
          onClick={handleMore}>More</button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <Popular />
    </div>
  );
}
