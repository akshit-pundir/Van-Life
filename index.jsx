import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes, Route, Link ,createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as vansLoader} from "./pages/Vans/Vans";  
import VansDetail ,{loader as vanDetailLoader}from "./pages/Vans/VansDetail"
import Dashboard from './pages/Host/Dashboard';
import Layout from './components/Layout';
import Reviews from './pages/Host/Reviews';
import HostVans ,{loader as hostVanLoader} from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import HostVanInfo,{loader as hostVanInfoLoader} from './pages/Host/HostVanInfo';
import HostLayout from './components/HostLayout';
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import Details from './pages/Host/Details';
import ErrorPage from './pages/ErrorPage'
import { authenticate } from './utils';
import Login ,{loginLoader,loginAction} from './pages/Login';

import "./server";

const NewRouter=createBrowserRouter(createRoutesFromElements(
 
 <Route path="/" element={<Layout/>} errorElement={<ErrorPage/>}  >
       
  <Route index element={<Home/>}/>
  <Route path="about" element={<About />} />
  <Route path="vans" element={<Vans />}   loader={vansLoader}  />
  <Route path="vans/:id" element={<VansDetail />}   loader={vanDetailLoader}/>

  <Route path="host" element={<HostLayout/>} >

      <Route index element={<Dashboard/>}  loader={ async({request}) => { return  await authenticate(request)  }   }/> 
      <Route path="income" element={<Income/>}  loader={ async({request}) => { return await authenticate(request)  }   } />
      <Route path="reviews" element={<Reviews/>}   loader={ async({request}) => { return  await authenticate(request)  }   }/>
      <Route path="vans" element={<HostVans/>} loader={hostVanLoader} />
      
      <Route path="vans/:id" element={<HostVanInfo/>} loader={hostVanInfoLoader} >
            <Route index element={<Details/>}    loader={ async({request}) => { return  await authenticate(request)  }   }   />      
            <Route path='pricing' element={<HostVanPricing/>} loader={ async({request}) => { return  await authenticate(request)  }   }/>      
            <Route path='photos' element={<HostVanPhotos/>}loader={ async({request}) => { return  await authenticate(request)  }   } />      
      </Route>
      
  </Route>

<Route  path='login' element={<Login/>} loader={loginLoader} action={loginAction} />
 <Route path="*"  element={<ErrorPage/>} /> 
  </Route>


));


function App() {
  return (
    <RouterProvider router={NewRouter}/>
    );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);