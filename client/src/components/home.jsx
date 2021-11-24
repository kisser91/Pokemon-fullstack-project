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

    let status = useSelector((state) => state.statusFilter);
    let pokemons = useSelector((state)=> state.filteredPokemons)

    console.log("pages",status);
    // dispatch({type:"SET_ORDERED_POKEMONS"});

    dispatch(setPagination())



    return (
        <div className={div.home}>
            <h1 className={style.title}>Pokemon Api</h1>
            {pokemons.length > 1 && <Filters/>}
            <Container/>
            {console.log("pages 0",status)}
          {status && <Pagination/>}
        </div>
        
    )
}

