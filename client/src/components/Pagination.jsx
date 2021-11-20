import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setCurrentPage } from "../actions";


export default function Pagination (){
    const dispatch = useDispatch();
    const status = useSelector((state) => state.statusFilter);

    const pages = useSelector((state) => state.pagination);
    console.log(pages);
    function handleOnClick(event){
        dispatch({
            type: "SET_PAGE",
            payload: (event.target.value || "0")
        })
    }

    // [[0][1][2]]
    return (
        <nav>
            {console.log("pages",pages)}
            { <ul className='paginado'>
                {pages.length && status ? pages.map((el,index) => ( <button type="submit" value={index} onClick={event => {handleOnClick(event)}}> {index} </button>))
                : <h3>No se encontraron resultados</h3>}
            </ul> }
        </nav>
    )
}