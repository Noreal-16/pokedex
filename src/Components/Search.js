import React from "react";
import "../Assets/css/search.css";
import search from "../Assets/icon/search.png";

export const Search = ({buscar}) => {

    const searchPokemon =({target})=>{
        buscar(target.value)
    }
    return (
        <div className="container-search">
            <img alt="" className="search-icon" src={search}/>
            <input className="input-search" name="buscador-pk" onChange={searchPokemon}  placeholder="Buscar ..."/>
        </div>
    )
}