import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
      <div className='main-landing-container'>
        <Landing />
      </div>
  )
}

export default Main