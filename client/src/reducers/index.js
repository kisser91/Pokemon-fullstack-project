import {ASCENDANT,DESCENDANT,NUMERIC,ALPHABETIC} from '../actions/constants';

const initialState = {
    pokemons:[],// api + db 40 + db -->
    filteredPokemons: [],
    statusFilter: true,
    tipos: [],
    pages: 0,
    current: 0,    
    pagination:[],
    order: false,
    orderType: "num",
    origin: "all"
};

export default function rootReducer(state = initialState,action){
    switch(action.type){
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload

            }
        case 'GET_TYPES':
            return{
                ...state,
                tipos: action.payload
            }
        case 'POST_POKEMON':
            return{
                ...state,
            }
        case 'SET_ORDER':
            return{
                ...state,
                order: action.payload
                }
        case 'SET_ORDER_TYPE':
            return{
                ...state,
                orderType: action.payload
            }
        case 'FILTER_BY_TYPE':

            console.log("filter type => ",action.payload);
            let statusFilter = "";
            let allPokes = state.pokemons,
                  statusFiltered = (action.payload === 'all') ? allPokes : allPokes.filter(el => {
                      return el.tipo[0] === action.payload || el.tipo[1] === action.payload 
                    });
                  (statusFiltered.length === 0) ? statusFilter = false : statusFilter = true; 
                  console.log("allPOkes => ",allPokes);
                  console.log("filtered => ",statusFiltered);
                  return{
                ...state,
                filteredPokemons: statusFiltered,
                statusFilter: statusFilter
            }    
        case 'SET_ORDERED_POKEMONS':
            let orderedList = [];
            // ESTA BUGEADO EL NUM -->
            orderedList = state.filteredPokemons
            .sort(function(a,b){
                if (action.payload === "str"){
                    if(a.fuerza> b.fuerza){
                        return 1;
                    }
                    if(b.fuerza > a.fuerza){
                        return -1;
                    }
                    return 0
                }
                else if(action.payload === "num"){
                    if(a.id> b.id){
                        return 1;
                    }
                    if(b.id > a.id){
                        return -1;
                    }
                    return 0
                }
                else{
                    if(a.nombre > b.nombre){
                        return 1;
                    }
                    if(b.nombre > a.nombre){
                        return -1;
                    }
                    return 0
                }
            })
            console.log("ordered",action.payload,orderedList);
            return{
                ...state,
                filteredPokemons: orderedList.reverse()
            }


        case "SET_PAGINATION":
            let paginatedPokemons = [];
                let auxPoke = state.filteredPokemons;
                if(!auxPoke.length) auxPoke = state.pokemons;
                state.order && auxPoke.reverse();
                !state.order && auxPoke.reverse();
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
        
                //   state.order && paginatedPokemons.reverse().map(el=>{el.reverse()})
                
        
            return{
                ...state,
                pagination: paginatedPokemons
                
            }   
        case "SET_PAGE":
            console.log("current =>",action.payload);
            return{
                 ...state,
                current: action.payload  
                }   
        case "SET_PAGES_QUANTITY":
            return{
                ...state,
                pages: action.payload
            }
        // case "SET_ORIGIN":
        //     console.log("filter origin => ",action.payload);
        //     let pokes = state.filteredPokemons;
        //     let aux = false;
        //     let OriginFiltered = (action.payload === 'all') ? pokes : pokes.filter(el => {
        //         if(action.payload === "api"){
        //             return typeof(el.id) !==  Number
        //         }
        //         else {
        //             return  typeof(el.id) ===  String
        //         }
        //         });

        //         (OriginFiltered.length === 0) ? aux = false : aux = true; 
        //     return{
        //         ...state,
        //         filteredPokemons: OriginFiltered,
        //         statusFilter: aux
        //     }
        
        case "GET_POKEMON_NAME":
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



