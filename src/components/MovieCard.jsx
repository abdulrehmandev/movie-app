
import { tmdb_img_url } from "../_api";

export default function MovieCard({ data }) {
  function handleTitle(title) {
    if (title.length >= 30) return title.substring(0, 26) + '...';
    return title;
  }
  return (
    <div className="p-2 text-center aspect-[3/4] h-[16rem]">
      <img className="rounded-3xl object-cover mb-3 w-full" src={tmdb_img_url + data.poster_path} alt={data.title} />
      <div className="px-1">
        <p className="leading-5 font-medium text-base mb-1">{handleTitle(data.title)}</p>
        <p className="text-xs text-slate-700">{data.release_date.substring(0, 4)}</p>
      </div>
    </div>
  );
}
