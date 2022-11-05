import React from 'react'
import { Route,Routes } from "react-router-dom"



import reactLogo from './assets/react.svg'
import './App.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import Navbar from './components/Navbar/navbar'
import Card from './components/Card/card'
import Footer from "./components/Footer/footer"
import ContactCard from './components/Contact/contactCard';
import Home from './components/Home/home';
import Services from './components/services/Services';

function App() {

  return (
    <React.Fragment>
    <Navbar/>
    {/* <div className='row'>

      <div className='col-4'>
        <Card title="pepe" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat provident laborum animi adipisci quibusdam ipsam! Ratione dolorum ducimus vero dolorem libero consectetur repellendus, impedit delectus incidunt. Hic, dolores dicta?"/>
      </div>

    </div> */}

    <Routes>
    <Route path="/contact" element={<ContactCard/>}/> 
    <Route path="/home" element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='*' element={<Home/>}/>
    </Routes>    
   
    <Footer/>

    </React.Fragment>
  )
}

export default App
