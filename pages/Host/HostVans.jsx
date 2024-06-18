
import React from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { authenticate } from '../../utils';
import Loading from '../Loading';

export async function loader({request}){
  await authenticate(request);
  return   defer( {hostvanPromise: getHostVans() });
}

const HostVans = () => {

  // const [vans,setVans]=React.useState([]);
  // React.useEffect(()=>{
  //       fetch("/api/host/vans")
  //       .then(res => res.json())
  //       .then( data => setVans(data.vans))
  // },[])

  const dataPromise=useLoaderData();
  
  
function renderHostVans(vans){

  const handleHostVans=vans.map((item)=>(
        <Link  to={`/host/vans/${item.id}`}
          key={`${item.id}`}
         
        >
          <div  className=' flex items-center gap-8 bg-[#f8f9fa] w-full border border-[#f8f9fa] m-4'>
              
              <img className=' w-40 h-40 m-6'  src={item.imageUrl} alt="" />
              <div>
              <h1 className=' text-2xl font-bold'>{item.name}</h1>
               <p className=' text-xl'>${item.price}/day</p>
               </div> 
          </div>
  
        
        
        
        </Link>
    
  
  ) )

    return(
      <section>
         {handleHostVans}
      </section>

    )



}


  return (
    <section className=' m-6 p-4'>
   
    <h1 className=" text-3xl">Your Listed Vans</h1>
    <div className=" w-full">
      <React.Suspense fallback={<Loading/>}>
        
         <Await resolve={dataPromise.hostvanPromise}>
            {renderHostVans}
          </Await> 
        
          </React.Suspense>
        </div>
            
</section>
  )
}

export default HostVans;