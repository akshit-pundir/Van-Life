import React,{Suspense} from 'react'
import { Link,useSearchParams,NavLink,useLoaderData,defer ,Await } from 'react-router-dom';
import { getVans } from '../../api';
import Loading from '../Loading';


export async function loader(){
     const fetchVans=getVans();
     return defer({van : fetchVans });
}

const Vans = () => {
  
    // const [data,setData]=React.useState([]);
    // const [loading,setLoading]=React.useState(false);
    const [search,setSearch]=useSearchParams();
    

//   React.useEffect(()=>{
//        async function loadVans(){
//         setLoading(true);
//         try{
//             const apiData= await getVans();
//             setData(apiData);   
//             }
//             catch(err){
//                 console.log(err);
//                 setError(err);
//             }
//             finally{
//                 setLoading(false);
//             }
//     }
//        loadVans();
//   },[]);

    const dataPromise=useLoaderData();
   

  const typeFilter=search.get("type");
  
 

function getnewSearchParams(key,value){
   
  const sp=new URLSearchParams(search);
  if(value === null){
      sp.delete(key);
  }else{
      sp.set(key,value);
  }

  return `?${sp.toString()}`
}


    // if(loading){
    //     return <h1 className=' text-5xl font-extrabold m-10'>Loading .....</h1>
    // }
    
  

    function renderVans(data){
        
            
            const displayVans= typeFilter ? data.filter( res => res.type.toLowerCase() === typeFilter) : data;
          
            const VanElements=displayVans.map((item)=>(
           
                <Link  to={`${item.id}`} className='vans-element' key={item.id} state={{searchParams : `?${ search.toString() }`,variant:typeFilter}} >
                          <img src={item.imageUrl} alt="" />
                          <div  className='vans-element-subcontainer ' >
                              <h3>{item.name}</h3>
                              <p>${item.price}/day</p>
                          </div>
                          <i  className={`van-${item.type}`} >{item.type}</i>
                          </Link>
                
               
          ))
              return(
                  <>
                  <div className=' flex items-center justify-between mb-10'> 
                  <h1 className='  font-extrabold  text-5xl p-4 m-4'>Explore our van options</h1>
                  <div>
                    <button
                       onClick={ () => setSearch (getnewSearchParams  ("type" ,"simple"))  }
                       className=" bg-[#E17654] mr-6 py-3 px-6 rounded-md text-white text-base hover:bg-[#f3722c]"
                   >Simple</button>
            
                   <button
                       onClick={ () => setSearch (getnewSearchParams  ("type","rugged" ) ) }
                       className="bg-[#036666] mr-6 py-3 px-6 rounded-md hover:bg-[#115E59]"        
                   >Rugged</button>
                    <button
                      onClick={ () => setSearch (getnewSearchParams  ("type" ,"luxury"))  }
                      className="bg-[#1b4965] mr-6 py-3 px-6 rounded-md hover:bg-[#1b3b6f]"
                   >Luxury</button>
                
                  { typeFilter &&  <NavLink className="absolute  right-8 top-40  underline bg-transparent text-lg " to={getnewSearchParams("type",null)}   >clear filter</NavLink> }
          
               </div>
          
           </div>
              <div className='vans-container-main' >
                  {VanElements}
              </div>
          
          </>    )
          
           
    }

    return (
      <div>
         
        
        <Suspense fallback={<Loading/>}>
         <Await resolve={dataPromise.van}>

        {renderVans }

     </Await>
     </Suspense>
    </div>
    )



}

export default Vans;


