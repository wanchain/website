const t1 = require('./image/t1.png');
const t2 = require('./image/t2.png');
const t3 = require('./image/3.png');
const t4 = require('./image/4.png');
const t5 = require('./image/5.png');
const t6 = require('./image/6.png');
const t7 = require('./image/7.png');
const t8 = require('./image/8.png');
const t9 = require('./image/9.png');
const t10 = require('./image/10.png');
const t11 = require('./image/11.png');
const t12 = require('./image/12.png');
const t13 = require('./image/13.png');
const t14 = require('./image/14.png');
const t15 = require('./image/15.png');
const t16 = require('./image/t16.png');
const t25 = require('./image/25.png');
const t29 = require('./image/29.png');

const data = [
  {title: '吕旭军',
    img: t1,
    position: '创始人',
    describe: '获得北京大学、俄亥俄州立大学多个学位，区块链资深创业者及技术专家，12年进入区块链领域，14年联合创立著名区块链项目Factom，16年创立区块链商业应用企业网录科技。致力于推动区块链技术的更大范围应用。'
  },
  {title: '梁智',
    img: t2,
    position: '',
    describe: '北大应用数学系毕业，美国麻省大学博士，超性能计算、密码学算法及密码学安全有精深造诣。在美国有20多年理论研究及工程研发经验。负责带领万维链科学团队。'
  },
  {title: '张英',
    img: t3,
    position: '',
    describe: '进入区块链行业前华为资深工程师，曾任多家公司首席架构师和CTO，精通架构设计，高并发Web服务，大数据处理。以太坊深度开发者，对区块链架构、智能合约、共识算法有深刻理解及丰富的工程经验。'
  },
  {title: '石榴',
    img: t4,
    position: '',
    describe: '北京大学理学学士、计算机软件双学位，应用数学博士，专注椭圆曲线密码学，基于身份识别的公钥密码学，同态加密理论，参与完成国密算法设计实现。负责万维链密码及算法相关设计。'
  },
  {title: '肇中',
    img: t5,
    position: '',
    describe: '北京大学理学学士、经济学学士、应用数学博士，专注椭圆曲线公钥密码学、密码算法安全性分析，负责设计区块链隐私与匿名算法，已经成功设计多项区块链相关算法。负责万维链密码及算法相关设计。'
  },
  {title: 'Michael Y.',
    img: t6,
    position: '',
    describe: '12年进入区块链领域，开始进行比特币相关开发，社区活跃开发人员，曾是Master Coin，Omni 和Factom的核心开发人员。'
  },
  {title: 'Eric Swartz',
    img: t7,
    position: '',
    describe: '美国西南大学计算机科学学士，资深工程师，曾先后就职于Xtreme Power、戴尔等企业。'
  },
  {title: 'Piyush Mehta',
    img: t8,
    position: '',
    describe: '毕业于印度顶尖学府IIT及美国南加州大学，资深工程师，曾先后就职于戴尔、AT&T、Loss Recovery Company。'
  },
  {title: 'James Shen',
    img: t9,
    position: '',
    describe: '美国德克萨斯大学计算机科学学士，曾任通用汽车、惠普首席工程师11年进入区块链领域，资深矿工，资深区块链开发工程师。'
  },
  {title: 'Shanfeng Chen',
    img: t10,
    position: '',
    describe: '复旦大学学士、硕士，美国德克萨斯A&M大学博士，曾先后担任意法爱立信产品设计负责人，恩智浦半导体模拟设计工程师。'
  },
  {title: '张利华',
    img: t11,
    position: '',
    describe: '20年开发经验，进入区块链行业前为华为资深工程师，精通C/C++,Golang,nodejs,java等多种语言，区块链P2P网络,加密算法,共识算法专家。'
  },
  {title: '顾峻枫',
    img: t12,
    position: '',
    describe: '毕业于清华大学，美国马里兰大学计算机硕士曾就职于思科、戴尔担任高级工程师，精通网络通信和信息安全。'
  },
  {title: '罗宁',
    img: t13,
    position: '',
    describe: '美国克莱姆森大学物理学和计算机博士，曾先后在MaxPoint、Lumeris担任首席软件工程师。'
  },
  {title: 'Cathy Niu',
    img: t14,
    position: '',
    describe: '俄亥俄州立大学计算机硕士先后在惠普，R&R担任首席工程师及架构师。参与Factom项目研发。'
  },
  {title: '杨涛',
    img: t15,
    position: '',
    describe: '进入区块链行业前为资深财务及金融系统顾问，连续创业者。14年成为数字货币理念的拥趸，擅长产品设计，多款区块链应用产品设计经验。多次发表区块链与货币相关文章。'
  },
  {title: '陆利华',
    img: t16,
    position: '',
    describe: '中国传媒大学毕业，多年电视台、杂志、出版社工作经历，曾任智加设计创新集团市场总监。区块链社区组织者，多次策划及组织区块链联盟会议，区块链行业会议。'
  },
  {title: 'Wenyan Qin',
    img: t25,
    position: '',
    describe: '曾就职于IBM多伦多实验室，蒙特利尔银行，数据技术及数据模型规范专家。加入区块链后参与以太坊Parity开发工作。'
  },
  {title: '孙震',
    img: t29,
    position: '',
    describe: '国内知名互联网公司开发经历。javascript全栈工程师，精通React，Angularjs和node服务开发。对浏览器运行机理有深入研究，擅长前端性能优化。主要负责万维链钱包的开发。'
  },
];


export default data;
