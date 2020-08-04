import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { PROJECTS } from '../dataStore';

const Projects = () => {

  const project = PROJECTS.map((item) => {
    return(
      <VerticalTimelineElement
        className="vertical-timeline-element-work"
        contentStyle={{ background: '#fff', color: '#000' }}
        iconStyle={{ background: 'rgba(121, 53, 224, 0.63)', border: '1px solid #601BCA' }}
        key={item.id}
      >
        <div className="row">
          <div className="col-8">
            <img src={item.image} alt={item.alt} />
          </div>
          <div className="col-4">
            <h4 className="vertical-timeline-element-subtitle content">{item.number}</h4>
            <h3 className="vertical-timeline-element-title heading">{item.title}</h3>
          </div>
        </div>
        <ul>
          <li className="content">{item.message1}</li>
          <li className="content">{item.message2}</li>
        </ul>
        <p className="content">
          {item.content}
        </p>
        <div className="row">
          <div className="col-5 offset-7">
            <button className="timelineButton buttonText text-white">Try Now</button>
          </div>
        </div>
      </VerticalTimelineElement>
    );
  });

  return(
    <div className="container projectsComponent" id="projects">
      <h4 className="heading d-flex justify-content-center">Great & Awesome Works</h4>
      <h1 className="heading d-flex justify-content-center">OUR PROJECTS<h1 className="heading fullstop">.</h1></h1>
      <VerticalTimeline>
        {project}
      </VerticalTimeline>
      <div className="row-content d-flex justify-content-center">
        <button className="viewMore buttonText text-white">View More</button>
      </div>
    </div>
  );
}

export default Projects;