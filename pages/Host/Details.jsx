import React from 'react'
import {useOutletContext} from 'react-router-dom';

const Details = () => {

  const{van}=useOutletContext();
  
  return (
    <div className=' absolute  top-[84%] left-28 flex flex-col gap-3 text-[16px] font-medium flex-wrap max-w-xl  '>
      <h2>  <span   className=' font-semibold' >Name:</span> {van.name}</h2>
      <h2>  <span   className=' font-semibold'>Category:</span>{van.type}</h2>
      <h2 > <span   className=' font-semibold'>Description:</span>{van.description}</h2>
      <h2>  <span   className=' font-semibold'>  Visibility:</span>Public</h2>

    </div>
  )
}

export default Details