
import MovieCard from "../components/MovieCard";
import tempImg from "../../temp-img.png";

function MainMovie({ img }) {
  return (
    <div className="px-8 mb-8">
      <div className="relative w-fit">
        <img className="max-w-[900px] rounded-[2rem]" src={img} alt="movie" />
        <a className="rounded-full bg-indigo-700 px-6 py-3 text-white absolute bottom-12 right-12 drop-shadow-2xl hover:scale-110 duration-300">more</a>
      </div>
    </div>
  );
}

function Popular() {
  const temp = [1, 2, 3];
  return (
    <div className="">
      <h3 className="font-semibold text-3xl ml-4 mb-4">Popular Movies</h3>
      <div className="flex shrink-0 overflow-scroll scrollbar-hide">
        {temp.map(el => <MovieCard img={tempImg} />)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <MainMovie img={tempImg} />
      <Popular />
    </div>
  );
}
