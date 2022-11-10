import React from "react";
import "../Assets/css/search.css";
import search from "../Assets/icon/search.png";
export const Search = () => {
    return (
        <div className="container-search">
            <img alt="" className="search-icon"  src={search}/>
            <input className="input-search" placeholder="Buscar ..."/>
        </div>

    )
}