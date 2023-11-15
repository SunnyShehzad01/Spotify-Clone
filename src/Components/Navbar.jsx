import React from 'react'
import '../public/css/styles.css'
import { CgProfile } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import { useContextProvider } from '../utils/ContextProvider'

const Navbar = () => {

  const [{userInfo}] = useContextProvider()

  return (
    <div className='navbar-container'>
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder='Artists, songs or podcasts' />
      </div>

      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}

export default Navbar