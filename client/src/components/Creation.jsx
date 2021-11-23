import React,{useState,useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getTypes } from "../actions";
import { Link,useNavigate} from "react-router-dom";
import { postPokemon } from "../actions/index";

export default function Creation(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> { dispatch(getTypes()) },[]);

    const types = useSelector(state => state.tipos);
    const [input,setInput]= useState({
            nombre: "",
            vida: "",
            fuerza: "",
            velocidad: "",
            altura: "",
            peso: "",
            img: "https://i.pinimg.com/564x/3d/04/56/3d0456f4c89dffbf0f11d3847ca01681.jpg",
            tipo1: "normal",
            tipo2: "normal"
            
        });
        
     // const handleChange(event){
   
            // }
    function validate(input) {
        let errors = {};
        if (!input.nombre) {
            errors.title = 'El campo de nombre es obligatorio';
        } else if (!/^[a-zA-Z]?\s?[a-zA-Z]/.test(input.nombre)) {
            errors.title = 'el nombre debe estar compuesto por letras';
        }
                
        return errors;
    };
            
    function handleChange(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }    
        
    function handlePokemonType1(event){
        setInput({
            ...input,
            tipo1: event.target.value})
    }
    function handlePokemonType2(event){
        setInput({
            ...input,
            tipo2: event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault();
        let tipos =[input.tipo1],
            res;

        (input.tipo1 !== input.tipo2) ? res = tipos =tipos.concat([input.tipo2]) : res = tipos
        
        const response = {
            nombre: input.nombre,
            vida: input.vida,
            fuerza: input.fuerza,
            defensa: input.defensa,
            velocidad: input.velocidad,
            altura: input.altura,
            peso: input.peso,
            img: input.img,
            tipo: res
            }
        dispatch(postPokemon(response));
        setInput({
            nombre: "",
            vida: "",
            fuerza: "",
            defensa:"",
            velocidad: "",
            altura: "",
            peso: "",
            img: "",
            tipo1: "normal",
            tipo2: "normal"
        })
        console.log("response",response)
        navigate('../home');
    }   
    

    console.log(input);
    return (
    <div>
        <Link to = "/home"><button>Home</button></Link>
        <form action="">
            <div>
                <label>Nombre:</label>
                <input  onChange={event => {handleChange(event)}}
                type="text" 
                value={input.nombre} 
                name= "nombre"/>
            </div>
            <div>
                <label>vida:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value= {input.vida} 
                name= "vida"
                />
            </div>
            
            <div>
                <label>fuerza:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.fuerza} 
                name= "fuerza"/>
            </div>
            <div>
                <label>defensa:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.defensa} 
                name= "defensa"/>
            </div>
            <div>
                <label>velocidad:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.velocidad} 
                name= "velocidad"/>
            </div>
            <div>
                <label>altura:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.altura} 
                name= "altura"/>
            </div>
            <div>
                <label>peso:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.peso} 
                name= "peso"/>
            </div>
            <div>
                <label>img:</label>
                <input onChange={event => {handleChange(event)}}
                type="text" 
                value={input.img} 
                name= "img"/>
            </div>
            <div>
                <label>tipo 1:</label>
                <select type="pokemon Type" onChange={event => {handlePokemonType1(event)}}>
                    {
                    types.map(el => {
                        return <option value={el.tipo} name={"tipo"}>{el.tipo}</option> 
                    })
                    }
                </select>
                <label>tipo 2:</label>
                <select type="pokemon Type" onChange={event => {handlePokemonType2(event)} }>
                    {
                    types.map(el => {
                        return <option value={el.tipo} name={"tipo"}>{el.tipo}</option> 
                    })
                    }
                </select>
            </div>
                <button type="submit" onClick={event => {handleSubmit(event)} }> Enviar </button>

        </form>
    </div>
    )
}