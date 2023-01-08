
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TMDB_URL, tmdb_api_key } from "../_api";

export default function Search({ onSearch }) {
  const [searchInput, setSearchInput] = React.useState('');

  async function onSearchChange(event) {
    event.preventDefault();

    fetch(`${TMDB_URL}/search/movie?api_key=${tmdb_api_key}&language=en-US&query=${searchInput}`)
      .then(res => res.json())
      .then(res => onSearch(res))
      .catch(err => console.error(err))
  }

  return (
    <form
      className="bg-indigo-700 rounded-full py-3 px-[1rem] duration-200"
      onSubmit={onSearchChange}
    >
      <input
        className="px-2 duration-300 bg-transparent outline-none font-medium tracking-wide placeholder:text-slate-300 text-white"
        type="text"
        value={searchInput}
        onChange={event => (setSearchInput(event.target.value))}
        placeholder="i.e. Wolf of wall streets"
      />
      <button type="submit">
        <FontAwesomeIcon
          icon="search"
          size="lg"
          inverse
        />
      </button>
    </form>
  )
}