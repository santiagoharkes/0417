import React, { useState } from "react";

import "./Header.css";

function Header({ suggest, showLyric }) {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    suggest(inputValue);
    showLyric(false);
  };

  return (
    <header>
      <h1>Esputifai</h1>
      <form action="">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Canción o artista..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={inputHandler}>Buscar</button>
      </form>
    </header>
  );
}

export default Header;
