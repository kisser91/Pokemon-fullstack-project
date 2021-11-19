import React from "react";
import Cards from "./Cards/Cards";
import { useSelector } from "react-redux";

export default function Container (){
    const pagination = useSelector((state) => state.pagination);
   
    return (
    pagination.length &&  <Cards/>
    )
}