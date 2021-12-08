import axios from 'axios';
import {
    GET_POKEMONS, 
    GET_TYPES, 
    POST_POKEMON,
    SET_ORDER,
    SET_ORDER_TYPE,
    FILTER_BY_TYPE,
    SET_ORDERED_POKEMONS,
    SET_PAGINATION,
    SET_PAGE,
    SET_ORIGIN,
    GET_POKEMON_NAME,
    GET_POKEMON_ID
} from './constants';

export function getPokemons(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data
        })

    }
}
export function getTypes(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/types');
        
        return dispatch({
            type: GET_TYPES,
            payload: json.data
        })
    }
}

export function postPokemon(payload){
    return async function(dispatch){
        const form = await axios.post("http://localhost:3001/pokemons",payload)
        return form
    }
}

export function setPagination(){
    return {
        type: SET_PAGINATION,
    
    }
}

export function setCurrentPage(payload){
    return {
        type: SET_PAGE,
        payload
    }
}

export function setOrder(payload){
    return {
        type: SET_ORDER,
        payload
    }
}

export function setOrderType(payload){
    return{
        type: SET_ORDER_TYPE,
        payload
    }
}

export function setOrderedPokemons(payload){
    return{
        type: SET_ORDERED_POKEMONS,
        payload
    }
}

export function filterByType(payload){
    return{
        type: FILTER_BY_TYPE,
        payload
    }
}

export function setOrigin(payload){
    return{
        type: SET_ORIGIN,
        payload
    }
}
export function GetPokemonName(name){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/?nombre=${name}`)
            console.log("json data",json.data)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: json.data
            })
        } catch (error){console.log(error)
        }
    }
}
export function getPokemonId(id){
    return async function(dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${id}`)
            console.log("Pokemon id api",json.data)
            return dispatch({
                type: GET_POKEMON_ID,
                payload: json.data
            })
        } catch (error){console.log(error)
        }
    }
}