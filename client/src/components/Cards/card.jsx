import React from "react";

export default function Card({nombre,id,vida,fuerza,velocidad,altura,peso,img}){
    return(
        <div>
            <div>
                <h2>{nombre}</h2>
                <h3>Numero: {id}</h3>
                <h3>Vida: {vida}</h3>
                <h3>Fuerza: {fuerza}</h3>
                <h3>Velocidad: {velocidad}</h3>
                <h3>Altura: {altura}</h3>
                <h3>Peso: {peso}</h3>
                <img src={img} alt=""/>

            </div>
        </div>
    )
}