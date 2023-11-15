import React from 'react'
import "../public/css/styles.css"

export const Login = () => {

    const handleSubmit = () => {
        const clientId = "7e37764775bc4af8a46e5479d4c4b0be"
        const redirectUrl = "http://127.0.0.1:5173/"
        const apiUrl = "https://accounts.spotify.com/authorize"
        const scopes = ["user-read-email", 
                        "user-read-private", 
                        "user-read-playback-state",
                        "user-modify-playback-state",
                        "user-read-currently-playing",
                        "user-read-playback-position",
                        "user-top-read",
                        "user-read-recently-played"
                    ] 
                    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
                        " "
                      )}&response_type=token&show_dialog=true`;
    }

  return (
    <div className='login-container'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify" />
        <button onClick={handleSubmit}>Connect Spotify</button>
    </div>
  )
}