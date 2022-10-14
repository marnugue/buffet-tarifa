import React from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Contact = (props) => {

    return (
        <div className='d-flex-column justify-content-center px-1'>
            <div className='d-flex justify-content-center pb-4'>
            {props.img}
            </div>

            <div className='text-center text-wrap m-2' style={{fontSize:30}}>
                {props.title}
            </div>
            
            <div className='text-wrap pb-2'>
                {props.description}
            </div>
            
        </div>

    );
}

export default Contact