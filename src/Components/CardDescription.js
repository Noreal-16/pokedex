import React from "react";
import {InfoPokemonDesc} from "./InfoPokemonDesc";

export const CardDescription = () => {
    return (
        <div className="container-description">
            <div className="container-nav">
                <nav className="nav-info">Grass</nav>
                <nav className="nav-info">Poison</nav>
            </div>
            <h2 className="h2-about">About</h2>
            <div className="container-inf-desc">
            <InfoPokemonDesc/>
            </div>
            <p className="desc-info">There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
        <button className="buton-delete"> Delete Pokemon</button>
        </div>
    )
}