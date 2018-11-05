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
// const t59 = require('./image/t59.png');
const t60 = require('./image/t60.png');
const t61 = require('./image/t61.jpeg');
const t62 = require('./image/t62.png');
const t63 = require('./image/t63.jpeg');
const t64 = require('./image/t64.jpeg');
const t65 = require('./image/t65.jpeg');
const t66 = require('./image/t66.jpg');
const t67 = require('./image/t67.jpg');
const t68 = require('./image/t68.jpg');
const data = [
  {title: 'Jack Lu',
    img: t1,
    url: 'https://www.linkedin.com/in/jack-lu-57995469/',
    position: 'Founder',
  },
  {title: 'LI NI',
    img: t46,
    url: 'https://www.linkedin.com/in/ni-li-80708050/',
    position: 'Vice President',
  },
  {title: 'Oliver Birch',
    img: t33,
    url: 'https://www.linkedin.com/in/oliver-birch-08ba8a44/',
    position: 'Vice President of Global Communications',
  },
  {title: 'Scott Trowbridge',
    img: t54,
    url: 'https://www.linkedin.com/in/scottbtrowbridge/',
    position: 'Director of Global Business Development',
  },
  {title: 'Dynal Patel',
    img: t53,
    url: 'https://www.linkedin.com/in/dynalpatel/',
    position: 'Vice President of Product',
  },
  {title: 'Dan Reecer',
    img: t60,
    url: 'https://www.linkedin.com/in/reecer',
    position: 'Director of Global Marketing',
  },
  {title: 'Weijia Zhang',
    img: t2,
    position: 'Head of Engineering',
    url: 'https://www.linkedin.com/in/weijia-zhang-013b84153',
  },
  {title: 'Lizzie Lu',
    img: t16,
    url: 'https://www.linkedin.com/in/lizzielu/',
    position: 'Marketing Manager',
  },
  {title: 'Edward Evenson',
    img: t61,
    position: 'Project Manager in Wanlabs and Global Business Development',
    url: 'https://www.linkedin.com/in/edward-evenson-107b51132/',
  },
  {title: 'Bryan YE',
    img: t49,
    url: 'https://www.linkedin.com/in/bryanyewei',
    position: 'Marketing Manager',
  },
  {title: 'Mark Tan',
    img: t67,
    url: 'https://www.linkedin.com/in/mark-tan-844ba798',
    position: 'South East Asia Business Development Director',
  },
  {title: 'Noah Maizels',
    img: t62,
    position: 'Global Business Development and Marketing Manager',
    url: 'https://www.linkedin.com/in/noah-maizels'
  },
  {title: 'Mimi Chu',
    img: t55,
    url: 'https://www.linkedin.com/in/mimi-chu-05511367',
    position: 'Business Development Manager',
  },
  {title: 'Ruby Wang',
    img: t56,
    url: 'https://www.linkedin.com/in/ruby-wang-10742b91',
    position: 'Marketing Manager',
  },
  {title: 'Ying Zhang',
    img: t3,
    position: 'Vice President of Development',
    url: 'https://www.linkedin.com/in/zhang-ying-628406113/',
  },
  {title: 'Michael Yakubovich',
    img: t6,
    position: 'Senior Core Developer',
    url: '',
  },
  {title: 'Richard Zhang',
    img: t11,
    url: 'https://www.linkedin.com/in/lihua-zhang-a9b586174/',
    position: 'Core Developer',
  },
  {title: 'Astro Sun',
    img: t29,
    url: 'https://www.linkedin.com/in/%E9%9C%87-%E5%AD%99-725b45169/',
    position: 'Senior Software Engineer (Front-End)',
  },
  {title: 'Boris Yang',
    img: t15,
    url: '',
    position: '',
  },
  {title: 'Liu Zhihui',
    img: t37,
    url: 'https://www.linkedin.com/in/LiuZhihui/',
    position: 'Senior Software Engineer',
  },
  {title: 'Liu Mengfei',
    img: t39,
    url: 'https://www.linkedin.com/in/%E5%AD%9F%E9%A3%9E-%E5%88%98-5787ab173/',
    position: 'Senior Software Engineer',
  },
  {title: 'Gabriel Guo',
    img: t40,
    url: 'https://www.linkedin.com/in/wu-guo-1b660053/',
    position: 'Research and Development Director',
  },
  {title: 'Aaron Zhan',
    img: t42,
    url: 'https://www.linkedin.com/in/li-zhan-1a9636b0/',
    position: 'Senior Software Engineer',
  },
  {title: 'Sean Chai',
    img: t43,
    url: 'https://www.linkedin.com/in/seanchai-9277ab173',
    position: 'Senior Software Engineer (Front-End)',
  },
  {title: 'Sonia Xu',
    img: t57,
    url: '',
    position: 'Marketing Manager',
  },
  {title: 'Jia Qinggang',
    img: t51,
    url: 'https://www.linkedin.com/in/qinggang-jia-074757131/',
    position: 'Senior Software Engineer',
  },
  {title: 'Anson Lee',
    img: t52,
    url: 'https://www.linkedin.com/in/fanghua-li-851203162/',
    position: 'Senior Software Engineer (Smart Contract Expert)',
  },
  {title: 'Scott Brasfield',
    img: t65,
    url: 'https://www.linkedin.com/in/scott-brasfield-32bb87a5/',
    position: 'Business Development Manager'
  },
  {title: 'Michael A.',
    img: t63,
    url: 'https://www.linkedin.com/in/map01/',
    position: 'Business Development Manager'
  },
  {title: 'Matthew Kenahan',
    img: t64,
    url: 'https://www.linkedin.com/in/matthewkenahan/',
    position: 'Business Development Manager'
  },
  {title: 'Jacky Wang',
    img: t66,
    url: 'https://www.linkedin.com/in/jacky-wang-776458173/',
    position: 'Business Director'
  },
  {title: 'Abhinav Shankar',
    img: t68,
    url: 'https://www.linkedin.com/in/abhinav-shankar-24647075/',
    position: 'Product and Business Development Manager'
  },
];
export default data;
