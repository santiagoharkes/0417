import React from "react";

function Lyric({ artist, song, lyrics }) {
  return (
    <div>
      <h2>
        <strong>{artist}</strong> - {song}
      </h2>
      <span>{lyrics}</span>
    </div>
  );
}

export default Lyric;
