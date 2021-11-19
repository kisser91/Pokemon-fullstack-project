import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setCurrentPage } from "../actions";


export default function Pagination (){
    const dispatch = useDispatch();
    
    const pages = useSelector((state) => state.pagination);
    console.log(pages);
    function handleOnClick(event){
        dispatch({
            type: "SET_PAGE",
            payload: event.target.value
        })

    }
    return (
        <nav>
            { <ul className='paginado'>
                {pages && pages.map((number,index) => (

                <button type="submit" value={index} onClick={event => {handleOnClick(event)}}> {index} </button>

                ))}
            </ul> }
        </nav>
    )
}