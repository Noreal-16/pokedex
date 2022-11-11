import React, {useState} from "react";
import '../Assets/css/head.css';
import poke_bola from "../Assets/icon/icon.png";
import add_button from "../Assets/icon/button.png";

export const Head = ({stateF}) => {
    const [onButton, setOnButton] = useState(true);

    const onHideButton = (e) => {
        e.preventDefault();
        setOnButton(false)
        stateF(false)
    }
    return (
        <div className='container-head'>
            <a href='/' className="link-home">
                <img alt='' className="logo-pkb" src={poke_bola}/>
                <h1 className="title-head">Pokédex</h1>
            </a>
            {onButton &&
                <a href="/" type="button" className="button-head" onClick={onHideButton}>
                    <img alt='' className="button-add" src={add_button}/></a>}
        </div>
    )
}