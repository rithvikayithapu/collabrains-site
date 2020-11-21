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
      <div>
        <div className="inline-grid float-left pr-2">
          <img src={item.image} alt={item.alt} />
        </div>
        <div className="contents inline-grid">
          <div>
            <h3 className="inline-block poppinsNormal text-lg text-gray-600 py-1">{item.number1}<h3 className="inline-block poppinsNormal text-lg text-purple-600 py-1">{item.number2}</h3></h3>
            <h2 className="poppinsNormal text-3xl py-2">{item.title}</h2>
          </div>
          <ul className="hidden lg:block list-disc">
            <li className="poppinsNormal text-base">{item.message1}</li>
            <li className="poppinsNormal text-base">{item.message2}</li>
          </ul>
        </div>
        <p className="hidden lg:block poppinsNormal text-xl">
          {item.content}
        </p>
        <div className="hidden lg:block mt-2 flex items-center">
          <a href={item.tryNow}><button className="button px-8 py-1 text-white rounded">Try Now</button></a>
        </div>
      </div>
    </VerticalTimelineElement>
    );
  });

  return(
    <div className="divide-y-2">
      <div className="container m-auto pt-16 pb-16" id="projects">
        <div className="flex justify-center">
          <p className="poppins500 text-lg text-gray-800">Great & Awesome Works</p>
        </div>
        <div className="flex justify-center">
          <p className="inline-block poppinsBold text-5xl text-gray-800">OUR PROJECTS<p className="inline-block poppinsBold text-5xl text-purple-800">.</p></p>
        </div>
        <VerticalTimeline>
          {project}
        </VerticalTimeline>
        <div className="flex justify-start lg:justify-center">
          <a href="https://github.com/Collabrains-VIT"><button className="bg-transparent button px-4 lg:px-8 py-2 text-white poppins500">View More</button></a>
        </div>
      </div>
    </div>
  );
}

export default Projects;