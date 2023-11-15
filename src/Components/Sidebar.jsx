import React from 'react'
import '../public/css/styles.css'
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from './Playlists';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="top-links">
        <div className="logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify" />
        </div>

        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>

      </div>
      <Playlists />
    </div>
  )
}

export default Sidebar