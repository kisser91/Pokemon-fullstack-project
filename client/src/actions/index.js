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

// export function filterByType(){
//     return {
//         type: "FILTER_BY_TYPE".
//     }
// }


export function setPagination(){
    return {
        type: "SET_PAGINATION",
    
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

export function setOrderType(payload){
    return{
        type: "SET_ORDER_TYPE",
        payload
    }
}

export function setOrderedPokemons(payload){
    return{
        type: "SET_ORDERED_POKEMONS",
        payload
    }
}

export function filterByType(payload){
    return{
        type: "FILTER_BY_TYPE",
        payload
    }
}

export function setPagesQuantity(payload){
    return{
        type: "SET_PAGES_QUANTITY",
        payload
    }
}


export function setOrigin(payload){
    return{
        type: "SET_ORIGIN",
        payload
    }
}

