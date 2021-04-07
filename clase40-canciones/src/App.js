import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import useFetch from "./components/hooks/useFetch";
import Lyric from "./components/Lyric/Lyric";
import SongList from "./components/SongList/SongList";
import Loading from "./components/Loading/Loading";

const API_URL = "https://api.lyrics.ovh";

// https://api.lyrics.ovh/v1/artist/title

function App() {
  const [suggestValue, setSuggestValue] = useState("");
  const [artist, setArtist] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [showLyric, setShowLyric] = useState(false);

  const { data: songs, loading, error } = useFetch(
    `${API_URL}/suggest/${suggestValue}`
  );

  console.log({ songs });

  const lyricHandler = (artist, song) => {
    setArtist(artist);
    setSongTitle(song);
    setSongUrl(`${API_URL}/v1/${artist}/${song}`);
    setShowLyric(true);
  };

  const { data: lyrics, loading: load, error: error2 } = useFetch(songUrl);

  return (
    <div className="App">
      <Header suggest={setSuggestValue} showLyric={setShowLyric} />
      <div className="container">
        {(loading || load) && <Loading />}

        {/* si hay error mostrar el error */}

        {!showLyric && !loading && (
          <>
            <SongList songs={songs} displayLyric={lyricHandler} />
          </>
        )}

        {showLyric && !load && (
          <Lyric lyrics={lyrics?.lyrics} artist={artist} song={songTitle} />
        )}
      </div>
    </div>
  );
}

export default App;

// LECTURA PARA CASA:

// Diferentes formas de asincronismo en el contexto (React Context)

// LECTURA OBLIGATORIA:

// EL useReducer de memoria para el jueves
