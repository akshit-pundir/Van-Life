import React from 'react'
import {useOutletContext} from 'react-router-dom';

const HostVanPhotos = () => {

  const {van}=useOutletContext();

  return (
    <div className='absolute  top-[84%] left-28 flex flex-col gap-3 text-[16px] font-medium flex-wrap max-w-xl'>

      <img  className=' w-32 h-32 rounded-md'  src={van.imageUrl} alt="" />

    </div>
  )
}

export default HostVanPhotos