const t1 = require('./image/t1.png');
const t2 = require('./image/t2.png');
const t3 = require('./image/3.png');
const t6 = require('./image/6.png');
const t11 = require('./image/11.png');
const t12 = require('./image/12.png');
const t15 = require('./image/15.png');
const t16 = require('./image/t16.png');
const t29 = require('./image/29.png');

const t31 = require('./image/t31.png');

const t32 = require('./image/t32.png');
const t33 = require('./image/t33.png');
const t34 = require('./image/t34.png');
const t35 = require('./image/t35.png');
const t36 = require('./image/t36.png');
const t37 = require('./image/t37.png');
const t38 = require('./image/t38.png');
const t39 = require('./image/t39.png');
const t40 = require('./image/t40.png');
const t42 = require('./image/t42.png');
const t43 = require('./image/t43.png');
const t46 = require('./image/t46.png');
const t47 = require('./image/t47.png');
const t48 = require('./image/t48.png');
const t49 = require('./image/t49.png');
const t50 = require('./image/t50.png');
const t51 = require('./image/t51.png');
const t52 = require('./image/t52.png');
const t53 = require('./image/t53.png');
const t54 = require('./image/t54.png');
const t55 = require('./image/t55.png');
const t56 = require('./image/t56.png');
const t57 = require('./image/t57.png');


