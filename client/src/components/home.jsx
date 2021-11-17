import React from "react";
import { useState,useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, getTypes } from "../actions";
import { Link } from "react-router-dom";
import Cards from './Cards/Cards';


export default function Home(){
    const dispatch = useDispatch();
    
        useEffect(()=>{
            dispatch(getPokemons(),getTypes());
        },[dispatch]);

        useEffect(()=>{
            dispatch(getTypes());
        },[dispatch]);

    // Traer tipos desde el store
    const pokemonTypes = useSelector((state) => state.tipos);
    console.log(pokemonTypes);
    
    // Creo un estado local para el paginado.
    let [submit,setSubmit] = useState({
        order: "ascending",
        type: "Numero"
    });

    console.log("antes del handle",submit);
    function handleSubmit(event){
        event.preventDefault();
        console.log("event target value",event.target.value);
        setSubmit({
            ...submit,
            [event.target.name]: event.target.value
          })
        console.log("event name: ",event.target.name);
        console.log("event value: ",event.target.value);
        console.log(submit);
        // dispatch({
        //     type: "SET_ORDER",
        //     payload: {
        //         order: submit.order,
        //         type: submit.type 
        //     }
        // })
    }
    
    return (
        <div>
            <Link to='/pokemons'>Crear personaje</Link>
            <h1>Pokemon Api</h1>
            <form>
                <select  name="order" >
                    <option value="ascending">Ascendente</option>
                    <option value="descending">Descendente</option>
                </select>
                <select name="type"  >
                    <option value="Numero">Numero</option>
                    <option value="Alfabetico">Alfabetico</option>
                    <option value="Fuerza">Fuerza</option>
                </select>
                <select type="origin" >
                    <option value="Todos">Todos</option>
                    <option value="Existentes">Existentes</option>
                    <option value="Creados">Creados</option>
                </select>
                <select type="tipo" >
                    {
                    pokemonTypes.map(el => {
                        return <option value={el.tipo}>{el.tipo}</option> 
                    })
                    }
                    <option value="All">All</option>
                </select>
                
            <input type="submit"  name="order" onClick={event => {handleSubmit(event)} }/>
                
            </form>
            <Cards />
        </div>
        
    )
}