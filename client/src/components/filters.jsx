import React from "react";
import { useState } from "react";
import {useDispatch, useSelector,useEffect} from 'react-redux';
import Pagination from "./Pagination";
import {filterByType,setPagination} from "../actions/index";
import { Link } from "react-router-dom";
export default function Filters(){
    const dispatch = useDispatch();
    
    // Traer tipos desde el store
    const pokemonTypes = useSelector((state) => state.tipos);

    // Creo un estado local para el paginado.
    let [order,setOrder] = useState("ascending"),
        [filterType,setFilterType] = useState("numero"),
        [origin,setOrigin] = useState("all"),
        [pokemonType,setPokemonType] = useState("all");



    // Handlers -- estados locales.
    function handleOrder(event){
        setOrder(event.target.value)
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
        dispatch({
            type:"SET_ORIGIN",
            payload: event.target.value
        });
        console.log(pokemonType);
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
                <select type="origin" onClick={event => {handleOrigin(event)} }>
                    <option value="all">Todos</option>
                    <option value="api">Originales</option>
                    <option value="db">Creados</option>
                </select>
                <select type="pokemon Type" onClick={event => {handlePokemonType(event)} }>
                    <option value="all">"All"</option>
                    {
                    pokemonTypes.map(el => {
                        return <option value={el.tipo}>{el.tipo}</option> 
                    })
                    }
                </select>
                <button type="submit" onClick> Reset </button>
                {/* crear estados locales por cada boton - handleReset los pone en ""  */}
                <Pagination 
                />
        </div>
        
    )
}

