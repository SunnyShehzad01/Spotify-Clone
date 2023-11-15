import React from 'react'
import '../public/css/styles.css'
import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
import Volume from './Volume'

const Footer = () => {
  return (
    <div className='footer-container'>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  )
}

export default Footer