import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
 
  return (
    <div className=' flex justify-between items-center m-3 h-[50px] '>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        
        <nav className=' m-2  flex gap-5 text-[17px] text-slate-800 font-bold '>
          <NavLink  className="hover:underline" to="/about">About</NavLink>
          <NavLink  className="hover:underline" to="/vans">Vans</NavLink>
          <NavLink  className="hover:underline"  to="/host">Host</NavLink>
          <NavLink  className=" text-xl"  to="/login">🔐</NavLink>
     
    <button onClick={fakeLogOut}>log Out </button>  
        </nav>



    </div>
  )
}

export default Header;


