import React, { useState, useContext } from 'react';
import Detalles from './Detalles';
import { Context } from '../store/appContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Card = (props) => {
    let to="/detalles/bird/";
    const { store, actions } = useContext(Context);

    return (

        <div className="col-3 card">
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.uid}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={to+props.uid} className="btn btn-primary">Learn More!</Link>
                <button type="button" onClick={() => actions.handleAddFavorito(props)} className="btn btn-outline-dark ml-auto">♥</button>
            </div>
        </div>
    );
}

export default Card;