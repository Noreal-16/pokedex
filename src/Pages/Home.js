import React, {useState} from "react";
import '../Assets/css/home.css';
import {Head} from "../Components/Head";
import {Search} from "../Components/Search";
import {Card} from "../Components/Card";
import {NewPokemon} from "../Components/NewPokemon";
import {DescriptionPokemon} from "../Components/DescriptionPokemon";

export const Home = () => {
    const [state, setState] = useState(true);
    const [description, setDescription] = useState(true);
    const useFetchPokemon =()=>{
        
    }
    return (
        <div className='container-home'>
            {description ?
                <>
                    <div>
                        <Head stateF={setState}/>
                    </div>
                    {state ?
                        <>
                            <div>
                                <Search/>
                            </div>
                            <div className="container-card-group">
                                <Card descrciptionI={setDescription}/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                        </>
                        : <div className="container-form-i"><NewPokemon/></div>}
                </> : <div className="container-home centrar-div" style={{background: "#74CB48"}}>
                    <DescriptionPokemon stateH={setDescription}/></div>}
        </div>
    )
}