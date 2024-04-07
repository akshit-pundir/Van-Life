import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";  
import VansDetail from "./pages/Vans/VansDetail"
import Dashboard from './pages/Host/Dashboard';
import Layout from './components/Layout';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostLayout from './components/HostLayout';
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import Details from './pages/Host/Details';


import "./server";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
       
        <Route index element={<Home/>}/>
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VansDetail />} />

        <Route path="host" element={<HostLayout/>} >
      
        <Route index element={<Dashboard/>} />
        <Route path="income" element={<Income/>} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="vans" element={<HostVans/>} />
        
        <Route path="vans/:id" element={<HostVanInfo/>} >
              <Route index element={<Details/>} />      
              <Route path='pricing' element={<HostVanPricing/>} />      
              <Route path='photos' element={<HostVanPhotos/>} />      
        </Route>
        
        </Route>


        </Route>
 
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);