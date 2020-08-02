import React from 'react';
import { NavLink } from 'reactstrap';

const Footer = () => {
  return(
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-2">
            <h5 className="buttonText text-white d-flex justify-content-center">About Us</h5>
            <ul className="list-unstyled">
              <a href="#"><li className="buttonText text-white"><NavLink>Help</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Returns</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Shipping</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Deals</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Careers</NavLink></li></a>
            </ul>
          </div>
          <div className="col-2 offset-1">
            <h5 className="buttonText text-white d-flex justify-content-center">Products</h5>
            <ul className="list-unstyled">
              <a href="#"><li className="buttonText text-white"><NavLink>Photo Books</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Baby Photo Books</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Travel Photo Books</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Home Decor</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Canvas Prints</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Poster Prints</NavLink></li></a>
            </ul>
          </div>
          <div className="col-2 offset-1">
            <h5 className="buttonText text-white d-flex justify-content-center">Programs</h5>
            <ul className="list-unstyled">
              <a href="#"><li className="buttonText text-white"><NavLink>For Schools</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>For Business</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>School Yearbooks</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Affiliate Programs</NavLink></li></a>
              <a href="#"><li className="buttonText text-white"><NavLink>Volume Discounts</NavLink></li></a>
            </ul>
          </div>
          <div className="col-2 offset-1">
            <h5 className="buttonText text-white d-flex justify-content-center mb-3">Contact Us</h5>
            <div className="row">
              <div className="col-4">
                <a href="#"><img src="assets/images/fb.png" alt="fb" /></a>
              </div>
              <div className="col-4">
                <a href="#"><img src="assets/images/linkedin.png" alt="linkedin" /></a>
              </div>
              <div className="col-4">
                <a href="#"><img src="assets/images/ig.png" alt="ig" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;