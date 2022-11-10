import React from "react";
import "../Assets/css/card.css";
import pk1 from '../Assets/img/img.png';
export const Card = ({descrciptionI}) => {
    return (
        <div className="container-card" onClick={()=>descrciptionI(false)} >
            <p>#001</p>
            <img alt="" className="img-card" src={pk1}/>
            <div className="container-card-foot">
                <h2 className="h2-text-card">Budbasur</h2>
            </div>
        </div>
    )
}