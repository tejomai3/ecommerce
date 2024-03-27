import React from 'react';
import Nav from './Nav';
import Rout from './Rout';
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Rout/>
    </BrowserRouter>
    </>
  )
}

export default App
