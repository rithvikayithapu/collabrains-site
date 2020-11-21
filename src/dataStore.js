import React from 'react';

const TEXT = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-1-Graphs.png`,
    heading: 'Collabrains',
    content: 'We aim to create a community where developers and enthusiasts can come together and collaborate to create a new internet. We are excited, are you?',
    alt: 'graphs'
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-3-Characters.png`,
    heading: 'Mission',
    content: 'We believe that the internet will look a lot different in the near future, it will evolve into a new frontier that empowers users around the world like never before.',
    alt: '3 characters'
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/Humaaans-4-Phone.png`,
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
    image: `${process.env.PUBLIC_URL}/assets/images/blockchain-tech.png`,
    tag1: 'Blockchain',
    tag2: 'Blockchain',
    topic: 'Blockchain Technologies',
    date: 'May, 2020',
    description: 'A short description',
    alt: 'research 1',
    link : ''
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/how-to-build.png`,
    tag1: 'Blockchain',
    tag2: 'Blockchain',
    topic: 'How To Build',
    date: 'July, 2020',
    description: 'A short description',
    alt: 'research 2',
    link: ''
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/how-to-build.png`,
    tag1: 'Live',
    tag2: 'Blockchain',
    topic: 'How To Build',
    date: 'July, 2020',
    description: 'A short description',
    alt: 'research 3',
    link: ''
  }
];

const PROJECTS = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/crypto_logo.png`,
    alt: 'image',
    number1: 'Project ',
    number2: 'One',
    title: 'Analyzing-Bitcoin-Cryptocurrency-Market',
    message1: 'Machine Learning',
    message2: 'Machine Learning',
    content: 'Trend analysis of Bitcoin-Cryptocurrency markets Project Description The aim of the project is to better understand the growth and impact of Bitcoin and other cryptocurrencies in the financial markets. In this , we will explore the market capitalization of different cryptocurrencies',
    tryNow: "https://github.com/Bhard27/Analyzing-Bitcoin-Cryptocurrency-Market"
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/hyperledger.png`,
    alt: 'image',
    number1: 'Project ',
    number2: 'Two',
    title: 'Hypeledger Avalon',
    message1: 'Machine Learning',
    message2: 'Machine Learning',
    content: 'Hyperledger Avalon (formerly Trusted Compute Framework) enables privacy in blockchain transactions, moving intensive processing from a main blockchain to improve scalability and latency, and to support attested Oracles.',
    tryNow: "https://github.com/hyperledger/avalon"
  }
];

const TEAM = [
  {
    id: 1,
    name: 'Anmol Mallick',
    description: 'Director',
    image: `${process.env.PUBLIC_URL}/assets/images/anmol-mallick.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/_wafw00f__/",
    fb: "#",
    linkedin: "https://www.linkedin.com/in/anmol-mallick-b0a813177/"
  },
  {
    id: 2,
    name: 'Priyank Kaushik',
    description: 'Director',
    image: `${process.env.PUBLIC_URL}/assets/images/priyank-kaushik.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/priyank__kaushik/",
    fb: "#",
    linkedin: "https://www.linkedin.com/in/priyank-kaushik-a0a63a193/"
  },
  {
    id: 3,
    name: 'Rajat Sablok',
    description: 'Director',
    image: `${process.env.PUBLIC_URL}/assets/images/rajat-sablok.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/_rajatsablok/",
    fb: "#",
    linkedin: "https://www.linkedin.com/in/rajat-sablok/"
  },
  {
    id: 4,
    name: 'Soumya Ranjan',
    description: 'COO & Co-Founder',
    image: `${process.env.PUBLIC_URL}/assets/images/soumya-ranjan.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/soumyaranjanram29_srr/",
    fb: "#",
    linkedin: "https://www.linkedin.com/in/soumyaranjan-ram-1abbb31a0/"
  },
  {
    id: 5,
    name: 'Pranjal Bharadwaj',
    description: 'CEO & Co-Founder',
    image: `${process.env.PUBLIC_URL}/assets/images/pranjal-bharadwaj.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/pranjalbhardwaj27/",
    fb: "https://www.facebook.com/pb13579",
    linkedin: "https://www.linkedin.com/in/pranjal-bhardwaj-a85263188/"
  },
  {
    id: 6,
    name: 'Koushik Saha',
    description: 'Director',
    image: `${process.env.PUBLIC_URL}/assets/images/koushik-saha.png`,
    alt: 'profile picture',
    ig: "https://www.instagram.com/kshik_02/",
    fb: "#",
    linkedin: "https://www.linkedin.com/in/kshik02/"
  },
];

export {
  TEXT,
  WEBINARS,
  PROJECTS,
  TEAM
};