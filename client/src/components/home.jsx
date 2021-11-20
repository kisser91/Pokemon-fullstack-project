import React from "react";
import { Link } from "react-router-dom";
import Cards from './Cards/Cards';
import Filters from "./filters";
import Pagination from "./Pagination";
import Container from "./Container";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from "react";
import { getPokemons, getTypes,setPagination,setOrderedPokemons } from "../actions";



export default function Home(){
    // Componente 
    const dispatch = useDispatch();
    
    // Llamado al back para setear el estado global.
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());   
    },[dispatch]);

    let pokemons = useSelector((state) => state.pokemons);
    let order = useSelector((state) => state.order);
    let status = useSelector((state) => state.statusFilter);


    console.log("pages",status);
    // dispatch({type:"SET_ORDERED_POKEMONS"});

    dispatch(setPagination())



    return (
        <div>

            <Link to='/pokemons'>Crear personaje</Link>
            <h1>Pokemon Api</h1>
            <Filters/>
            <Container/>
            {console.log("pages 0",status)}
          {status && <Pagination/>}
        </div>
        
    )
}

