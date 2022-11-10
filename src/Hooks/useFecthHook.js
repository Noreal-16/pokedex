import {useEffect, useState} from "react";

export const useFecthHook = (URL) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    const getFetchPokemon = () => {
        fetch(URL, {
            method: "GET"
        }).then((response) => response.json())
            .then((data) => {
                if (data) {
                    setState({
                        data,
                        loading: false
                    })
                }

            })
            .catch((error) => {
                setState({
                    ...state,
                    error
                })
            })
    }
    useEffect(() => {
        getFetchPokemon();
    }, [URL]);

    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    }
}