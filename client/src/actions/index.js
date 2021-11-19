import axios from 'axios';
import {    NUMERIC,
            ALPHABETIC,
            ASCENDANT,
            DESCENDANT,
            GET_POKEMONS,
            GET_TYPES

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


export function setPagination(payload){
    return {
        type: "SET_PAGINATION",
        payload
    }
}

export function setCurrentPage(payload){
    return {
        type: "SET_PAGE",
        payload
    }
}





export function setOrder(payload){
    return {
        type: "SET_ORDER",
        payload
    }
}




