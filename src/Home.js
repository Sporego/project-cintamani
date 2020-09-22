import React, { useState, useEffect } from 'react';
import './Home.css';


function Home() {
  return (
    <div className="Home">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="top-content">
                    <div className="container-fluid">
                        <div id="carousel-example" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner row w-100 mx-auto" role="listbox">
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                                    <img src={require('./assets/img/backgrounds/1.jpg')} className="img-fluid mx-auto d-block" alt="img1"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/2.jpg')} className="img-fluid mx-auto d-block" alt="img2"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/3.jpg')} className="img-fluid mx-auto d-block" alt="img3"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/4.jpg')} className="img-fluid mx-auto d-block" alt="img4"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/5.jpg')} className="img-fluid mx-auto d-block" alt="img5"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/6.jpg')} className="img-fluid mx-auto d-block" alt="img6"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/7.jpg')} className="img-fluid mx-auto d-block" alt="img7"/>
                                </div>
                                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                    <img src={require('./assets/img/backgrounds/8.jpg')} className="img-fluid mx-auto d-block" alt="img8"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
