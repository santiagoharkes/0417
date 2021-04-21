import React, { createContext, useReducer } from "react";

export const SongsContext = createContext();

const songsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        songs: [],
        loading: true,
        error: null,
        showLyrics: false,
        lyric: null,
        artist: null,
        songTitle: null,
        prev: null,
        next: null,
      };

    case "SONGS_RESPONSE":
      return {
        ...state,
        loading: false,
        songs: action.payload.songs,
        prev: action.payload.prev,
        next: action.payload.next,
      };

    case "LYRIC_RESPONSE":
      return {
        ...state,
        loading: false,
        lyric: action.payload.lyric,
        showLyrics: true,
        artist: action.payload.artistitaLindo,
        songTitle: action.payload.title,
      };

    default:
      return state;
  }
};

const initialState = {
  songs: [],
  loading: false,
  error: null,
  showLyrics: false,
  lyric: null,
  artist: null,
  songTitle: null,
  prev: null,
  next: null,
};

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const myDispatch = (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, myDispatch];
};

function SongsProvider({ children }) {
  const [songsState, dispatch] = useThunkReducer(songsReducer, initialState);

  return (
    <SongsContext.Provider value={{ ...songsState, dispatch }}>
      {children}
    </SongsContext.Provider>
  );
}

export default SongsProvider;
