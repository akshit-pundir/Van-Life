import React from 'react'
import {useOutletContext} from 'react-router-dom';

const HostVanPricing = () => {
 
  const[van,setVan]=useOutletContext();
 
 
  return (
    <div className='absolute  top-[90%] left-28 flex flex-col gap-3 text-[16px] font-medium flex-wrap max-w-xl'>
        <h1 className=' text-2xl'>${van.price}/Day </h1>
      </div>
  )
}

export default HostVanPricing