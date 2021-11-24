
import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Search  from "./Search";
import style from "../styles/navbar/navbar.module.css";

export default function NavBar(){
    return (
        <div className={style.navbar}>
            <Search/>
            <div className={style.linkCreation}><Link to='/creation'>Crear personaje</Link></div>
            <div className={style.linkSearch}><Link to = "/home"><button>Home</button></Link></div>
            <Outlet/>
        </div>
    )
}
