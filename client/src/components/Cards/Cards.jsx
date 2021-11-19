import React,{useState,setState} from "react";
import { useSelector } from "react-redux";
import { ALPHABETIC } from "../../actions/constants";
import Card from "./card";
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import { setOrder } from "../../actions";


export default function Cards(){
    const pokemons = useSelector((state) => state.pagination);
    const current = useSelector((state) => state.current);
    const order = useSelector((state)=> state.order);
    useEffect(() => {
        console.log('hello');
     }, [pokemons]);
    
    return  (
            
        <div>

                    {pokemons && pokemons[current].map(el => { 
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