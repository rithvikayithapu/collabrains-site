import React from 'react';

const LINKS = [
  {
    id: 'home',
    to: 'home',
    href: '#home',
    title: 'Home'
  },
  {
    id: 'webinars',
    to: 'webinars',
    href: '#webinars',
    title: 'Webinars'
  },
  {
    id: 'projects',
    to: 'projects',
    href: '#projects',
    title: 'Our Projects'
  },
  {
    id: 'meetus',
    to: 'meetus',
    href: '#meetus',
    title: 'Meet Us'
  },
  {
    id: 'ourservices',
    to: 'ourservices',
    href: '#ourservices',
    title: 'Our Services'
  }
];

const TEXT = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-graphs.png`,
    heading: 'Collabrains',
    content: 'We aim to create a community where developers and enthusiasts can come together and collaborate to create a new internet.',
    alt: 'graphs'
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-3-Characters.png`,
    heading: 'Mission',
    content: 'We believe that the internet will look a lot different in the next ten years, it will evolve into a new frontier that will empower users around the world like never before..',
    alt: '3 characters'
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-phone.png`,
    heading: 'Community',
    content: 'Create a collaborative growth based environment for people to engage and grow. Homebase for the hackers, the builders, the dreamers.',
    alt: 'phone'
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-2-Characters.png`,
    heading: 'Education',
    content: 'Give access to curated content designed by the best in web3 along with tooling required for developers and students to kickstart their career in Blockchain.',
    alt: '3 characters apps'
  }
];

const WEBINARS = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/research-1.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 1'
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/research-2.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 2'
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/research-4.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 3'
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/assets/images/research-2.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 4'
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/assets/images/research-1.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 1'
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/assets/images/research-2.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 2'
  },
  {
    id: 7,
    image: `${process.env.PUBLIC_URL}/assets/images/research-4.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 3'
  },
  {
    id: 8,
    image: `${process.env.PUBLIC_URL}/assets/images/research-2.png`,
    topic: 'Topic of the Webinar conducted',
    alt: 'research 4'
  }
];

const PROJECTS = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/Rectangle-66.png`,
    alt: 'image',
    number: 'Project One',
    title: 'Webinars',
    message1: 'Machine Learning',
    message2: 'Machine Learning',
    content: 'The title and other copy in the introduction grab users and make them feel compelled to action, but you should also add an attractive illustration or background to ent'
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/Rectangle-38.png`,
    alt: 'image',
    number: 'Project One',
    title: 'Webinars',
    message1: 'Machine Learning',
    message2: 'Machine Learning',
    content: 'The title and other copy in the introduction grab users and make them feel compelled to action, but you should also add an attractive illustration or background to ent'
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/Rectangle-39.png`,
    alt: 'image',
    number: 'Project One',
    title: 'Webinars',
    message1: 'Machine Learning',
    message2: 'Machine Learning',
    content: 'The title and other copy in the introduction grab users and make them feel compelled to action, but you should also add an attractive illustration or background to ent'
  }
];

const MEETUS = [
  {
    id: 1,
    name: 'Rohan Sharma',
    description: 'The title and other copy in the introduction',
    image: `${process.env.PUBLIC_URL}/assets/images/773-7730858_arisa-conwell-circle-girl-1.png`,
    alt: 'profile picture'
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    description: 'The title and other copy in the introduction',
    image: `${process.env.PUBLIC_URL}/assets/images/773-7730858_arisa-conwell-circle-girl-2.png`,
    alt: 'profile picture'
  },
  {
    id: 3,
    name: 'Rohan Sharma',
    description: 'The title and other copy in the introduction',
    image: `${process.env.PUBLIC_URL}/assets/images/773-7730858_arisa-conwell-circle-girl-3.png`,
    alt: 'profile picture'
  },
];

export {
  LINKS,
  TEXT,
  WEBINARS,
  PROJECTS,
  MEETUS
};