import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { WEBINARS } from '../dataStore';
import PurpleBg from './PurpleBgComponent';

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
      <div key={ item.id } className="webinarCard">
        <NavLink href="#">
        <img src={ item.image } alt={ item.alt } />
          <div className="card-img-overlay d-flex justify-content-center align-items-end">
            <h6 className="text-white heading">{ item.topic }</h6>
          </div>
        </NavLink>
      </div>
    );
  });

  return(
    <div className="container webinarComponent" id="webinars">
      <div className="row">
        <div className="col-7 d-flex justify-content-end">
          <h1 className="heading">Webinars</h1>
        </div>
        <div className="col-5 d-flex justify-content-start">
          <img className="img-fluid" src="assets/images/Group-248.png" alt="live logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="heading d-flex justify-content-center">Recent</h4>
        </div>
        <div className="col-2 offset-9">
        <NavLink href="#" className="content text-dark d-flex justify-content-end">
          Watch More
        </NavLink>
        </div>
        <div className="col-12 p-3">
        <Carousel className="webinarPadding" responsive={responsive}>
          {webinars}
        </Carousel>
        </div>
      </div>
      <PurpleBg />
    </div>
  );
}

export default Webinar;