import React from "react";

const Service = (props)=>{

    return (
        <div className="bg-light rounded-3 shadow">
            <h3 className="pt-2">{props.title}</h3>
            <ul className="list-group ">
                {props.list.map((elem,index)=>{return <li key={index} className="list-group-item">{elem}</li>})}
                <li className="list-group-item">Para mas información</li>
            </ul>
        </div>
    );

}

export default Service;