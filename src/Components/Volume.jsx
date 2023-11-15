import React from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
import '../public/css/styles.css'

const Volume = () => {
    const [{token}] = useContextProvider()

    const setVolume = async () => {
        await axios.put("https://api.spotify.com/v1/me/player/volume"), 
        {}, 
        {
            params: {
                volume_percent: parseInt(e.target.value),
              },
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
        }
    }

  return (
    <div className='volume-container'>
        <input type="range" onMouseUp={e => setVolume(e)} min={0} max={100} />
    </div>
  )
}

export default Volume