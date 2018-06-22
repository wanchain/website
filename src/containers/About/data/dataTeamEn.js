const t1 = require('./image/t1.png');
const t2 = require('./image/t2.png');
const t3 = require('./image/3.png');
const t6 = require('./image/6.png');
const t11 = require('./image/11.png');
const t15 = require('./image/15.png');
const t16 = require('./image/t16.png');
const t29 = require('./image/29.png');

const t31 = require('./image/t31.png');

const t33 = require('./image/t33.png');
const t37 = require('./image/t37.png');
const t39 = require('./image/t39.png');
const t40 = require('./image/t40.png');
const t42 = require('./image/t42.png');
const t43 = require('./image/t43.png');
const t46 = require('./image/t46.png');
const t49 = require('./image/t49.png');
const t51 = require('./image/t51.png');
const t52 = require('./image/t52.png');
const t53 = require('./image/t53.png');
const t54 = require('./image/t54.png');
const t55 = require('./image/t55.png');
const t56 = require('./image/t56.png');
const t57 = require('./image/t57.png');
const t59 = require('./image/t59.png');
const t60 = require('./image/t60.png');

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
    position: 'Vice President',
    describe: 'Graduated from Peking University with BA degree and acquired Master Degree of Science (MSc) in Computer Science with Distinction from University of Durham, UK. Over 15 years in IT business especially international experience in marketing, BD and sales. Before joining Wanchain, worked for ZTE Telecommunication, Delta Electronics and SuperMap Software as directors and principals in business teams. Currently vice president of Wanchain and Wanglu Tech for BD, marketing, PR and sales. Also served as IT consultant for FECC, Ministry of Agriculture (MOA) of China and Food and Agriculture Organization (FAO).'
  },
  {title: 'Oliver Birch',
    img: t33,
    url: 'https://www.linkedin.com/in/oliver-birch-08ba8a44/',
    position: 'Vice President of Global Communications',
    describe: `Also known as 'machinayz', Oliver is currently Vice President Of Global Communications for Wanchain. After graduating from Lancaster University with BA (Hons) in Philosophy, Politics and Economics, he commenced his career in the pharmaceutical industry. He has managed several clinical research sites and was a project manager for several start-up companies with years of experience working in the altcoin crypto space community: advising, blogging and admin work.`
  },
  {title: 'Scott Trowbridge',
    img: t54,
    url: 'https://www.linkedin.com/in/scottbtrowbridge/',
    position: 'Director of Global Business Development',
    describe: 'Scott has continued to invest and support various blockchain projects through strategic partnerships, investor relations and early-stage growth since 2014 with Ethereum.Currently supporting Wanchain’s global business development and WANLabs operations through strategic partnerships, investor relations and continual growth activities.Educated in Computer Science, Business & Marketing. 7+ years experience in technology organisations and startups. Experience project managing remote global business/project development teams. Expertise incubating early-stage projects from ideology to later stage growth.'
  },
  {title: 'Marcos Cunha',
    img: t59,
    url: 'https://www.linkedin.com/in/marcos3/',
    position: 'Director of WanLabs Americas',
    describe: `Marcos is in charge Wanchain's exclusive accelerator for FinTech start-ups that are looking to grow their companies in the preeminent blockchain ecosystem. Before joining Wanchain, Marcos founded several companies in the tech space, led development teams in building technology for enterprise clients, worked on Wall Street at Goldman Sachs and at various other Fortune 100 companies. Marcos has an MBA from Indiana University, an Engineering degree from Purdue University and a Fellowship from Stanford on Scaling Companies. He recently served as an Entrepreneur in Residence at Capital Factory/Google/Code2040 and as a Google Developers Expert for Growth. Marcos is an advisor to various companies and a mentor at Google's Pioneer Accelerator and University of Texas Longhorn Startup Lab.`
  },
  {title: 'Dynal Patel',
    img: t53,
    url: '',
    position: '',
    describe: 'Accomplished executive with a strong track record of delivering innovative products and solutions to the market and developing market leading partner ecosystems. Leads the development and execution of strategic partnerships at Wanchain. Has over 15 years of management experience in leading technology and telecommunication companies such as Vodafone, Altran Technologies and Microsoft. Holds a PhD in Computer Science from the University of Cape Town and is a certified Project Management Professional.'
  },
  {title: 'Dan Reecer',
    img: t60,
    url: 'https://www.linkedin.com/in/reecer',
    position: 'Director of Global Marketing',
    describe: `Dan is joining Wanchain as Global Marketing Director based in Austin, TX. Before joining Wanchain, Dan was a brand marketer at Eli Lilly & Company in the pharmaceutical industry and worked on several multi-billion dollar brands in roles across U.S. and Global brand marketing, product pricing, and digital marketing technology. Dan graduated from Indiana University’s Kelley School of Business with a Bachelors in Information Systems and International Business and a Masters in Information Systems`
  },
  {title: 'Weijia Zhang',
    img: t2,
    position: 'Head of Engineering',
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
  {title: 'Zhihui Liu',
      img: t37,
      url: '',
      position: '',
      describe: 'More than 10 years of software development experience. Good at developing languages such as C++ and golang. Most of the time engaged in the Internet industry. Having rich programming experience in network transmission, software optimization, distributed architecture and large concurrent.'
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
