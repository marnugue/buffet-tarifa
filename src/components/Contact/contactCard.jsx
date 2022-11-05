import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

import React from 'react';

import Contact from "./contact"


const Style = { color: 'black', fontSize: 60 }

const ContactCard = (props) => {

    const contacs = [{ id:1,img: <LocationOnIcon style={Style} />, title: "Dirección", description: <React.Fragment><div>General Copons, bajo A </div> <div className='w-100'></div><div>11380 Tarifa (Cádiz)</div></React.Fragment> },
    { id:2,img: <LocalPhoneIcon style={Style} />, title: "Teléfono / Fax", description: "956 62 70 70/ 639 509 479" }, { id:3, img: <EmailIcon style={Style} />, title: "E-mail", description: "mnunezc@icadiz.net" }]

    return (
        <div className='container-fluid text-center mt-3' >
            <h1>Contacto</h1>
            <div className='d-flex justify-content-center'>
                
                <div className='pb-5 w-75 text-center'>En Despacho Marcos Núñez Cano hacemos un seguimiento exhaustivo y personal a cada proceso que asumimos, y realizamos un estudio completo y actualizado del Derecho Privado (Civil o Mercantil), Derecho Administrativo, etc. Contacte con nosotros, nuestra prioridad es la transparencia. Le esperamos en Tarifa.</div>
                                 
            </div>
            <div className="d-sm-flex justify-content-around d-s-flex-column justify-content-center">
                {contacs.map((cardElem) => {
                    return <Contact img={cardElem.img} title={cardElem.title} description={cardElem.description} key={cardElem.id} />
                })}
            </div>
        </div>

    );
}

export default ContactCard