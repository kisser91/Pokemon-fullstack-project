import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonId,getPokemons} from '../actions/index';
import { useParams } from 'react-router';
// import { GetPokemonName } from "../actions";

export default function Nav(){
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log("id",id);
    useEffect(()=>{  
        dispatch(getPokemonId(id));
    },[]);
    const pokemonId = useSelector((state) => state.filteredPokemons);
    let pokemon = pokemonId[0];
 
    return (
    <div>
    {    pokemonId.length === 1 &&       <div>
                                <h2>{pokemon.nombre}</h2>
                                <h3>Numero: {pokemon.id}</h3>
                                <h3>Vida: {pokemon.vida}</h3>
                                <h3>Fuerza: {pokemon.fuerza}</h3>
                                <h3>defensa: {pokemon.defensa}</h3>
                                <h3>Velocidad: {pokemon.velocidad}</h3>
                                <h3>Altura: {pokemon.altura}</h3>
                                <h3>Peso: {pokemon.peso}</h3>
                                <h3>Custom: {pokemon.custom}</h3>
                                <h3>Tipos: </h3>
                                {console.log("pesooo",pokemon.peso)}
                                <h3>{pokemon.tipo[0]} </h3>
                                <h3>{pokemon.tipo[1]} </h3>
                                <img src={pokemon.img} alt=""/> {/* HACER UN CONDICIONAL PARA RENDERIZAR UNA IMAGEN POR DEFECTO*/}
                                </div> 

    }    
    </div>
    )
}