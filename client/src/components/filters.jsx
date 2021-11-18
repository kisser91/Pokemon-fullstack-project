import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

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
        event.preventDefault();
        setOrder( event.target.value);
        console.log(order);
    }
    function handleFilteredType(event){
        event.preventDefault();
        setFilterType( event.target.value);
        console.log(filterType);

    }
    function handleOrigin(event){
        event.preventDefault();
        setOrigin( event.target.value);
        console.log(origin);

    }
    function handlePokemonType(event){
        event.preventDefault();
        setPokemonType( event.target.value);
        console.log(pokemonType);

    }
    
    // Handler -- estado global.

    function handleSubmit(event){
        event.preventDefault();

        dispatch({
            type: "SET_ORDER",
            payload: {
                filterType_state: filterType,
                reversed: order,
                origin_state: origin,
                pokemonType_state: pokemonType,
            }
        })
    }

    
    // Paginado



    /* 
            ---- numerico    ----> order ascending/descending // filter -->
    pokemon 
            ---- alfabetico  ----> order ascending/descending // filter -->
    */

    // Componente 
    return (
        <div>
                <select  name="order" onChange={event => {handleOrder(event)}}>
                    <option value="false">Ascendente</option>
                    <option value="true">Descendente</option>
                </select>
                <select name="type" onChange={event => {handleFilteredType(event)}}>
                    <option value="id">Numero</option>
                    <option value="alfabetico">Alfabetico</option>
                    <option value="fuerza">Fuerza</option>
                </select>
                <select type="origin" onClick={event => {handleOrigin(event)} }>
                    <option value="todos">Todos</option>
                    <option value="existentes">Existentes</option>
                    <option value="creados">Creados</option>
                </select>
                <select type="pokemon Type" onClick={event => {handlePokemonType(event)} }>
                    <option value="All">"All"</option>
                    {
                    pokemonTypes.map(el => {
                        return <option value={el.tipo}>{el.tipo}</option> 
                    })
                    }
                </select>

                {/* Submit button => recoje estados locales para enviar una sola accion al store  */}
                <button type="submit" onClick={event => {handleSubmit(event)} }> Recargar </button>
        </div>
        
    )
}

