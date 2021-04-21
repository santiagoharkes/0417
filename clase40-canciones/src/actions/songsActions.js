import { API_URL, API_URL_LYRIC, CORS_URL } from "../constants/endpoints";

export const fetchSongs = (dispatch, suggestValue, otraUrl = false) => {
  let nuevaUrl = otraUrl
    ? `${CORS_URL}/${otraUrl}`
    : `${API_URL}/suggest/${suggestValue}`;

  dispatch({ type: "LOADING" });

  fetch(nuevaUrl)
    .then((res) => res.json())
    .then((info) =>
      dispatch({
        type: "SONGS_RESPONSE",
        payload: {
          songs: info.data,
          prev: info.prev,
          next: info.next,
        },
      })
    );
};

export const fetchLyric = (dispatch, artist, song) => {
  dispatch({ type: "LOADING" });

  fetch(`${CORS_URL}/${API_URL_LYRIC}/${artist}/${song}`)
    .then((res) => res.json())
    .then((info) =>
      dispatch({
        type: "LYRIC_RESPONSE",
        payload: {
          lyric: info.lyrics,
          artistitaLindo: artist,
          title: song,
        },
      })
    );
};
