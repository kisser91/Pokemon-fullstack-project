import React from "react";
import {NavLink}from "react-router-dom";
import card from "../styles/cards/cards.module.css"

export default function Card({nombre,id,vida,fuerza,velocidad,altura,peso,img,custom,tipo}){
    return(
            <div className={card.card}>
                <div className={card.divTitle}>
</div>
                <div className={card.info}>
                <h2 className={card.name}>{nombre}</h2>
                {/* <h3>Numero: {id}</h3> */}
                {/* <h3>Vida: {vida}</h3>
                <h3>Fuerza: {fuerza}</h3>
                <h3>Velocidad: {velocidad}</h3>
                <h3>Altura: {altura}</h3>
                <h3>Peso: {peso}</h3>
                <h3>Custom: {custom}</h3> */}
                <h3>Tipos: </h3>
                <div className={card.tipos}>
                    <h4>{tipo[0]} {tipo[1]} </h4>
                </div>
           
                <NavLink className={navData => card.navLink} to={`/pokemons/${id}`}>Detail</NavLink>
                </div>
                <img src={img} alt=""/> {/* HACER UN CONDICIONAL PARA RENDERIZAR UNA IMAGEN POR DEFECTO*/}
            
            </div>
        
    )
}