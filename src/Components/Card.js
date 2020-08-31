import React from 'react';

const Card = (props) => {
    return (
        
        <div className="col-3 card">
            <img src={props.image} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{props.uid}</h5>
                        <p className="card-text">{props.description}</p>
                    <a to="#" className="btn btn-primary">Learn More!</a>
                </div>  
        </div>
    );
}
 
export default Card;