import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
const home = () => {
  return (
    <>
      <div className="top_banner">
        <div className="container">
            <div className="detail">
                <h2>The Best Note Book Collection 2023</h2>
                {/* <BrowserRouter> */}
                    <Link to='/product'>Shop now</Link>
                {/* </BrowserRouter> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default home
