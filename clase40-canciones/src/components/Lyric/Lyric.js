import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContext";

function Lyric() {
  const { loading, lyric, artist, songTitle } = useContext(SongsContext);

  return (
    <div>
      <h2>
        <strong>{artist}</strong> - {songTitle}
      </h2>
      <span>{lyric}</span>
    </div>
  );
}

export default Lyric;
