import React from 'react';
import ig from '../bgs/ig.png';
import fb from '../bgs/fb.png';
import linkedin from '../bgs/linkedin.png';

const Footer = () => {
  return(
    <div className="mt-20 mb-10">
      <h1 className="poppins600 text-5xl flex justify-center mb-6">Contact Us</h1>
      <div className="flex justify-center">
        <a href="https://www.instagram.com/collabrains_/" className="inline-block mx-4"><img src={ig} alt="ig" /></a>
        <a href="#" className="inline-block mx-4 -mt-2"><img src={fb} alt="fb" /></a>
        <a href="https://www.linkedin.com/company/collabrainsvit/" className="inline-block mx-4"><img src={linkedin} alt="linkedin" /></a>
      </div>
    </div>
  );
}

export default Footer;