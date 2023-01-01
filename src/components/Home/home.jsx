import React from "react"
import Corrusel from "./corrusel"
import db from "../../../server/db.json"
import "./home.css"
import LazyImage from "../LazyImage/Lazy"
import Map from "../Map/Map"


const Home = (props) => {

    return (
        <React.Fragment>
        <div className="position-relative overflow-hidden p-3 p-md-5 mt-md-3 text-center bg-light">
    <div className="col-md-5 p-md-1 mx-auto mt-1 mb-1 my-5">
      <h1 className="display-4 fw-normal" style={{fontFamily:"RED MIST",color:"black",fontSize:60}}>Marcos Núñez Cano</h1>
      <p className="lead fw-normal home-color">Despacho de abogados en Tarifa</p>
      
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    <Corrusel/>

    <div className="d-flex flex-column-reverse flex-lg-row justify-content-lg-around">
    {/* d-sm-flex flex-sm-column-reverse */}
    
    <div className="col-lg-6 col-xl-5 rounded-3 shadow-lg  text-center px-1 m-3">
    <Map />
    </div>

    <div className="text-center px-1 m-3 col-lg-4">

      <span className="fs-5 fs-md-4">Desde 1994 este despacho trabaja para ofrecer un servicio de asesoramiento legal basado en una atención personal y transparente en la asistencia letrada y dirección jurídica en litigios basada en el compromiso y honestidad con el cliente, para dar la mejor prestación posible de nuestro servicio profesionales que se respalda por una dilatada experiencia, y que a pesar de los años seguimos con dichos objetivos desde nuestros inicios. Con ello pretendemos ofrecer una defensa y asesoramiento adaptado a sus necesidades, ya sean personas físicas o jurídicas</span>
    </div>

    </div>

    

  </React.Fragment>
    );

}

export default Home;