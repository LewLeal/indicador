import React, { useState, useContext } from 'react';
import Detalles from './Detalles';
import { Context } from '../store/appContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Card = (props) => {
    let to="/detalles/bird/";
    const { store, actions } = useContext(Context);
    const [state, setState] = useState([]); 
    console.log(store);
    const handleAdd = (uid) => {
        console.log(uid);
        setState([
            ...state,
           uid
        ])
        uid = '';
    }
    console.log("Abajo muestro el arreglo");
    console.log(state);

    return (

        <div className="col-3 card">
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.uid}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={to+props.uid} className="btn btn-primary">Learn More!</Link>
                <button type="button" onClick={() => handleAdd(props)} class="btn btn-outline-dark">♥</button>
                <button type="button" onClick={(e) => {e.preventDefault(); handleAdd(props.uid)}} class="btn btn-outline-dark">♥ 2</button>
            </div>
        </div>
    );
}

export default Card;