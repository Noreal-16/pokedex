import React, {useState} from "react";
import {InfoPokemonDesc} from "./InfoPokemonDesc";

export const CardDescription = ({type, description, height, weight }) => {
    const [getType] = useState(type.split(","));
    return (
        <div className="container-description">
            <div className="container-nav">
                {getType.map((dataType)=>
                    <nav className="nav-info">{dataType}</nav>
                )}
            </div>
            <h2 className="h2-about">About</h2>
            <div className="container-inf-desc">
            <InfoPokemonDesc height={height} weight={weight} />
            </div>
            <p className="desc-info">{description}</p>
        <button className="buton-delete"> Delete Pokemon</button>
        </div>
    )
}