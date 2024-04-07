import React from 'react'
import { useParams } from 'react-router-dom';


const VansDetail = () => {
    
    const [data,setData]=React.useState([]);
    const param=useParams();
    
    React.useEffect(() =>{
        fetch(`/api/vans/${param.id}`)
        .then(res => res.json())
        .then(result => setData(result.vans))
    },[])

    
   
  
    return (
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

export default VansDetail;