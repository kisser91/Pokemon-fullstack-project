import React,{useState} from "react";
import { useSelector } from "react-redux";
import Card from "./card";

export default function Cards(){
    const allPokemons = useSelector((state) => state.pokemons);
    const {order,type} = useSelector((state)=> state.order);
    const page = useSelector((state) => state.page);

    
    // arraypokemons => ordenamiento => division => renderizar los cards donde estoy parado (pag)
    function paginacion(allPOkemons,order,type){
        allPokemons.sort()
    }
    paginacion()

    return(
        <div>
             {
                allPokemons && allPokemons.map(el => {
                   
                    return <Card 
                    nombre ={el.nombre}
                    id ={el.id}
                    vida ={el.vida}
                    fuerza ={el.fuerza}
                    velocidad ={el.velocidad}
                    altura ={el.altura}
                    peso ={el.peso}
                    img ={el.img}
                    />       
                })   
            }
        </div>
    )
}