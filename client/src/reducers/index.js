import {ASCENDANT,DESCENDANT,NUMERIC,ALPHABETIC} from '../actions/constants';

const initialState = {
    pokemons:[],// api + db 40 + db -->
    order: { 
        order: ASCENDANT, 
        type: NUMERIC // ALFABETICO
    },
    filter:{
        procedencia: null, // procedencia --> db o api

    }, // lo primero que hace es paginar -> 
    tipos: [],
    page: 1
};

/*  [numerico ] [ asciendente] button

CADA VEZ QUE CAMBIE UNO DE LOS PARAMETROS DE ORDER--> SE CAMBIA PAGINADO(useEffect???) -> 
PAGINADO TOMA pokemmons y lo divide en subsarrays en pagination --> el landing page renderiza pagionation:[[1][2][3]] => tomando 
como posicion la pag seteada donde estamos parados

HOME -> USEFFECT --> 


BACK --> ARRAY --> API + DB ---> ARRAY - TIPO: NUMERICO - ASCENDANT --> USEFFECT -> [[1,2,3,4,5,6,7,8,9] [10,11] [] ]

                                                                                                 1            2

                                                                                            PAGINADO -()





*/

export default function rootReducer(state = initialState,action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload
            }
        case 'GET_TYPES':
            return{
                ...state,
                tipos: action.payload
                }                        
        case '"ALPHABETIC_FILTERING"':
            const allPokemons = state.pokemons;
            const statusFilter = action.payload;

            return{
                ...state,
                order: action.payload.order,
                type: action.payload.type
                    }            
        default:
            return{
                ...state
            }
    }
};



