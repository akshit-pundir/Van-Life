import React from 'react'
import { NavLink, useParams,useLocation,useLoaderData, defer, Await} from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../Loading';

export function loader({params}){
     return  defer( { DeatilPromise:getVans(params.id)  }  )  ;
}

const VansDetail = () => {
    
    // const [data,setData]=React.useState([]);
    // const param=useParams();
    // React.useEffect(() =>{
    //     fetch(`/api/vans/${param.id}`)
    //     .then(res => res.json())
    //     .then(result => setData(result.vans))
    // },[])
    const dataPromise=useLoaderData()
    const location=useLocation();
    

    const back=location.state?.searchParams || "";
    const bt=location.state?.variant || "all";


    function renderVanDetails(data){
      
      return(
        <div key={data.id} className='van-detail-container'>
        <img src={data.imageUrl} alt="" />
        <div  className='sub' >
        <i  className={`van-${data.type}`} >{data.type}</i>
            <h1>{data.name}</h1>
            <h2>${data.price}/day</h2>
            <p>{data.description}</p>
            <button>Rent This Van</button>
        </div>

</div>
      )
      
    
    }
  
    return (
        <>
        <NavLink to={`..${back}`} relative="path"  className=" underline ml-10 p-2">⬅️Back to { `${bt}`} vans  </NavLink>
           
           <React.Suspense fallback={<Loading/>}>
            <Await resolve={dataPromise.DeatilPromise}>

            {renderVanDetails}

            </Await>
            </React.Suspense>
      </>  
   )


}

export default VansDetail;