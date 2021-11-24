import React,{useEffect, useState}from "react";
import {useDispatch} from 'react-redux';
import { GetPokemonName,setPagination} from "../actions";
import style from "../styles/navbar/navbar.module.css";
import { useNavigate } from "react-router";
export default function Nav(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState("");

    useEffect(()=>{
        dispatch(setPagination());
         
    },[dispatch]);


    function handleOnChange(event){
        event.preventDefault();
        setName(event.target.value);
        // console.log(name);
    }
    function handleSubmit(event){
        event.preventDefault();
        dispatch(GetPokemonName(name));
        navigate("./pokemons/:id")
    }


    return (
    <div className={style.search}>
        <input type="text" placeholder="Search..." onChange={event => handleOnChange(event)}/>
        <button type="submit" onClick={event => handleSubmit(event)}>Buscar</button>

    </div>
    )
}