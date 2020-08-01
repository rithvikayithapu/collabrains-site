import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { WEBINARS } from '../dataStore';

const Webinar = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 484},
      items: 5
    },
    mobile: {
      breakpoint: { max: 484, min: 0},
      items: 3
    }
  };

  const webinars = WEBINARS.map((item) => {
    return(
      <div key={ item.id } className="p-3">
        <NavLink href="#">
        <img className="w-100 h-100 webinarBoxes" src={ item.image } alt={ item.alt } />
        <h3 className="text-white heading">{ item.topic }</h3>
        </NavLink>
      </div>
    );
  });

  return(
    <div className="container">
      <div className="row row-header">
        <div className="col-12 d-flex justify-content-center">
          <h1 className="heading d-flex">Webinars</h1>
          {/* <img className="img-fluid" src="assets/images/Group-248.png" alt="live logo" /> */}
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h4 className="heading d-flex justify-content-center">Recent</h4>
        </div>
        <div className="col-2 offset-10">
        <NavLink href="#" className="content text-dark d-flex justify-content-end">
          Watch More
        </NavLink>
        </div>
        <div className="col-12">
        <Carousel responsive={responsive}>
          {webinars}
        </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Webinar;