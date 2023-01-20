
import React, { useEffect } from 'react';
import { TMDB_URL, tmdb_api_key } from '../_api';

export default function MovieDetail() {

  const id = 106646;
  const [data, setData] = React.useState(null);

  async function getData(id) {
    return fetch(`${TMDB_URL}/movie/${id}?api_key=${tmdb_api_key}&language=en-US`)
      .then(res => res.json())
      .then(res => res);
  }

  setData(getData(id))

  useEffect(setData(id), 0)

  console.log(data)

  // callBack(getData(id));
  // console.log(data);



  // const data = callBack(getData(id));
  // console.log(data);

  return (
    <section>
      {/* <img src={ } alt={ } /> */}
      {/* <p>{data.backdrop_path}</p> */}

    </section>
  );
}