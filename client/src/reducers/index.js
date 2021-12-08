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
} from '../actions/constants';

const initialState = {
    pokemons:[],// api + db 80 + db -->
    filteredPokemons: [], // filtrado
    tipos: [],
    current: 0,    
    pagination:[], // [ [] [] ]
    order: false,
    orderType: "num",
    origin: "all"
};

export default function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload

            }
        case GET_TYPES:
            return{
                ...state,
                tipos: action.payload
            }
        case POST_POKEMON:
            return{
                ...state,
            }
        case SET_ORDER: // ASCENDENTE  / DESCENDENTE
                state.order && state.filteredPokemons.reverse();
                !state.order && state.filteredPokemons.reverse();
            return{
                ...state,
                order: action.payload
                }
        case SET_ORDER_TYPE: // SETEAR TIPO DE ORDEN / NUMERICO, ALFABETICO, FUERZA
            return{
                ...state,
                orderType: action.payload
            }
        case FILTER_BY_TYPE:
            console.log("filter type => ",action.payload);
            let statusFilter = "";
            let allPokes = state.pokemons,
                  statusFiltered = (action.payload === 'all') ? allPokes : allPokes.filter(el => {
                      return el.tipo[0] === action.payload || el.tipo[1] === action.payload 
                    });
                  (statusFiltered.length === 0) ? statusFilter = false : statusFilter = true; 

                  return{
                ...state,
                filteredPokemons: statusFiltered,
                statusFilter: statusFilter
            }    
        case SET_ORDERED_POKEMONS:
            let orderedList = [];
            orderedList = state.filteredPokemons
            .sort(function(a,b){
                if (action.payload === "str"){
                    if(a.fuerza< b.fuerza){
                        return 1;
                    }
                    if(b.fuerza < a.fuerza){
                        return -1;
                    }
                    return 0
                }
                else if(action.payload === "num"){
                    if(a.id < b.id){
                        return 1;
                    }
                    if(b.id < a.id){
                        return -1;
                    }
                    return 0
                }
                else{
                    if(a.nombre < b.nombre){
                        return 1;
                    }
                    if(b.nombre < a.nombre){
                        return -1;
                    }
                    return 0
                }
            })

            return{
                ...state,
                filteredPokemons: orderedList
                .reverse()
            }


        case SET_PAGINATION:
            let paginatedPokemons = [];
                let auxPoke = state.filteredPokemons;
                if(!auxPoke.length) auxPoke = [...state.pokemons];
                let pe = 9 // cantidad de pokemons per page
                let pages = Math.ceil(auxPoke.length / pe),
                    auxFirst = 0,
                    auxLast = pe;  
            
                let auxPokemons = [];
                auxPokemons.push(auxPoke)
                for(let i = 0; i<pages;i++){
                    paginatedPokemons.push(auxPoke.slice(auxFirst,auxLast))
                    auxFirst+= 9;
                    auxLast+=9;
                  }                 
        
            return{
                ...state,
                pagination: paginatedPokemons
                
            }   
        case SET_PAGE: // SET CURRENT PAGE
            return{
                 ...state,
                current: action.payload  
                }   

        case SET_ORIGIN:
                console.log("filter origin => ",action.payload);
                let pokes = state.filteredPokemons;
                let aux = action.payload
                console.log(aux)
                let OriginFiltered = (aux === 'all') ? pokes :  pokes.filter(el => {

                    if(aux === "api"){
                        return el.custom !== true
                    }
                    else if (aux === "db"){
                        return  el.custom === true
                    }});
    
                return{
                    ...state,
                    filteredPokemons: OriginFiltered,
                    origin: aux
                }
           
        case GET_POKEMON_NAME:
            return{
                ...state,
                filteredPokemons: action.payload
            }
        
        case GET_POKEMON_ID:
            return{
                ...state,
                filteredPokemons: action.payload
                }

        default:
            return{
                ...state
            }
    }
};



