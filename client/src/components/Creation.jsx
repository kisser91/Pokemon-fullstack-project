import React,{useState}from "react";
import {useDispatch,useSelector,useEffect} from 'react-redux';
import { getTypes } from "../actions";
import { Link } from "react-router-dom";
export default function Creation(){
    const dispatch = useDispatch();
    useEffect(()=> { dispatch(getTypes()) },[]);
}
    
    const types = useSelector(state => state.tipos);
    const [submit,setSubmit]= useState({
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

    return (
    <div>
        <Link to = "/home"><button>Home</button></Link>
        <form action="">
            <div>
                <label>Nombre:</label>
                <input type="text" value={input.nombre} nombre= "nombre"/>
            </div>
        </form>
    </div>
    )
}