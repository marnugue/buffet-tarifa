import React from "react"
import Corrusel from "./corrusel"
import db from "../../../server/db.json"
import "./home.css"
import LazyImage from "../LazyImage/Lazy"
import Map from "../Map/Map"


const Home = (props) => {

    return (
        <React.Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-md-1 mx-auto mt-1 mb-1 my-5">
      <h1 className="display-4 fw-normal">Abogado en Tarifa</h1>
      <p className="lead fw-normal home-color">Derecho civil y mercantil</p>
      
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    <Corrusel/>

    <div className="d-md-flex justify-content-around d-s-flex-column justify-content-center">
    
    <div className="col-md-4 rounded-3 shadow-lg  text-center px-1 m-3">
    <Map />
    </div>
    <div className="d-flex justify-content-center px-1 m-3 col-md-4">

      <span className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eos asperiores ullam inventore earum facilis expedita ipsam autem, illum temporibus nobis aliquam consequuntur reiciendis maxime animi similique! Alias, sit fugiat!</span>
    </div>

    </div>

    

  </React.Fragment>
    );

}

export default Home;