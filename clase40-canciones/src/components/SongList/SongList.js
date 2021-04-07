import React from "react";
import Song from "../Song/Song";

import "./SongList.css";

function SongList({ songs, displayLyric }) {
  return (
    <ul className="songs">
      {songs?.data.map((song) => (
        <Song key={song.id} song={song} displayLyric={displayLyric} />
      ))}
    </ul>
  );
}

export default SongList;
