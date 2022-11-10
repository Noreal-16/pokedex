import React, {Fragment, useState} from "react";
import '../Assets/css/home.css';
import {Head} from "../Components/Head";
import {Search} from "../Components/Search";
import {Card} from "../Components/Card";
import {NewPokemon} from "../Components/NewPokemon";
import {DescriptionPokemon} from "../Components/DescriptionPokemon";
import {useFecthHook} from "../Hooks/useFecthHook";

export const Home = () => {
    const [state, setState] = useState(true);
    const [description, setDescription] = useState({
        status: true,
        id: 0
    });
    const {id} = description;
    const [buscador, setBuscador] = useState();
    const URL = "https://consultasecuador.com/api/pokemon";
    const {data, loading} = useFecthHook(URL);
    return (
        <div className='container-home'>
            {description.status ?
                <>
                    <div>
                        <Head stateF={setState}/>
                    </div>
                    {state ?
                        <>
                            <div>
                                <Search buscar={setBuscador}/>
                            </div>
                            {loading ? <h1>Cargando ...</h1> :
                                <div>
                                    {data.data ? data.data.map((pokemon, index) =>
                                        <Card descrciptionI={setDescription} key={index + 1} dataP={pokemon} search={buscador} />
                                    ) : loading}
                                </div>
                            }
                        </>
                        : <div className="container-form-i"><NewPokemon/></div>}
                </> : <div className="" style={{background: "#74CB48"}}>
                    <DescriptionPokemon stateH={id} dataP={data}/></div>}
        </div>
    )
}