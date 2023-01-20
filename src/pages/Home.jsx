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

  const [popData, setPopData] = React.useState({ results: [] });

  useEffect(() => {
    fetch(`${TMDB_URL}/discover/movie?api_key=${tmdb_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`)
      .then(res => res.json())
      .then(res => setPopData(res));
  }, [])
  // console.log(popData);

  return (
    <div className="">
      <h3 className="font-semibold text-3xl ml-4 mb-4">Popular Movies</h3>
      <div className="bg-blue-200 p-0 flex grow-0 overflow-scroll scrollbar-hide h-[22rem]">
        {popData.results.map(item => <MovieCard key={item} data={item} />)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* <MainMovie img={tempImg} /> */}
      <Popular />
    </div>
  );
}
