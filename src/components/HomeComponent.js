import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TEXT } from '../dataStore';

const Home = () => {
  const Slides = TEXT.map((item) => {
    return (
      <div className="bg-white lg:flex">
        <div className="lg:p-16 p-8">
          <div className="lg:float-right">
            <img src={item.image} alt={item.alt} className="h-auto w-auto mb-12" />
          </div>
          <p className="poppinsBold text-5xl lg:text-6xl text-black mb-8 lg:mb-16 flex justify-start">{item.heading}</p>
          <p className="lg:w-2/4 poppinsNormal text-lg text-black mb-16 text-justify">{item.content}</p>
          <button className="hidden lg:block button robotoBold text-2xl text-white py-1 px-10 rounded-lg flex justify-start">Discover</button>
        </div>
      </div>
    )
  });

  return(
    <div id="home" className="mb-16 mt-16 lg:mb-32 lg:mt-32">
      <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} dynamicHeight={true} showStatus={false}>
        {Slides}
      </Carousel>
    </div>
  )
}

export default Home;