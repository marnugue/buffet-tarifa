import React from "react";
import "./Services.css"
const Services = (props) => {


    return (

        <React.Fragment>

        <div className="backImage">

        </div>

        <div className="container-fluid text-center backImage">
        <div className="row pt-5">
            <div className="col-md-4 bg-light">.col-md-4</div>
            <div className="col-md-4 offset-md-4 bg-light">.col-md-4 .offset-md-4</div>
        </div>
        <div className="row pt-5">
            <div className="col-md-3 offset-md-3 bg-light">.col-md-3 .offset-md-3</div>
            <div className="col-md-3 offset-md-3 bg-light">.col-md-3 .offset-md-3</div>
        </div>
        <div className="row pt-5">
            <div className="col-md-6 offset-md-3 bg-light">.col-md-6 .offset-md-3</div>
        </div>
        </div>
        <div className="backImage customShadow">

        </div>


        </React.Fragment>
    );
}

export default Services;