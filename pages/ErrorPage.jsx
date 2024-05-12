import React from 'react'
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const errordata=useRouteError();
  console.log(errordata);
  return (
    <div> 
      <h1 className=' text-center text-5xl text font-bold m-44 w-[1100px]'> Woops! There was an Error</h1>
     
      <div className=' mb-[133px] flex justify-center flex-col items-center text-3xl'>
      <p>Error: <span className=' text-red-600'>  {errordata.message} </span> </p>
      <p>Status:  <span className=' text-red-600'>{errordata.status} Error  <b> ): </b></span></p>
    </div>
    
    
    </div>
  )
}

export default ErrorPage;