const data = [
  {title: 'Jack Lu',
    img: t1,
    url: 'https://www.linkedin.com/in/jack-lu-57995469/',
    position: 'Founder',
    describe: `Graduated from Peking University and The Ohio State University. Blockchain entrepreneur and technical expert. Cofounded Factom in 2014. Founded Wanglutech, which brings Blockchain technology to a greater range of applications.`
  },
  {title: 'LI NI',
    img: t46,
    url: '',
    position: '',
    describe: 'Graduated from Peking University with BA degree and acquired Master Degree of Science (MSc) in Computer Science with Distinction from University of Durham, UK. Over 15 years in IT business especially international experience in marketing, BD and sales. Before joining Wanchain, worked for ZTE Telecommunication, Delta Electronics and SuperMap Software as directors and principals in business teams. Currently vice president of Wanchain and Wanglu Tech for BD, marketing, PR and sales. Also served as IT consultant for FECC, Ministry of Agriculture (MOA) of China and Food and Agriculture Organization (FAO).'
  },
  {title: 'Oliver Birch',
    img: t33,
    url: 'https://www.linkedin.com/in/oliver-birch-08ba8a44/',
    position: '',
    describe: `Also known as 'machinayz', Oliver is Wanchain's community manager. He is a project manager for several start-up companies and has years of experience working in the altcoin crypto space community: advising, blogging and admin work for several slack, reddit and telegram groups.`
  },
  {title: 'Dynal Patel',
    img: t53,
    url: '',
    position: '',
    describe: 'Accomplished executive with a strong track record of delivering innovative products and solutions to the market and developing market leading partner ecosystems. Leads the development and execution of strategic partnerships at Wanchain. Has over 15 years of management experience in leading technology and telecommunication companies such as Vodafone, Altran Technologies and Microsoft. Holds a PhD in Computer Science from the University of Cape Town and is a certified Project Management Professional.'
  },
  {title: 'Scott Trowbridge',
    img: t54,
    url: 'https://www.linkedin.com/in/scottbtrowbridge/',
    position: '',
    describe: 'Degree in Computer Science, Business & Marketing. 7+ years experience in technology startup growth. Experience project managing several global business development teams. Expert in accelerating early-stage companies.'
  },
  {title: 'Weijia Zhang',
    img: t2,
    position: '',
    url: '',
    describe: `
    Weijia has published over 30 research/technical papers and is named as an inventor on 20 patents. He worked for 14 years at Dell as a software engineer and has a great deal of expertise in the area of network security. Weijia has a PhD in Physics and graduated from Tsinghua university in China.
   `
  },
  {title: 'Ying Zhang',
    img: t3,
    position: '',
    url: '',
    describe: `
    Senior engineer from Huawei and served as CAO and CTO of several companies. A senior developer of Ethereum with a deep understanding of, and engineering experience with, blockchain architecture, smart contracts and consensus algorithms.`
  },
  {title: 'Michael Y.',
    img: t6,
    position: '',
    url: '',
    describe: 'Entered into the blockchain space in 2012, specializing in Bitcoin related development. Core developer of Master Coin, Omni and Factom.'
  },
  {title: 'Richard Zhang',
    img: t11,
    url: '',
    position: '',
    describe: `More than 20 years of software development experience. Proficient in C/C++, Golang, Node.js, Java and other languages. Considerable expertise in block chain P2P networking, encryption algorithms and consensus algorithms.`
  },
  {title: 'Jeffrey Gu',
    img: t12,
    url: 'https://www.linkedin.com/in/jeffrey-gu-703548/',
    position: '',
    describe: 'BS from Tsinghua University and MS in Computer Science from the University of Maryland. Served as a senior engineer at Cisco and Dell, specializing in network communications and information security.'
  },
  {title: 'Astro Sun',
    img: t29,
    url: '',
    position: '',
    describe: 'Proficient in javascript, React, Angularjs and node. Mainly responsible for the development of the wallet.'
  },
  {title: 'Boris Yang',
    img: t15,
    url: '',
    position: '',
    describe: `Former senior financial consultant. Entered into the blockchain space in 2014.
Considerable expertise in blockchain product design.
Published various articles on blockchain and currency.`
  },
  {title: 'Lizzie Lu',
    img: t16,
    url: 'https://www.linkedin.com/in/lizzielu/',
    position: '',
    describe: `Graduated from China Communication University. Years of television, magazine and press experience. Former marketing director at ZCODesign.
An organizer in the blockchain community, affiliations and conferences.`
  },
  {title: 'Justin Snyder',
    img: t34,
    url: 'https://www.linkedin.com/in/jus10snyder/',
    position: '',
    describe: `Co-Founder of DecentraNet. Customer engagement specialist who develops creative and compelling ways to build Wanchain's Twitter and Facebook communities.`
  },
  {title: 'Ethan Parker',
    img: t32,
    url: 'https://www.linkedin.com/in/ethaneparker/',
    position: '',
    describe: `With over 15 years of Silicon Valley experience in media relations, Treble founder Ethan Parker has successfully secured press coverage for technology startups in publications including Forbes, VentureBeat, TechCrunch, GigaOM, ReadWrite, New York Times, Wall Street Journal, Bloomberg and many more.`
  },

  {title: 'Germán Palau',
      img: t35,
      url: '',
      position: '',
      describe: 'CEO of Prymtech Ltd., specializes in full digital marketing solutions'
  },
  {title: 'Trung Seng',
      img: t36,
      url: '',
      position: '',
      describe: 'Founder and Director of Prymtech Ltd, a performance driven marketing agency.  A serial entrepreneur with over 10 years experience in digital marketing strategies and business development'
  },
  {title: 'Zhihui Liu',
      img: t37,
      url: '',
      position: '',
      describe: 'More than 10 years of software development experience. Good at developing languages such as C++ and golang. Most of the time engaged in the Internet industry. Having rich programming experience in network transmission, software optimization, distributed architecture and large concurrent.'
  },
  {title: 'Crane Lv',
      img: t38,
      url: '',
      position: '',
      describe: 'Graduated from Tsinghua University. More than 15 years of software development experience. Proficient in C/C++, Golang, Node.js, Java and other languages.'
  },
  {title: 'Mengfei Liu',
      img: t39,
      url: '',
      position: '',
      describe: '14 years of c++ developing experience, strong interest on python, golang, js, java. Believe in the cleanliness, simpleness of code. Have strong interest on the blockchain industry, and look forward to becoming a expert in blockchain.'
  },
  {title: 'Gabriel Guo',
      img: t40,
      url: '',
      position: '',
      describe: 'BS and MS in Electronic Engineering from Peking University. Proficient in C/C++, Python, Golang and Node.js. Considerable expertise in networking and encryption algorithms. 14 years of experience in software development.'
  },
  {title: 'Aaron Zhan',
      img: t42,
      url: '',
      position: '',
      describe: 'Graduated from Beijing Institute of Technology. Years of software development experience. Proficient in C/C++, python, shell. Employed at Alcatel, Nokia, etc. '
  },
  {title: 'Sean Chai',
      img: t43,
      url: '',
      position: '',
      describe: 'Proficient in java, javascript. Be in charge of  alliance chain and superstratum development.'
  },
  {title: 'Justin Liao',
      img: t47,
      url: '',
      position: '',
      describe: 'Graduated from Vanderbilt University with a degree in Human & Organizational Development, Financial Economics, and Corporate Strategy. Founded Shorewood Ventures, a multi-strategy hedge fund that specializes in digital assets and derivative products, as well as the Daily Bit, a cryptocurrency newsletter. Heading Strategic Corporate Alliances.'
  },
  {title: 'Eli Wong',
      img: t48,
      url: '',
      position: '',
      describe: 'Early Bitcoin investor, VC/angel investor in new technologies, fintech and blockchain startups. Founder of Blockchain Association of HK/Organizer of blockchain events. 20+ years of investment experiences. Worked at ING Barings, Merrill Lynch, GAM and Elixir Capital.'
  },
  {title: 'Bryan YE',
      img: t49,
      url: '',
      position: '',
      describe: 'Graduated from Zhengzhou University with Master Degree of Science. Over 8 years of IT business  in international market. Previously worked at SuperMap Software as sales director and at APUS Group as BD manager.'
  },
  {title: 'Mimi Chu',
    img: t55,
    url: '',
    position: '',
    describe: 'Graduated from Aalborg University, Denmark with BSc and MSc degrees in Medialogy. Academic background in HCI and innovative design. Over 7 years in international marketing especially BD and project management. Lived in Denmark for 15 years and work in cross functional teams and international circumstance. Detail-oriented and structured in planning and implementation. Marathon runner.'
  },
  {title: 'Ruby Wang',
    img: t56,
    url: '',
    position: '',
    describe: 'Graduated from Beijing University of Chemical Technology with Master degree of Chemical Engineering. 4 years of general industry in marketing and consulting experience. Love playing Guqin and Yoga in spare time.'
  },
  {title: 'Sonia Xu',
    img: t57,
    url: '',
    position: '',
    describe: 'Graduated from Peking University, China with Bachelor in HR management. Over 6 years in Human Resource industry, specialized in HR management and event planning. Strong communication skills and good understanding of client\'s needs, especially in Chinese market. She is curious about new challenges, and loves cooking and enjoys the process from 0 to completion.'
  },
  {title: 'Han Kao',
      img: t50,
      url: '',
      position: '',
      describe: 'Grew up in New York City and graduated from Columbia University with a B.A. in Economics. He enjoys building amazing products and growing tech businesses from 0 to 1. In his spare time he enjoys rock climbing, golfing, and investing in Bitcoin, Blockchain and Cryptocurrencies. His latest venture is a crypto media property focused on deep ICO Review & Analysis. Also he is the founder of Cryptobriefing.'
  },
  {title: 'Qinggang Jia',
      img: t51,
      url: '',
      position: '',
      describe: 'Gradudated from Chinese Academy of Sciences. More than 15 years software development experience. Experience in Java card, N3 card VM development and related crypto library implementation. Worked at Oracle, Watchdata, Gameloft, etc.'
  },
  {title: 'Anson Lee',
      img: t52,
      url: '',
      position: '',
      describe: 'MS in Telecom Engineering from RWTH-AACHEN University, Germany Served as a senior software developer in Ericsson, Huawei and some startups. Anson is a CPA, blockchain enthusiast, Go and JavaScript developer.'
  },
];


export default data;
