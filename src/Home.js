import React, { useState, useEffect } from 'react';
import './Home.css';


function Home() {
  return (
    <div className="Home">
        <div className="container">
            <div className="row py-2">
                <div className="col-md-9 video-container rounded">
                    <iframe width="660" height="400" src="https://www.youtube.com/embed/tj1LKE8fGZs?start=9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-around">
                    <div className="card">
                        <div className="card-body bg-gradient-info">
                            <h2>Statement</h2>
                            <div className="p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium repellendus dolor aspernatur molestiae in tenetur nemo! Alias delectus repellendus maiores vitae facere odio modi quas voluptatum dolores, enim sequi?</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-6">
                    <div className="jumbotron jumbotron">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis, nobis sint laudantium maxime rerum error odit dignissimos impedit, quaerat tempore. Nostrum amet voluptate veniam accusamus sed nemo quo accusantium!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="jumbotron jumbotron">
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore magnam dolore in delectus? Doloremque corrupti ullam ea quia molestiae, reprehenderit laudantium, quo modi harum neque dolorum ducimus itaque facere.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <h5>Issues</h5>
                            <h1>Eric Adams on the issues.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-md-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src={require('./assets/img/backgrounds/1.jpg')} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={require('./assets/img/backgrounds/2.jpg')} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={require('./assets/img/backgrounds/3.jpg')} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
