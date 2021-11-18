import React from "react";
import { Link } from "react-router-dom";
import Cards from './Cards/Cards';
import Filters from "./filters";
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getPokemons, getTypes } from "../actions";



export default function Home(){
    // Componente 
    const dispatch = useDispatch();
    
    // Llamado al back para setear el estado global.
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);

    return (
        <div>
            <Link to='/pokemons'>Crear personaje</Link>
            <h1>Pokemon Api</h1>
            <Filters/>
            <Cards />
        </div>
        
    )
}

