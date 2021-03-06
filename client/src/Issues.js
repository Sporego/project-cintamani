import React from 'react';

function Issues() {
  return (
    <div className="Issues">
        <section className='bg-light'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <div className="card bg-dark text-white">
              <img src={require('./assets/img/backgrounds/ericHome.jpg')} className="img-fluid" alt="Responsive image"/>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                <blockquote className="blockquote text-left">
                <p className="mb-0">Pushing for a brighter tomorrow.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Issues;
