import React from 'react';
import Detalles from './Detalles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Card = (props) => {
    let to="/detalles/bird/";
    
    return (

        <div className="col-3 card">
            <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.uid}</h5>
                <p className="card-text">{props.description}</p>
                <Router>
                    <Link to={to+props.uid} className="btn btn-primary">Learn More!</Link>
                </Router>
            </div>
        </div>
    );
}

export default Card;