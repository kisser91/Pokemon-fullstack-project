import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { setCurrentPage,setPagination } from "../actions";
import style from '../styles/pagination/pagination.module.css'


export default function Pagination (){
    const dispatch = useDispatch();
    const pages = useSelector((state) => state.pagination);
    function handleOnClick(event){
        let page;
        pages.length < 1 ? page = 0 : page = event.target.value;
        dispatch({
            type: "SET_PAGE",
            payload: (page || 0)
        })
    }

    return (
        <nav>
            {console.log("pages",pages)}
            { <ul className={style.pagination}>
                {pages.length ? pages.map((el,index) => ( <button type="submit" value={index} onClick={event => {handleOnClick(event)}}> {index} </button>))
                : <h3>No se encontraron resultados</h3>}
            </ul> }
        </nav>
    )
}