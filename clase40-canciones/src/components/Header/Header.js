import React, { useContext, useState } from "react";
import { SongsContext } from "../../context/SongsContext";
import { fetchSongs } from "../../actions/songsActions";

import "./Header.css";

function Header() {
  const [inputValue, setInputValue] = useState("");

  const { dispatch, songs } = useContext(SongsContext);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchSongs(dispatch, inputValue));
  };

  return (
    <header>
      <h1>Esputifai</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Canción o artista..."
          onChange={inputHandler}
        />
        <button>Buscar</button>
      </form>
    </header>
  );
}

export default Header;
