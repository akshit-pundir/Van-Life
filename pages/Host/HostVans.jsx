
import React from 'react'
import { Link } from 'react-router-dom';


const HostVans = () => {
  
  const [vans,setVans]=React.useState([]);
  
  React.useEffect(()=>{
        fetch("/api/host/vans")
        .then(res => res.json())
        .then( data => setVans(data.vans))
  },[])

    console.log(vans);
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

  return (
    <section className=' m-6 p-4'>
    <h1 className=" text-3xl">Your Listed Vans</h1>
    <div className=" w-full">
        {
            vans.length > 0 ? (
                <section>
                    {handleHostVans}
                </section>

            ) : (
                    <h2>Loading...</h2>
                )
        }
    </div>
</section>
  )
}

export default HostVans;