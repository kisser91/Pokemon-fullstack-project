import React from "react";
import Cards from "./Cards/Cards";
import { useSelector } from "react-redux";

export default function Container (){
    const filteredPokemons = useSelector((state) => state.filteredPokemons);
   
    return (
    filteredPokemons.length &&  <Cards/>
    )
}