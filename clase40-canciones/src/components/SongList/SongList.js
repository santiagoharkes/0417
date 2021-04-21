import React, { useContext } from "react";
import { fetchSongs } from "../../actions/songsActions";
import { SongsContext } from "../../context/SongsContext";

import Song from "../Song/Song";

import "./SongList.css";

function SongList() {
  const { songs, prev, next, dispatch } = useContext(SongsContext);

  return (
    <>
      <ul className="songs">
        {songs?.map((song) => (
          <Song key={song.id} song={song} />
        ))}
      </ul>

      <div className="container centered">
        {prev && (
          <button
            className="btn"
            onClick={() =>
              dispatch((dispatch) => fetchSongs(dispatch, "", prev))
            }
          >
            Anterior
          </button>
        )}

        {next && (
          <button
            className="btn"
            onClick={() =>
              dispatch((dispatch) => fetchSongs(dispatch, "", next))
            }
          >
            Siguiente
          </button>
        )}
      </div>
    </>
  );
}

export default SongList;
