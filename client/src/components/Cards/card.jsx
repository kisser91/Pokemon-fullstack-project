import React from "react";
import {NavLink}from "react-router-dom"

export default function Card({nombre,id,vida,fuerza,velocidad,altura,peso,img,custom,tipo}){
    return(
        <div>
            <div>
                <h2>{nombre}</h2>
                <h3>Numero: {id}</h3>
                {/* <h3>Vida: {vida}</h3>
                <h3>Fuerza: {fuerza}</h3>
                <h3>Velocidad: {velocidad}</h3>
                <h3>Altura: {altura}</h3>
                <h3>Peso: {peso}</h3>
                <h3>Custom: {custom}</h3> */}
                <h3>Tipos: </h3>
                <h3>{tipo[0]} </h3>
                <h3>{tipo[1]} </h3>
                <img src={img} alt=""/> {/* HACER UN CONDICIONAL PARA RENDERIZAR UNA IMAGEN POR DEFECTO*/}
            
                <NavLink to={`/pokemons/${id}`}>Detail</NavLink>
            </div>
        </div>
    )
}