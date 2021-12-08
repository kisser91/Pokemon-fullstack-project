import React,{ useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import Pagination from "./Pagination";
import { setOrigin } from "../actions";
export default function Filters(){

    const dispatch = useDispatch();
    const refreshPage = ()=>{ window.location.reload()}
    // Traer tipos desde el store
    const pokemonTypes = useSelector((state) => state.tipos);
    const origin = useSelector((state) => state.origin);


    useEffect(()=>{
        dispatch({
            type: "SET_PAGINATION"
        });
    },[dispatch]);

    // Handlers 
    function handleOrder(event){
        event.preventDefault();
        let bool = false;
        if(event.target.value === "des") bool = true;

        dispatch({
            type: "SET_ORDER",
            payload: bool
        });
        dispatch({
            type: "SET_PAGINATION"
        });
  
    }
    function handleFilteredType(event){
        dispatch({
            type:'SET_ORDERED_POKEMONS',
            payload: event.target.value
        });
        dispatch({
            type: "SET_PAGINATION"
        });
    }

    function handleOrigin(event){
        dispatch(setOrigin(event.target.value));
        dispatch({
            type: "SET_PAGINATION"
        });
    }
    
    
    function handlePokemonType(event){
        // event.preventDefault();
        dispatch({
            type:"FILTER_BY_TYPE",
            payload: event.target.value
        });
        dispatch({
            type: "SET_PAGINATION"
        });
    }
    
    return (
        <div>
                <select  name="order" onChange={event => {handleOrder(event)}}>
                    <option value="asc">Ascendente</option>
                    <option value="des">Descendente</option>
                </select>
                <select name="type" onChange={event => {handleFilteredType(event)}}>
                    <option value="num">Numero</option>
                    <option value="alf">Alfabetico</option>
                    <option value="str">Fuerza</option>
                </select>
               
{origin=== "all" && <select type="origin" onChange={event => {handleOrigin(event)} }>
                        <option value="all">Todos</option>
                        <option value="api">Originales</option>
                        <option value="db">Creados</option>
                    </select>}
                <select type="pokemon Type" onClick={event => {handlePokemonType(event)} }>
                    <option value="all">"All"</option>
                    {
                    pokemonTypes.map(el => {
                        return <option value={el.tipo}>{el.tipo}</option> 
                    })
                    }
                </select>
                <button type="submit" onClick={refreshPage}> Reset </button>
                {/* crear estados locales por cada boton - handleReset los pone en ""  */}
                <Pagination 
                />
        </div>
        
    )
}

