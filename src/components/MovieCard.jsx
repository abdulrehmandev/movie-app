
import { tmdb_img_url } from "../_api";
const data = {
  "adult": false,
  "backdrop_path": "/br7n8b3ELexcvs6l30IH2x9P2ux.jpg",
  "genre_ids": [
    80,
    18,
    35
  ],
  "id": 106646,
  "original_language": "en",
  "original_title": "The Wolf of Wall Street",
  "overview": "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
  "popularity": 105.759,
  "poster_path": "/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
  "release_date": "2013-12-25",
  "title": "The Wolf of Wall Street",
  "video": false,
  "vote_average": 8,
  "vote_count": 20869
}

export default function MovieCard() {
  return (
    <div className="p-2 text-center aspect-[3/4] h-[16rem]">
      <img className="rounded-3xl object-cover mb-3" src={tmdb_img_url + data.poster_path} alt={data.title} />
      <div className="px-1">
        <p className="leading-5 font-medium text-base mb-1">{data.title}</p>
        <p className="text-xs text-slate-700">{data.release_date.substring(0, 4)}</p>
      </div>
    </div>
  );
}
