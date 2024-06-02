import React from 'react'
import { NavLink, Link ,useParams,Outlet, useLoaderData} from 'react-router-dom'
import { getHostVans } from '../../api';
import { authenticate } from '../../utils';


export async function loader({params,request}){
    await authenticate(request);
    return  getHostVans(params.id);
}

const HostVanInfo = () => {
   
    // const [van, setVan] = React.useState([]);
    // React.useEffect(()=>{
    //         fetch(`/api/host/vans/${param.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
        
    //     },[])
       
    const van=useLoaderData();
        
 
    return (
        <section >
        <NavLink to=".." relative='path' className=' ml-10 text-xl cursor-pointer'> &larr; Back </NavLink>
            <div className='flex bg-white p-6 m-10  h-[80%]'>

                        <div  className=' flex items-center gap-8 -mt-56 '>
                            <img className=' ml-10 w-[250px] h-[250px] rounded-md '  src={van.imageUrl}  alt="sdasdasd" />
                             <div>
                                <i className={`  van-${van.type} `}> {van.type } </i>
                                <h1 className=' mt-7  text-2xl font-bold'> {van.name} </h1>
                                    
                            </div>   


                        </div>

            <nav className=' absolute bottom-32 left-24 '>
            <NavLink
                to="."
                className="hover:underline font-semibold text-xl m-3 "
                
              >
                  Details</NavLink>
              
              <NavLink to="pricing" className="hover:underline font-semibold text-xl m-3">Pricing</NavLink>
             
             
              <NavLink to="photos" className="hover:underline font-semibold text-xl m-3"   >Photos</NavLink>
  
            </nav>
            <Outlet  context={ {van}}/>
            </div>

            </section>

)
}

export default HostVanInfo;