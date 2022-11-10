import React, {useState} from "react";
import "../Assets/css/newPokemon.css";
import {useForm} from "../Hooks/useForm";

export const NewPokemon = () => {
    const {number, name, kind, weight, height, moves, image, color, onInputChange} = useForm({
        number:'', name:'', kind:'', weight:'', height:'', moves:'', image:'', color:''
    })
    return (
        <>
            <h1 className=" title-form">New Pokemon</h1>
            <div>
                <form>
                    <div className="colum-input">
                        <label className="label-form">Number</label>
                        <input className="input-form" type="text" name="number" value={number} onChange={onInputChange}
                               placeholder="Number"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Name</label>
                        <input className="input-form" type="text" name="name" value={name} onChange={onInputChange}
                               placeholder="Name Pokemon"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Kind</label>
                        <input className="input-form" type="text" name="kind" value={kind} onChange={onInputChange}
                               placeholder="Kind"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Weight</label>
                        <input className="input-form" type="text" name="weight" value={weight} onChange={onInputChange}
                               placeholder="Weight"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Height</label>
                        <input className="input-form" type="text" name="height" value={height} onChange={onInputChange}
                               placeholder="Height"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Moves</label>
                        <input className="input-form" type="text" name="moves" value={moves} onChange={onInputChange}
                               placeholder="Moves"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Image</label>
                        <input className="input-form" type="text" name="image" value={image} onChange={onInputChange}
                               placeholder="URL Image"/>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Color</label>
                        <input className="input-form" type="text" name="color" value={color} onChange={onInputChange}
                               placeholder="#FFFFF"/>
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