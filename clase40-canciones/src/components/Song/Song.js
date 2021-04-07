import React from "react";

function Song({ song, displayLyric }) {
  return (
    <li>
      <span>
        <strong>{song.artist.name}</strong> - {song.title}
      </span>
      <button
        onClick={() => displayLyric(song.artist.name, song.title)}
        className="btn"
      >
        Letra
      </button>
    </li>
  );
}

export default Song;
