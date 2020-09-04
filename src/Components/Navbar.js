import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';


const Navbar = () => {
    const { store, actions } = useContext(Context);
    console.log(store.favorito);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Bird</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Favorites
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">{
                                store.favorito.map((item, index) => {
                                    return (
                                        <a className="dropdown-item" href="#">{`${item.description}`}
                                            <button name="delete" onClick={() => actions.handleDelete(index)} type="button" className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </a>
                                    )
                                })
                            }
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;