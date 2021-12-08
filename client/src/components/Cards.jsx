import { ALPHABETIC } from "../actions/constants";
import {setPagination } from "../actions";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import cards from "../styles/cards/cards.module.css"
import Card from "./card";

export default function Cards(){
    const pokemons = useSelector((state) => state.pagination);
    const filtered = useSelector((state) => state.filteredPokemons);
    useEffect(() => {setPagination()}, [filtered]);
    let current = useSelector((state) => state.current);
    if (current >= pokemons.length ) current = 0;
    return  (
            
        <div className={cards.cards}>
                    { 
                    filtered.length && pokemons && (current !== null) && pokemons[current].map(el => { 
                    // sorted && sorted.map(el => {         
                        return <Card 
                        nombre ={el.nombre}
                        id ={el.id}
                        vida ={el.vida}
                        fuerza ={el.fuerza}
                        velocidad ={el.velocidad}
                        altura ={el.altura}
                        peso ={el.peso}
                        img ={el.img}
                        tipo ={el.tipo}
                        />       
                    }) 

                }
            
        </div>
    )
}