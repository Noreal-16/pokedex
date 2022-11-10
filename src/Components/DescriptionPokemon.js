import React, {Fragment, useState} from "react";
import {HeadDescription} from "./HeadDescription";
import pokeBall from '../Assets/img/pokeBall.png';
import {CardDescription} from "./CardDescription";
import pokemon from "../Assets/img/Bulbasaur.png";

export const DescriptionPokemon = ({stateH, dataP}) => {
    console.log(dataP)
    return (
        <Fragment>
            {dataP.data.map((dataF, index) =>
                <Fragment key={index + 1} >
                    {stateH === dataF.id &&
                    <div className="container-home centrar-div" style={{background: dataF.color}}>
                        <div>
                            <HeadDescription name={dataF.name} id={dataF.id}/>
                        </div>
                        <div>
                            <img alt="" className="poke-ball" src={pokeBall}/>
                            <img alt="" className="pokemon" src={dataF.image}/>
                        </div>
                        <div>
                            <CardDescription type={dataF.type} description={dataF.description} height={dataF.height} weight={dataF.weight}/>
                        </div>
                    </div>
                    }
                </Fragment>
            )}
        </Fragment>
    )
}