import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import "../public/css/styles.css"
import { useContextProvider } from '../utils/ContextProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'


const Spotify = () => {

  const [{token}, dispatch] = useContextProvider()
  const bodyRef = useRef()
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(true)
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30 ? setNavBackground(true) : setNavBackground(false)
    bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false)
  }

  useEffect(()=> {
    const getUserInfo = async () => {
      const { data } = await axios.get('https://api.spotify.com/v1/me', 
        {
          headers: {
            Authorization : 'Bearer ' + token,
            "Content-Type" : "application/json"
          }
        }
        
      )
      const userInfo = {
        userId: data.id,
        userName: data.display_name
      }
      dispatch({type: reducerCases.SET_USER, userInfo})
    }
    getUserInfo()
  }, [token, dispatch])

  return (
    <div className='spotify-container'>
      <div className="spotify-body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
            <div className="body-contents">
              <Body headerBackground={headerBackground} />
            </div>
        </div>
      </div>

      <div className="spotify-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Spotify