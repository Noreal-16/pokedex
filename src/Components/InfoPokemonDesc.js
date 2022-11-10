import React from "react";
import balance from "../Assets/icon/img.png";
import ruler from "../Assets/icon/img_1.png"
export const InfoPokemonDesc =()=>{
    return(
        <>
            <div className="inf-sep">
                <img alt="" className="icon-info" src={balance}/>
                <p className="description-1">6,9 kg</p>
                <p className="description-2">Weight</p>
            </div>
            <div className="separator-line"/>
            <div>
                <img alt="" className="icon-info position" src={ruler}/>
                <p className="description-1">0,7 m</p>
                <p className="description-2">Height</p>
            </div>
            <separator className="separator-line separator-line-1"/>
            <div>
                <p className="description-1 justify">Chlorophyll
                    Overgrow</p>
                <p className="description-2">Moves</p>
            </div>
        </>
    )
}