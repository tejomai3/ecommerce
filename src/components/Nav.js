import React from 'react'
import { FaTruckFast} from 'react-icons/fa6';
import { CiHeart } from "react-icons/ci";
import { LuBaggageClaim } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css'
const Nav = () => {
    const { loginWithRedirect , logout , user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
            <div className="icon">
                <FaTruckFast/>
            </div>
            <p>Free shipping for shopping above $1000</p>
    </div>
    <div className="main_header">
        <div className="container">
            <div className="logo">
                <img src='./img/logo1.jpg' alt="img" />
            </div>
            <div className="search_box">
                <input type="text" value='' placeholder='Enter the product name' autoComplete='off'></input>
                <button>Search</button>
            </div>
            <div className="icon">
                {
                    isAuthenticated && (

                <div className="account">
                    <div className="user_icon">
                        <CiUser />
                    </div>
                    <p>Hello,{user.name}</p>
                </div>
                    )
                }
                <div className="second_icon">
                    <Link to="/" className='link'><CiHeart /></Link>
                    <Link to="/Cart" className='link'><LuBaggageClaim /></Link>
                
                </div>
            </div>
        </div>
    </div>
    <div className="header">
        <div className="container">
            <div className="nav">
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product' className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
            </ul>
            </div>
            <div className="auth">{
                isAuthenticated ? 
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoMdLogOut /></button> 
                :
                <button onClick={()=>loginWithRedirect()}><IoMdLogIn /></button>
            }
            
             
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav
