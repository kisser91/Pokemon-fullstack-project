import React from "react";
import { Link } from "react-router-dom";
import Filters from "./filters";
import Pagination from "./Pagination";
import Container from "./Container";
import Search from "./Search";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from "react";
import { getPokemons, getTypes,setPagination,setOrderedPokemons } from "../actions";
import style from '../styles/landing/landing.module.css'
import div from "../styles/home/home.module.css"



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
        <div className={div.home}>
            <Search/>
            <Link to='/pokemons'>Crear personaje</Link>
            <h1>Pokemon Api</h1>
            <Filters/>
            <Container/>
            {console.log("pages 0",status)}
          {status && <Pagination/>}
        </div>
        
    )
}

