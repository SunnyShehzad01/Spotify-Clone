import React, { useEffect } from 'react'
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'

const Playlists = () => {

    const [{token, playlists}, dispatch] = useContextProvider()

    useEffect(() => {
        const getPlaylistData = async() => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlists', 
            {
                headers: {
                    Authorization : 'Bearer ' + token,
                    "Content-Type" : "application/json"
                }
            })

            const {items} = response.data
            const playlists = items.map(({name, id})=>{
                return {name, id}
            })
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists})
        }

        getPlaylistData()
    }, [token, dispatch])

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYER_ID, selectedPlaylistId})
    }

  return (
    <ul className='playlist'>
        {
            playlists.map(({name, id})=>{
                return (
                    <li key={id} onClick={() => changeCurrentPlaylist(id)}>
                        {name}
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Playlists