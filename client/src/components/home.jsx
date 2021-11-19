import React from "react";
import { Link } from "react-router-dom";
import Cards from './Cards/Cards';
import Filters from "./filters";
import Pagination from "./Pagination";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect,useState } from "react";
import { getPokemons, getTypes,setPagination } from "../actions";



export default function Home(){
    // Componente 
    const dispatch = useDispatch();
    
    // Llamado al back para setear el estado global.
    useEffect(()=>{
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);

    let pokemons = useSelector((state) => state.pokemons);
    console.log(pokemons);
        
    function paginate( paginatedPokemons = [] ){
    
            let pe = 9 // cantidad de pokemons per page
            let pages = Math.ceil(pokemons.length / pe),
                auxFirst = 0,
                auxLast = pe;  
        
        
            for(let i = 0; i<pages;i++){
                paginatedPokemons.push(pokemons.slice(auxFirst,auxLast))
                auxFirst+= 9;
                auxLast+=9;
              }
            return paginatedPokemons
    }

    let pagination = paginate();

    dispatch(setPagination(pagination))



    // let [state,setState] = useState(false);

    // function HandleRefresh(event){
    //     event.preventDefault();
    //     pokemons.length ? setState(true) : setState(false)
    // }



    return (
        <div>
            {/* <button type="submit" onClick={event => {HandleRefresh(event)} }> Load Pokemons </button> */}

            <Link to='/pokemons'>Crear personaje</Link>
            <h1>Pokemon Api</h1>
            <Filters/>
           {
           pokemons.length && <Cards />
           }
           <Pagination/>
        </div>
        
    )
}

