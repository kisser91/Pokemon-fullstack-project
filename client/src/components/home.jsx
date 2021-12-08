import React from "react";
import Filters from "./filters";
import Pagination from "./Pagination";
import Container from "./Container";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect} from "react";
import { getPokemons, getTypes,setPagination} from "../actions";
import style from '../styles/general.module.css'
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


    dispatch(setPagination())
    
    const refreshPage = ()=>{ window.location.reload() }


    return (
        <div className={div.home}>
            <h1 className={style.title}>Pokemon Api</h1>
            {pokemons.length > 1 ? <Filters/> : 
                <div className={style.err}>
                <h3>No se encontraron los Pokemon solicitados</h3>
                <button type="submit" onClick={refreshPage}> Reset </button>
                </div>}
            <Container/>
          {status && <Pagination/>}
        </div>
        
    )
}

