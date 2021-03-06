import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonId} from '../actions/index';
import { useParams } from 'react-router';
import detail from "../styles/detail/detail.module.css"

export default function Nav(){
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(()=>{  
        dispatch(getPokemonId(id));
    },[]);
    const pokemonId = useSelector((state) => state.filteredPokemons);
    let pokemon = pokemonId[0];
    
    return (
    <div className={detail.box}>
    {   pokemonId.length === 1 ?<div className={detail.text}>
                                <h2 className={detail.title}>{pokemon.nombre}</h2>
                                <h3>Id: {pokemon.id}</h3>
                                <h3>Vida: {pokemon.vida}</h3>
                                <h3>Fuerza: {pokemon.fuerza}</h3>
                                <h3>defensa: {pokemon.defensa}</h3>
                                <h3>Velocidad: {pokemon.velocidad}</h3>
                                <h3>Altura: {pokemon.altura}</h3>
                                <h3>Peso: {pokemon.peso}</h3>
                                <h3>Tipos: </h3>
                                <div className={detail.tipos}><h3>{pokemon.tipo[0]}  {pokemon.tipo[1]} </h3></div>
                                <img src={pokemon.img} alt=""/> 
                                </div> 
                                : <h1>Buscando...</h1> }    
    </div>
    )
}