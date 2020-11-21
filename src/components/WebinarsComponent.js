import React from 'react';
import Background from '../bgs/rectangle-324.png';
import Play from '../bgs/play.png';

import { WEBINARS } from '../dataStore';

var sectionStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${Background})`
}

const Webinars = () => {

  const WebinarCard = WEBINARS.map((item) => {
    return(
      <div className="max-w-sm rounded-3xl border-4 border-gray-700 overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={item.image} alt={item.alt} />
        <div className="px-6 py-4">
          <div className="pt-2 pb-4">
            <div className="inline-block rounded-full border-2 border-indigo-700 px-3 py-1 text-xs lg:text-sm poppins500 text-indigo-700 mr-2 mb-2">{item.tag1}</div>
            <div className="inline-block rounded-full border-2 border-indigo-700 px-3 py-1 text-xs lg:text-sm poppins500 text-indigo-700 mr-2 mb-2">{item.tag2}</div>
          </div>
          <div className="poppins600 text-xl text-black">{item.topic}</div>
          <div className="grid grid-cols-1 flex justify-items-start">
            <div className="poppins500 text-sm text-indigo-700">{item.date}</div>
            <p className="poppinsNormal text-xs text-gray-500">{item.description}</p>
          </div>
          <div className="grid grid-cols-1 flex justify-items-end">
            <a href={item.link}><img src={Play} alt="playButton" /></a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section style={sectionStyle} className="pb-6">
      <div className="container m-auto pt-6" id="webinars">
        <div className="flex justify-center">
          <p className="poppins500 text-lg text-gray-700">Insights</p>
        </div>
        <div className="flex justify-center mb-16">
          <p className="inline-block poppinsBold text-5xl lg:text-6xl text-gray-700">Webinars<p className="inline-block poppinsBold text-6xl text-purple-800">.</p></p>
        </div>
        <div className="grid gap-2 lg:grid-cols-3 lg:gap-8">
          {WebinarCard}
        </div>
      </div>
    </section>
  )
}

export default Webinars;