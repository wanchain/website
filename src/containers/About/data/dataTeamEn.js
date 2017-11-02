const t1 = require('./image/t1.png');
const t2 = require('./image/t2.png');
const t3 = require('./image/3.png');
const t4 = require('./image/4.png');
const t5 = require('./image/5.png');
const t6 = require('./image/6.png');
const t7 = require('./image/7.png');
const t9 = require('./image/9.png');
const t11 = require('./image/11.png');
const t12 = require('./image/12.png');
const t13 = require('./image/13.png');
const t14 = require('./image/14.png');
const t15 = require('./image/15.png');
const t16 = require('./image/t16.png');
const t25 = require('./image/25.png');
const t29 = require('./image/29.png');

const t19 = require('./image/19.png');
const t31 = require('./image/t31.png');

const t32 = require('./image/t32.png');
const t33 = require('./image/t33.png');
const t34 = require('./image/t34.png');
const t35 = require('./image/t35.png');
const t36 = require('./image/t36.png');

const data = [
  {title: 'Jack Lu',
    img: t1,
    url: 'https://www.linkedin.com/in/jack-lu-57995469/',
    position: 'Founder',
    describe: `Graduated from Peking University and The Ohio State University. Blockchain entrepreneur and technical expert. Cofounded Factom in 2014. Founded Wanglutech, which brings Blockchain technology to a greater range of applications.`
  },
  {title: 'Dustin Byington',
    img: t19,
    url: 'https://www.linkedin.com/in/dbyington/',
    position: '',
    describe: `Graduated from Columbia University . MBA from University of Michigan. Veteran entrepreneur in the blockchain space. Founded Bitcoin College in 2014, Cofounded Tendermint in 2015. Founded Satoshi Talent and Stokens Venture Capital.`
  },
  {title: 'Welch Zhou',
    img: t31,
    url: '',
    position: '',
    describe: ` Founded Hishare Exchange. Security Advisor of Hyperledger. Deputy Secretary-General of Europe-China Culture & Economy Commission. 20 years of experience in investment, business management, and government relationship.`
  },
  {title: 'Zane Liang',
    img: t2,
    position: '',
    url: '',
    describe: `
    Applied Mathematics degree from Peking University and PhD from the University of Massachusetts. Specializes in high performance computing, cryptographic algorithms and cryptographic security.
   `
  },
  {title: 'Ying Zhang',
    img: t3,
    position: '',
    url: '',
    describe: `
    Senior engineer from Huawei and served as CAO and CTO of several companies. A senior developer of Ethereum with a deep understanding of, and engineering experience with, blockchain architecture, smart contracts and consensus algorithms.`
  },
  {title: 'Tony Zhang',
    img: t4,
    position: '',
    url: '',
    describe: `
    Specializing in elliptic curve cryptography, ID-based public key cryptography, homomorphic encryption theory and blockchain technology.`
  },
  {title: 'Demmon Bai',
    img: t5,
    position: '',
    url: '',
    describe: `
   Specializes in elliptic curve cryptography and security analysis of cryptographic algorithms.In charge of designing the privacy and anonymity algorithms of blockchain technology.`
  },
  {title: 'Michael Y.',
    img: t6,
    position: '',
    url: '',
    describe: 'Entered into the blockchain space in 2012, specializing in Bitcoin related development. Core developer of Master Coin, Omni and Factom.'
  },
  {title: 'Eric Swartz',
    url: 'https://www.linkedin.com/in/ericswartz/',
    img: t7,
    position: '',
    describe: 'BS in Computer Science from Southwestern University. Software test engineer and technical writer, employed at Novell, VTEL, Xtreme Power, etc.'
  },
  {title: 'James Shen',
    img: t9,
    url: '',
    // url: 'https://www.linkedin.com/in/jian-shen-197bb943/',
    position: '',
    describe: 'BS in Computer Science from the University of Texas. Lead engineer at General Motors and HP. Entered into the blockchain space in 2011 as a senior blockchain miner and developer.'
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
  {title: 'Ning Luo',
    img: t13,
    url: 'https://www.linkedin.com/in/ning-luo-%E7%BD%97%E5%AE%81-b8a3904/',
    position: '',
    describe: 'PhD in Physics and Computer Science from the University of Clemson. Served as the chief software engineer at MaxPoint and Lumeris.'
  },
  {title: 'Cathy Niu',
    img: t14,
    url: '',
    position: '',
    describe: `MS in Computer Science from The Ohio State University.
Served as lead engineer and architect at HP and R&R.
Participated in the core development of Factom.`
  },
  {title: 'Wenyan Qin',
    img: t25,
    url: '',
    position: '',
    describe: `A member of the IBM Toronto Software Lab DB2 engine infrastructure team, focused on database protocols, the Bank of Montreal VaR engine, the Manulife retirement service engine, 401K, and now blockchain platform development in Beijing.`
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
    describe: `Former senior financial consultant. Entered into the blockcahin space in 2014.
Considerable expertise in blockchain product design.
Published various articles on blockchain and currency.`
  },
  {title: 'Lizzie Lu',
    img: t16,
    url: 'https://www.linkedin.com/in/利华-陆-84ab4bbb/',
    position: '',
    describe: `Graduated from China Communication University. Years of television, magazine and press  experience. Former marketing director at ZCODesign.
An organizer in the blockchain community, affiliations and conferences.`
  },
  {title: 'Justin Snyder',
    img: t34,
    url: 'https://www.linkedin.com/in/jus10snyder/',
    position: '',
    describe: `Co-Founder of DecentraNet. Customer engagement specialist who develops creative and compelling ways to build Wanchain's Twitter and Facebook communities.`
  },
  {title: 'Oliver Birch',
    img: t33,
    url: 'https://www.linkedin.com/in/oliver-birch-08ba8a44/',
    position: '',
    describe: `Also known as 'machinayz', Oliver is Wanchain's community manager. He is a project manager for several start-up companies and has years of experience working in the altcoin crypto space community: advising, blogging and admin work for several slack, reddit and telegram groups.`
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
      url: 'http://www.gscass.cn/html/news/2016-09-20/14620.html',
      position: '',
      describe: 'Founder and Director of Prymtech Ltd, a performance driven marketing agency.  A serial entrepreneur with over 10 years experience in digital marketing strategies and business development'
  },

];


export default data;
