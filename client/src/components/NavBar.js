import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container px-0">
                    <a className="navbar-brand" href="/">Eric Adams 2021</a>
                    <div className="div">
                        <div className="d-inline-block d-lg-none mr-3">
                            <a className="btn btn-danger btn-lg mb-2" href="https://www.nycvotes.org/campaigns/ericadams/contributions/new">Donate</a>
                        </div>
                        <button className="navbar-toggler x border rounded align-self-stretch py-3 px-3 mt-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                        <div class="navbar-nav">
                            <NavLink className='nav-link font-weight-bold h-100 mt-1 px-3 text-primary' activeClassName='nav-link active text-primary' to='/about'>About</NavLink>
                            <NavLink className='nav-link font-weight-bold h-100 mt-1 px-3 text-primary' activeClassName='nav-link active text-primary' to='/issues'>Issues</NavLink>
                            <NavLink className='nav-link font-weight-bold h-100 mt-1 px-3 text-primary' activeClassName='nav-link active text-primary' to='/get-involved'>Get-involved</NavLink>
                            <div className='d-lg-block d-none ml-3 nav-item mr-3'>
                                <a class="btn btn-danger btn-lg" href="https://www.nycvotes.org/campaigns/ericadams/contributions/new">Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
};

export default NavBar