import React from 'react';
import {Link} from 'react-router-dom';
import BACKGROUND from '../img/BACKGROUND.png';
import landingCSS from '../styles/landing/landing.css'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { getPokemons, getTypes} from "../actions";


export default function LandingPage(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);

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