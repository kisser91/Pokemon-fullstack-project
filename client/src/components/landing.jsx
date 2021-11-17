import React from 'react';
import {Link} from 'react-router-dom';
import BACKGROUND from '../img/BACKGROUND.png';
import landingCSS from '../styles/landing/landing.css'

export default function LandingPage(){
    
    return (

    <div>
    <h1>Bienvenidos A la Pokedex Online</h1>
        <img src={BACKGROUND} alt="" />
        <Link to ="/home">
        <button>Ingresar</button>
        </Link>
        
    </div>
    
    )
}