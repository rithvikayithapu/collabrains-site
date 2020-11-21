import React from 'react';
import Background from '../bgs/group-273.png';
import ig from '../bgs/profileIg.png';
import fb from '../bgs/profileFb.png';
import linkedin from '../bgs/profileLinkedin.png';

import { TEAM } from '../dataStore';

var bgStyle = {
  width: "100%",
  height: "1137.1px;",
  backgroundImage: `url(${Background})`
}

const Team = () => {

  const TeamCard = TEAM.map((item) => {
    return(
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 p-2">
        <div className="flex justify-center pt-8 pb-1 lg:px-16">
          <img className="w-auto" src={item.image} alt={item.alt} />
        </div>
        <div className="px-6 py-4">
          <div className="montserrat600 text-xs lg:text-2xl flex justify-center lg:mb-6">{item.name}</div>
          <p className="text-gray-700 text-xs lg:text-base flex justify-center">{item.description}</p>
          <p className="text-gray-700 text-xs lg:text-base flex justify-center">{item.company}</p>
        </div>
        <div className="flex justify-center mb-4">
          <a href={item.ig} className="inline-block mx-3"><img className="inline-block" src={ig} alt="ig" /></a>
          <a href={item.fb} className="inline-block mx-3 -mt-px"><img className="inline-block" src={fb} alt="fb" /></a>
          <a href={item.linkedin} className="inline-block mx-3"><img className="inline-block" src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    );
  });

  return(
    <div className="bg-local" style={bgStyle}>
      <div className="container pt-16 m-auto pb-16" id="team">
        <div className="mb-10">
          <h3 className="poppinsNormal text-base text-gray-500 flex justify-center">You Can Trust Us</h3>
          <h2 className="inline-block poppinsBold text-5xl text-gray-700 flex justify-center">MEET US<h2 className="inline-block poppinsBold text-5xl text-purple-600 flex justify-center">.</h2></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {TeamCard}
        </div>
      </div>
    </div>
  )
}

export default Team;