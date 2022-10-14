import React from "react"
import Corrusel from "./corrusel"
import "./home.css"

const Home = (props) => {

    return (
        <React.Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Profesionalidad</h1>
      <p className="lead fw-normal home-color">Abogado, tarifa</p>
      
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    <Corrusel/>
  </React.Fragment>
    );

}

export default Home;