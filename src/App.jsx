import { useContext, useState, useEffect } from 'react'
import './App.css'
import { Login } from './Components/Login'
import { useContextProvider } from './utils/ContextProvider';
import SpotifyHome from './Components/SpotifyHome';
import { reducerCases } from './utils/Constants';
import Spotify from './Components/Spotify';


function App() {
  const [{ token }, dispatch] = useContextProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);

      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
   
    }
    document.title = "Spotify";
  }, [dispatch, token]);


  return (
    <>
      {
        token ? <Spotify /> : <Login/>
      }
    </>
  )
}

export default App
