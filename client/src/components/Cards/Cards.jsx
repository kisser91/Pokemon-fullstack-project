import React,{useState} from "react";
import { useSelector } from "react-redux";
import { ALPHABETIC } from "../../actions/constants";
import Card from "./card";

// const page = useSelector((state) => state.page);

export default function Cards(){
    const allPokemons = useSelector((state) => state.pokemons);

    const { filterType_state, order_state, origin_state, pokemonType_state } = useSelector((state)=> state.order);
    
    const [sort,setSort] = useState([]);


    setSort = allPokemons.sort((a,b)=> {
        console.log("type",filterType_state)
        if(filterType_state !== "alfabetico"){
            return a.filterType_state - b.filterType_state
        } else {
            return a.nombre - b.nombre
        }
    })
    console.log(setSort);
    return  (
        <div>
                
             { 
                    sort && sort.map(el => { 
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
                        />       
                    })   
                }
            
        </div>
    )
}