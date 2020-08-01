import React from 'react';

import { SERVICES } from '../dataStore';

const Services = () => {
   var services = SERVICES.values;

  return(
    <div className="container">
       <h3 className="buttonText d-flex justify-content-center">What Can We Do?</h3>
       <h1 className="heading d-flex justify-content-center">OUR SERVICES<h1 className="heading fullstop">.</h1></h1>
       <div className="row">
         <p className="content d-flex justify-content-center">{services.lines}</p>
       </div>
       <div className="row">
         <div className="col-1 offset-1">
           <img src={services.insta} alt="instagram" />
         </div>
         <div className="col-1">
          <img src={services.facebook} alt="facebook" />
         </div>
         <div className="col-1 offset-1">
          <img src={services.linkedin} alt="linkedin" />
         </div>
       </div>
    </div>
  );
}

export default Services;