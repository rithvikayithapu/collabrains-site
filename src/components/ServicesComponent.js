import React from 'react';

const Services = () => {

  return(
    <div className="container services" id="ourservices">
      <div className="row">
        <div className="col-8">
          <h3 className="buttonText mr-5 d-flex justify-content-end">What Can We Do?</h3>
          <h1 className="heading mr-2 d-flex justify-content-end">OUR SERVICES<h1 className="heading fullstop">.</h1></h1>
        </div>
        <div>
          <img className="mt-3" src="assets/images/Vector.png" alt="box" />
        </div>
      </div>
       <div className="row">
         <div className="col-8 offset-2">
          <p className="content text-center d-flex justify-content-end">The title and other copy in the introduction grab users and make them feel compelled to action, but you should also add an attractive illustration or background to ent</p>
         </div>
       </div>
    </div>
  );
}

export default Services;