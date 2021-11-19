import {ASCENDANT,DESCENDANT,NUMERIC,ALPHABETIC} from '../actions/constants';

const initialState = {
    pokemons:[],// api + db 40 + db -->
    tipos: [],
    current: 0,    
    pagination:[],
    order: true 
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
        case 'SET_ORDER':
            return{
                ...state,
                order: action.payload
                }
        case "SET_PAGINATION":
            let paginatedPokemons = []
        
                let pe = 9 // cantidad de pokemons per page
                let pages = Math.ceil(state.pokemons.length / pe),
                    auxFirst = 0,
                    auxLast = pe;  
            
            
                for(let i = 0; i<pages;i++){
                    paginatedPokemons.push(state.pokemons.slice(auxFirst,auxLast))
                    auxFirst+= 9;
                    auxLast+=9;
                  }
        
                  state.order.order && paginatedPokemons.reverse()
                

        
            return{
                ...state,
                pagination: paginatedPokemons
                
            }   
        case "SET_PAGE":
            return{
                 ...state,
                current: action.payload  
                }   
    
        default:
            return{
                ...state
            }
    }
};



