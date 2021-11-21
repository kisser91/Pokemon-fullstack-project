import React,{useState,useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getTypes } from "../actions";
import { Link } from "react-router-dom";
export default function Creation(){
    const dispatch = useDispatch();
    useEffect(()=> { dispatch(getTypes()) },[]);

    
    const types = useSelector(state => state.tipos);
    const [input,setInput]= useState({
            nombre: "",
            id: "",
            vida: "",
            fuerza: "",
            velocidad: "",
            altura: "",
            peso: "",
            img: "",
            tipo:[]
    })

    // const handleChange(event){

    // }

    return (
    <div>
        <Link to = "/home"><button>Home</button></Link>
        <form action="">
            <div>
                <label>Nombre:</label>
                <input 
                type="text" 
                value={input.nombre} 
                name= "nombre"/>
            </div>
            <div>
                <label>vida:</label>
                <input 
                type="text" 
                value= {input.vida} 
                name= "vida"
                />
            </div>
            
            <div>
                <label>fuerza:</label>
                <input 
                type="text" 
                value={input.fuerza} 
                name= "fuerza"/>
            </div>
            <div>
                <label>velocidad:</label>
                <input 
                type="text" 
                value={input.velocidad} 
                name= "velocidad"/>
            </div>
            <div>
                <label>altura:</label>
                <input 
                type="text" 
                value={input.altura} 
                name= "altura"/>
            </div>
            <div>
                <label>peso:</label>
                <input 
                type="text" 
                value={input.peso} 
                name= "peso"/>
            </div>
            <div>
                <label>img:</label>
                <input 
                type="text" 
                value={input.img} 
                name= "img"/>
            </div>
            <div>
                <label>tipo:</label>
                {/* <select name="" id=""></select> */}
            </div>

        </form>
    </div>
    )
}