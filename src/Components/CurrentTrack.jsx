import axios from 'axios'
import React, { useEffect } from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import {reducerCases} from '../utils/Constants'
import '../public/css/styles.css'

const CurrentTrack = () => {
    const [{token, currentPlaying}, dispatch] = useContextProvider()

    useEffect(() => {
        const getCurrentTrack = async() => {
            const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', 
            {
                headers: {
                    Authorization : 'Bearer ' + token,
                    "Content-Type" : "application/json"
                }
            })

            if(response.data !== ""){
                const {item} = response.data
                const currentPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist)=> artist.name),
                    image: item.album.images[2].url
                }
                dispatch({type: reducerCases.SET_PLAYING, currentPlaying})
            } else {
                dispatch({type: reducerCases.SET_PLAYING, currentPlaying: null})
            }

            console.log(response.data);
        }
        console.log(currentPlaying);
        getCurrentTrack()
    }, [token, dispatch])

  return (
    <div className='currentTrack-Container'>
        {
            currentPlaying && (
                    <div className="current-track">
                        <div className="track-img">
                            <img src={currentPlaying.image} alt="image" />
                        </div>
                        <div className="track-info">
                            <h4 className='track-info-name'>{currentPlaying.name}</h4>
                            <h6 className='track-info-artists'>{currentPlaying.artists.join(", ")}</h6>
                        </div>
                    </div>
            )
        }
    </div>
  )
}

export default CurrentTrack