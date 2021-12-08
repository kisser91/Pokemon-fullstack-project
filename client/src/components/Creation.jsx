import React,{useState,useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getTypes } from "../actions";
import {useNavigate} from "react-router-dom";
import { postPokemon } from "../actions/index";
import creation from "../styles/creation/creation.module.css";
export default function Creation(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> { dispatch(getTypes()) },[]);

    const types = useSelector(state => state.tipos);
    const [input,setInput]= useState({
            nombre: "",
            vida: 5,
            fuerza: 10,
            defensa: 10,
            velocidad: 10,
            altura: 10,
            peso: 10,
            img: "https://i.imgur.com/UbzN4xL.png",
            tipo1: null,
            tipo2: null
            
        });
        const [err,setErr]= useState({})
        const [validName,setValidName] = useState( false);       
        const [typeOne,setTypeOne] = useState("normal");
        const [typeTwo,setTypeTwo] = useState("bug");

        function handlePokemonType1(event){ setTypeOne(event.target.value)}
        function handlePokemonType2(event){ setTypeTwo(event.target.value)}
        
    function handleChange(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        setErr(
            validate({
                ...input,
            [event.target.name] : event.target.value
            })
        )
    } 

    function validate(input) {
        let errors = {};

        if (!input.nombre) {
            errors.nombre = 'El campo de nombre es obligatorio';
        }
        else if (!/^[a-zA-Z]/.test(input.nombre)) {
            errors.nombre = 'Debe estar compuesto solo por letras';
        }
        input.nombre.length > 1 && !errors.nombre ? setValidName(true) : setValidName(false)
        return errors;
    };
        
    function handleSubmit(event){
        event.preventDefault();
        let tipos =[input.tipo1,input.tipo2];
        console.log(types)    
        if (tipos[0] === null || tipos[1] === null) tipos = null ;
        const response = {
            nombre: input.nombre ,
            vida: input.vida || 10,
            fuerza: input.fuerza || 10,
            defensa: input.defensa || 10,
            velocidad: input.velocidad || 10,
            altura: input.altura || 10,
            peso: input.peso || 10,
            img: input.img  || "https://i.imgur.com/UbzN4xL.png",
            tipo: [typeOne,typeTwo] || ["normal","bug"]
            }
        console.log(response);
        typeOne !== typeTwo && validName && dispatch(postPokemon(response)) && navigate('../home');
    }   
    
    return (
                <div className={creation.box}>
                <form action="">
            <div>
                <label>Nombre:</label>
                <input  onChange={event => {handleChange(event)}}
                type="text" 
                value={input.nombre} 
                name= "nombre"/>
                {err.nombre   && <p> {err.nombre} </p>}
            </div>
            <div>
                <label>vida:</label>
                <input onChange={event => {handleChange(event)}}
                type="number" 
                value= {input.vida} 
                name= "vida"
                />
            </div>
            
            <div>
                <label>fuerza:</label>
                <input onChange={event => {handleChange(event)}}
                type="number" 
                value={input.fuerza} 
                name= "fuerza"/>
            </div>
            <div>
                <label>defensa:</label>
                <input onChange={event => {handleChange(event)}}
                type="number" 
                value={input.defensa} 
                name= "defensa"/>
            </div>
            <div>
                <label>velocidad:</label>
                <input onChange={event => {handleChange(event)}}
                type="number"  
                value={input.velocidad} 
                name= "velocidad"/>
            </div>
            <div>
                <label>altura:</label>
                <input onChange={event => {handleChange(event)}}
                type="number" 
                value={input.altura} 
                name= "altura"/>
            </div>
            <div>
                <label>peso:</label>
                <input onChange={event => {handleChange(event)}}
                type="number" 
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
            <div className={creation.tipos}>
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