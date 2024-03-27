import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
const rout = () => {
  return (
    <>
    {/* {<Home/>}  */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
        
    </>
  )
}

export default rout
