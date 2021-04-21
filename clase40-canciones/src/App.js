import { useContext } from "react";

import "./App.css";

import { SongsContext } from "./context/SongsContext";
import Header from "./components/Header/Header";
import Lyric from "./components/Lyric/Lyric";
import SongList from "./components/SongList/SongList";
import Loading from "./components/Loading/Loading";

function App() {
  const { loading, showLyrics } = useContext(SongsContext);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {loading && <Loading />}

        {/* si hay error mostrar el error */}

        {!showLyrics && !loading && (
          <>
            <SongList />
          </>
        )}

        {showLyrics && <Lyric />}
      </div>
    </div>
  );
}

export default App;

// LECTURA PARA CASA:

// Diferentes formas de asincronismo en el contexto (React Context)

// LECTURA OBLIGATORIA:

// EL useReducer de memoria para el jueves
