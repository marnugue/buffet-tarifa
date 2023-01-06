import React from 'react'
import { Route,Routes } from "react-router-dom"
import data from "./assets/data.json"


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
import PoliticaPriv from './components/Politics/PoliticaPriv'
import AvisoLegal from "./components/Politics/AvisoLegal"
import PoliticaCookies from "./components/Politics/PoliticaCookies"

export function App() {
  const basename = data["basename"]
  return (
    <React.Fragment>
    <Navbar/>
    {/* <div className='row'>

      <div className='col-4'>
        <Card title="pepe" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat provident laborum animi adipisci quibusdam ipsam! Ratione dolorum ducimus vero dolorem libero consectetur repellendus, impedit delectus incidunt. Hic, dolores dicta?"/>
      </div>

    </div> */}

    <Routes>
    <Route path={basename+"/contact"} element={<ContactCard/>}/> 
    <Route path={basename+"/home"} element={<Home/>}/>
    <Route path={basename+'/services'} element={<Services/>}/>
    <Route path={basename+'/avisoLegal'} element={<AvisoLegal />}/>
    <Route path={basename+'/politicaCookies'} element={<PoliticaCookies/>}/>
    <Route path={basename+'/politicaPrivacidad'} element={<PoliticaPriv/>}/>
    <Route path={basename+'*'} element={<Home/>}/>
    <Route path={"*"} element={<Home/>}/>
    </Routes>    
   
    <Footer/>

    </React.Fragment>
  )
}

export default App
