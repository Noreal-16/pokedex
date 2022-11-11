import React from "react";
import "../Assets/css/newPokemon.css";
import {useFormPk} from "../Hooks/useFormPk";
import {useForm} from "react-hook-form";

export const NewPokemon = () => {
    const {number, name, kind, weight, height, moves, image, color, onInputChange, onResetInput} = useFormPk({
        number: '', name: '', kind: '', weight: '', height: '', moves: '', image: '', color: ''
    })
    const {register, handleSubmit, trigger, formState: {errors}} = useForm();
    return (
        <>
            <h1 className=" title-form">New Pokemon</h1>
            <div>
                <form onSubmit={handleSubmit(onResetInput)}>
                    <div className="colum-input">
                        <label className="label-form">Number</label>
                         <input className="input-form" type="number" name="number"
                               value={number} {...register("number", {required: " The number is required"})}
                               onChange={onInputChange}
                               placeholder="Number" onKeyUp={() => {
                            trigger("number")
                        }}/>
                        {errors.number && (<small style={{color: "red"}}>{errors.number.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Name</label>
                        <input className="input-form" type="text" name="name"
                               value={name} {...register("name", {required: " The name is required"})}
                               onChange={onInputChange}
                               placeholder="Name Pokemon" onKeyUp={() => {
                            trigger("name")
                        }}/>
                        {errors.name && (<small style={{color: "red"}}>{errors.name.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Kind</label>
                        <select className="input-form" name="kind">
                            <option selected="Water">Water</option>
                            <option>Fire</option>
                            <option>Poison</option>
                        </select>
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Weight</label>
                        <input className="input-form" type="text" name="weight"
                               value={weight} {...register("weight", {required: " The weight is required"})}
                               onChange={onInputChange}
                               placeholder="Weight" onKeyUp={() => {
                            trigger("weight")
                        }}/>
                        {errors.weight && (<small style={{color: "red"}}>{errors.weight.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Height</label>
                        <input className="input-form" type="text" name="height"
                               value={height} {...register("height", {required: " The height is required"})}
                               onChange={onInputChange}
                               placeholder="Height" onKeyUp={() => {
                            trigger("height")
                        }}/>
                        {errors.height && (<small style={{color: "red"}}>{errors.height.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Moves</label>
                        <input className="input-form" type="text" name="moves"
                               value={moves} {...register("moves", {required: " The moves is required"})}
                               onChange={onInputChange}
                               placeholder="Moves" onKeyUp={() => {
                            trigger("moves")
                        }}/>
                        {errors.moves && (<small style={{color: "red"}}>{errors.moves.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Image</label>
                        <input className="input-form" type="text" name="image"
                               value={image} {...register("image", {required: " The image is required"})}
                               onChange={onInputChange}
                               placeholder="URL Image" onKeyUp={() => {
                            trigger("image")
                        }}/>
                        {errors.image && (<small style={{color: "red"}}>{errors.image.message}</small>)}
                    </div>
                    <div className="colum-input">
                        <label className="label-form">Color</label>
                        <input className="input-form" type="text" name="color"
                               value={color} {...register("color", {required: " The color is required"})}
                               onChange={onInputChange}
                               placeholder="#FFFFF" onKeyUp={() => {
                            trigger("color")
                        }}/>
                        {errors.color && (<small style={{color: "red"}}>{errors.color.message}</small>)}
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