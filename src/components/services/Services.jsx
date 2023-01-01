import React from "react";
import "./Services.css"
import Service from "./Service"
import LazyImage from "../LazyImage/Lazy"
import data from "/src/assets/data.json"

const Services = (props) => {


    return (

        <React.Fragment>

        <div className="d-flex justify-content-center text-center">

        <span className=" col-8 col-md-6  fs-5 p-3 "> Nuestro asesoramiento se enfoca fundamentalmente en las materias de derecho patrimonial privado, derecho civil, mercantil y administrativo relacionado con los derechos anteriores.</span>
        </div>

        <div className="backImage customShadow2" style={{minHeight: "200px"}}>
            

        </div>

        <div className="container-fluid text-center backImage">
        <div className="row pt-5 d-flex flex-md-row flex-column justify-content-md-around">
            <div className="col-md-4 col-xl-3 mb-5 mb-md-3">
                <Service title={"Derecho de las personas"} list={["Incapacitación", "Asistencia"]}/>
                </div>
            <div className="col-md-4 col-md-4 col-xl-3 offset-md-1 mb-5 mb-md-3">
                <Service title={data["Services"][1].title} list={data["Services"][1].list}/>
            </div>
        </div>
        <div className="row d-flex flex-md-row flex-column justify-content-md-around">
            <div className="col-md-4 col-lg-3 offset-md-2 mb-5 mb-md-3">.<Service title={data["Services"][2].title} list={data["Services"][2].list}/></div>
            <div className="col-md-4 col-lg-3 offset-md-2 mb-5 mb-md-3">.<Service title={data["Services"][3].title} list={data["Services"][3].list}/></div>
        </div>
        {/* <div className="row d-flex flex-md-row flex-column justify-content-md-around">
            <div className="col-md-3 offset-md-2 bg-light">.col-md-6 .offset-md-3</div>
        </div> */}
        </div>
        <div className="backImage customShadow" style={{minHeight:"300px"}}>

        </div>

        <div className="d-flex justify-content-center text-center">

            <span className=" col-8 col-md-6  fs-5 p-3 "> No dude en consultar cualquier duda o información.</span>
        </div>  




        </React.Fragment>
    );
}

export default Services;