import React, { useContext } from "react";
import { fetchLyric } from "../../actions/songsActions";
import { SongsContext } from "../../context/SongsContext";

function Song({ song }) {
  const { dispatch } = useContext(SongsContext);

  const getLyrics = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchLyric(dispatch, song.artist.name, song.title));
  };

  console.log({ song });

  return (
    <li>
      <span>
        <strong>{song.artist.name}</strong> - {song.title}
      </span>
      <button onClick={getLyrics} className="btn">
        Letra
      </button>
      <div id="audio">
        <audio src={song.preview} controls></audio>
      </div>
    </li>
  );
}

export default Song;
