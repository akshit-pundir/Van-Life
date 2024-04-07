import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
const HostLayout = () => {
  return (
    <>
        <nav className=' flex gap-4 m-6 text-xl p-4 ml-1'>
        <NavLink to="." >Dashboard </NavLink>
        <NavLink to="income" >Income  </NavLink>
        <NavLink to="vans" > Vans </NavLink>
        <NavLink  to="reviews" >Reviews </NavLink>
        </nav>
        <Outlet/>
    </>
  )
}

export default HostLayout