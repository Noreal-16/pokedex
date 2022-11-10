import React from "react";
import "../Assets/css/newPokemon.css";

export const NewPokemon = () => {
    return (
        <>
            <h1 className=" title-form">New Pokemon</h1>
            <div>
                <form>
                    <div className="colum-input">
                        <label className="label-form">Number</label>
                        <input className="input-form" type="text" name="number" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Name</label>
                        <input className="input-form" type="text" name="name" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Kind</label>
                        <input className="input-form" type="text" name="kind" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Weight</label>
                        <input className="input-form" type="text" name="weight" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Height</label>
                        <input className="input-form" type="text" name="height" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Moves</label>
                        <input className="input-form" type="text" name="moves" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Image</label>
                        <input className="input-form" type="text" name="image" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Color</label>
                        <input className="input-form" type="text" name="color" placeholder="#007"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Description</label>
                        <div className="div-description">
                            <p className="descriptio-form">When it retracts its long neck into its shell, it squirts out
                                water with vigorous force.</p>
                        </div>
                    </div>
                    <button type="submit" className="btn-form">Add Pokemon</button>
                </form>
            </div>
        </>
    )
}