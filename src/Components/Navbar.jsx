import React from 'react'
import airbnblogo from '../assets/images/airbnb logo.png'
export default function navbar(){
    return(
        <nav>
            <img src={airbnblogo} className='airbnb--logo'/>
        </nav>
    )
}