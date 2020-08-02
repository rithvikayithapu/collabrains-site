import React, { useState } from 'react';
import { Button, Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import HomePurple from './HomePurpleComponent';

import { TEXT } from '../dataStore';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if(animating) return;
    const nextIndex = activeIndex === TEXT.length-1 ? 0 : activeIndex+1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if(animating) return;
    const nextIndex = activeIndex === 0 ? TEXT.length-1 : activeIndex-1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if(animating) return;
    setActiveIndex(newIndex);
  }

  const slides = TEXT.map((item) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
        <div className="row home">
          <div className="col-3 col-sm-5">
            <h1 className="heading pt-5 pb-5">{item.heading}</h1>
            <p className="content pb-5">{item.content}</p>
            <Button className="btn btn-lg text-white heading discover">Discover</Button>
          </div>
          <div className="col-9 col-sm-7 d-flex align-items-end">
            <img src={item.image} alt={item.alt} className="m-2" />
          </div>
        </div>
      </CarouselItem>
    );
  });

  return(
    <div className="container mb-3" id="#home">
      <HomePurple />
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators className="carousel-indicator" items={TEXT} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      </Carousel>
    </div>
  );
}

export default Home;