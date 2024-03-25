import React from 'react'
import { Link } from 'react-router-dom';
const Vans = () => {
  
    const [data,setData]=React.useState([]);


  React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(res =>setData(res.vans))
  },[]);

  const VanElements=data.map((item)=>(
 
    // <div key={item.id}  className='vans-element' >

                <Link  to={`/vans/${item.id}`} className='vans-element'   >
                <img src={item.imageUrl} alt="" />
                <div  className='vans-element-subcontainer' >
                    <h3>{item.name}</h3>
                    <p>${item.price}/day</p>
                </div>
                <i  className={`van-${item.type}`} >{item.type}</i>
                </Link>
      
        // </div>


  ));

    return (
    <div className='vans-container-main' >
        {VanElements}
    </div>

    )



}

export default Vans;



// server.create("van", { id: "1", name: "Modest Explorer",
//  price: 60, 
//  description: " you can pack up your home and escape for a weekend or even longer!", 
// imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })