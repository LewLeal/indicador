import React from 'react';


const Navbar = () => {
    return (
               <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
                    <a className="navbar-brand" href="#">Birds</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-a dropdown-toggle" href="#" id="navbarDropdownMenua" role="button" data-toggle="dropdown">
                                    Favorites
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
       
    );
}

export default Navbar;