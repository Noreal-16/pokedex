import React from "react";
import {HeadDescription} from "./HeadDescription";
import pokeBall from '../Assets/img/pokeBall.png';
import {CardDescription} from "./CardDescription";
import pokemon from "../Assets/img/Bulbasaur.png";

export const DescriptionPokemon = () => {
    return (
        <>
            <div>
                <HeadDescription />
            </div>
            <div>
                <img alt="" className="poke-ball" src={pokeBall}/>
                <img alt="" className="pokemon" src={pokemon}/>
            </div>
            <div >
                <CardDescription/>
            </div>
        </>
    )
}