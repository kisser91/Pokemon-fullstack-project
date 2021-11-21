import React,{useState}from "react";
import {useDispatch} from 'react-redux';
import { GetPokemonName } from "../actions";

export default function Nav(){
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    function handleOnChange(event){
        event.preventDefault();
        setName(event.target.value);
        console.log(name);
    }
    function handleSubmit(event){
        event.preventDefault();
        dispatch(GetPokemonName(name));
        dispatch({
            type:"SET_PAGINATION"
        });
        console.log("name escrito por el usuario",name);
        
    }


    return (
    <div>
        <input type="text" placeholder="Search..." onChange={event => handleOnChange(event)}/>
        <button type="submit" onClick={event => handleSubmit(event)}>Buscar</button>
    </div>
    )
}