import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Eric Adams 2021</a>
            <button class="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="sr-only">Toggle navigation</span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav mr-auto">
                    <NavLink className='nav-link' activeClassName='nav-link active' to='/about'>About</NavLink>
                    <NavLink className='nav-link' activeClassName='nav-link active' to='/issues'>Issues</NavLink>
                    <NavLink className='nav-link' activeClassName='nav-link active' to='/get-involved'>Get-involved</NavLink>
                </div>
            </div>
        </nav>
    )
};

export default NavBar