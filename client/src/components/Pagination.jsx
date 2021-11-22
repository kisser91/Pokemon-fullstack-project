import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setCurrentPage,setPagination } from "../actions";


export default function Pagination (){
    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pagination);
    function handleOnClick(event){
        dispatch({
            type: "SET_PAGE",
            payload: (event.target.value || "0")
        })
    }

    return (
        <nav>
            {console.log("pages",pages)}
            { <ul className='paginado'>
                {pages.length ? pages.map((el,index) => ( <button type="submit" value={index} onClick={event => {handleOnClick(event)}}> {index} </button>))
                : <h3>No se encontraron resultados</h3>}
            </ul> }
        </nav>
    )
}