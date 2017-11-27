import React, {Component} from 'react';
import Helmet from 'react-helmet';

class Career extends Component {

  render() {
    const styles = require('./Career.scss');
    const banLeftimg = require('./image/pic.png');
    const sanjiao = require('./image/sanj.png');
    return (
        <div>
          {/* <Helmet script={[{src: '/jquery/jquery.min.js'}, {src: '/js/career/career.js'}]} link={[{rel: 'stylesheet', href: '/css/career.css'}]}/> */}
           <Helmet link={[{rel: 'stylesheet', href: '/css/career.css'}]}/>
          <div className={styles.bandiv}>
            <div className={styles.w} >
              <div className={styles.banLeft}>
                <img src={banLeftimg} className={styles.carimg1} />
              </div>
              <div className={styles.banRight}>
                <div className={styles.brDiv1}>
                  <span>Competitive compensation</span>
                </div>
                <div className={styles.brDiv2}>
                  <span>Great support from team members</span>
                </div>
                <div className={styles.brDiv3}>
                  <span>Invitations to networking events</span>
                </div>
                <div className={styles.brDiv4}>
                  <span className={styles.brdSpand}>Self-development</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.cH2}><span className={styles.chsColor}>C</span><span>URRENT OPPORTUNITIES</span></h2>
            <div className={styles.messageBox} id="pcBox">
              <ul className={styles.mbUl}>
                <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                <li className={styles.mbuLi2}>LOCATION</li>
                <li className={styles.mbuLi3}>NUMBER</li>
              </ul>
              <div className={styles.comDiv}>
                <p className="cdPBox" id="comcdpBox">
                  <span className="cdpSpan1">Blockchain Technical Development Leadership (CTO/VP/Director)</span>
                  <span className="cdpSpan2">Austin</span>
                  <span className="cdpSpan3"><span>1</span><em className="cdpXia"><img id="target" src={sanjiao} /></em></span>
                </p>
                <div className="toggleBox" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Experienced senior manager with strong technical skills and passion for blockchain ecosystem who can lead a global tech team on our cross-chain platform and application development, set the roadmap of technical development and new products, and make presentation of architecture of our products at blockchain conferences and to our customers. </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-Must have a strong blockchain technical background</span>
                        <span>-Management experiences working with global teams</span>
                        <span>-10 years+ in large scale software development experience</span>
                        <span>-Entrepreneurial DNA</span>
                        <span>-Excellent work ethic and professional demeanor</span>
                        <span>-Strong writer and communicator, excellent listener, with superior sales skills and comfort regularly interacting with potential community members</span>
                        <span>-Highly organized and detail-oriented, balanced by ability to get and communicate big picture</span>
                        <span>-Self-starter and independent manager, but good team player and personnel manager</span>
                        <span>-Smart, creative thinker and problem-solver, fast learner, with demonstrated initiative</span>
                        <span>-Previous experiences in network security and cryptography is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Texas - remote candidates may still apply.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million tokensale. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comDiv}>
                <p className="cdPBox2" id="comcdpBox">
                  <span className="cdpSpan1">Blockchain Software Engineer</span>
                  <span className="cdpSpan2">Austin, Beijing, Remote</span>
                  <span className="cdpSpan3"><span>6</span><em className="cdpXia"><img src={sanjiao} /></em></span>
                </p>
                <div className="toggleBox2" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Join a team of talented engineers to develop the key technologies for blockchain-based systems, including consensus algorithm, key management, multi-party computation, ring signature, and P2P networking.  Design, develop and test of software to support digital asset creation, management and transfer.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-Experienced in Go/C/C++/Java/JavaScript/Python programming languages, and the full software development life-cycle</span>
                        <span>-Proficient at code optimization and layering, with in-depth understanding of the software architecture and design methodology</span>
                        <span>-5 years of software lifecycle development experiences</span>
                        <span>-Previous experience with blockchain development is a plus</span>
                        <span>-Previous experiences in network security and cryptography is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Beijing, Remote</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million tokensale. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comDiv}>
                <p className="cdPBox3" id="comcdpBox">
                  <span className="cdpSpan1">Automation Test Engineer</span>
                  <span className="cdpSpan2">Austin, Texas, Remote</span>
                  <span className="cdpSpan3"><span>1</span><em className="cdpXia"><img src={sanjiao} /></em></span>
                </p>
                <div className="toggleBox3" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Experienced automation test engineer who can develop the integration test plans and lead test automation efforts. Sometimes manual testing will be conducted.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-5+ years of experience in Quality Assurance.</span>
                        <span>-Proven expertise in Go/C/C++/Java/JavaScript/Python – and the ability to write code from scratch,</span>
                        <span> -Prior experience with automation tools are preferred</span>
                        <span>-Must have a solid understanding or experience with Behavior-Driven Development (BDD) or Test-Driven Development (TDD)</span>
                        <span>-A Computer Science degree</span>
                        <span>-Great communication skill </span>
                        <span>-Previous experiences in blockchain is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Texas, Remote</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comDiv}>
                <p className="cdPBox4" id="comcdpBox">
                  <span className="cdpSpan1">Local Community Manager</span>
                  <span className="cdpSpan2">All</span>
                  <span className="cdpSpan3"><span>12</span><em className="cdpXia"><img src={sanjiao} /></em></span>
                </p>
                <div className="toggleBox4" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">We require community managers who can engage professionally and efficiently with our community across offline platforms (local meetup groups, conferences) and are comfortable speaking in front of a crowd.</p>
                      <p className="comtdP">As a community manager, you will be responsible for creating and managing global and local community meetup groups. We are looking for candidates who are outgoing, well-connected in their local blockchain communities and have a deep understanding of the Blockchain technology and a driven passion for Wanchain.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>- A deep understanding of Blockchain technology and the cryptocurrency industry.</span>
                        <span>- Experience in community management and/or profound interest in learning to manage a community.</span>
                        <span>- A basic understanding of technical applications and how to explain these terms efficiently.</span>
                        <span>- Local Blockchain community ties. </span>
                        <span>- Able to organize local and global meet-ups for the community. </span>
                        <span>- Entrepreneur/Startup experience (bonus).</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Applications from all locations are welcome.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comDiv}>
                <p className="cdPBox5" id="comcdpBox">
                  <span className="cdpSpan1">Virtual Community Manager</span>
                  <span className="cdpSpan2">All</span>
                  <span className="cdpSpan3"><span>12</span><em className="cdpXia"><img src={sanjiao} /></em></span>
                </p>
                <div className="toggleBox5" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">We require community managers who can engage professionally and efficiently with our community across online platforms (bitcointalk, reddit, discord and telegram).</p>
                      <p className="comtdP">As an online community manager, you will be responsible for monitoring the online social platforms, giving and explaining information to users about the Wanchain platform, understand and be able to explain technical terms to users and respond to queries.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-A deep understanding of Blockchain technology and the cryptocurrency industry.</span>
                        <span>- Fluent in English.</span>
                        <span>- Experience in online community management.</span>
                        <span>- Experience with customer support across social media, email and online chats (e.g. Telegram,Discord, Slack).</span>
                        <span>- Ability to monitor social platforms and use appropriate actions (e.g. deleting spam, banning malicious users).</span>
                        <span>- A basic understanding of technical applications and how to explain these terms to the community.</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">-Competitive salary + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Applications from all locations are welcome.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.messageBox} id="mobileBox">
              <div className={styles.comMobDiv}>
                <div className="comMobileP">
                  <ul className={styles.mbUl}>
                    <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                    <li className={styles.mbuLi2}><em className="cdpXia"><img src={sanjiao} /></em></li>
                  </ul>
                  <div className={styles.mobTitle}>Blockchain Technical Development Leadership (CTO/VP/Director)</div>
                  <div className={styles.mobleDiv}>
                    <div className={styles.mobleDiv1}>
                      <h1>LOCATION</h1>
                      <span>Austin</span>
                    </div>
                    <div className={styles.mobleDiv2}>
                      <h1>NUMBER</h1>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="toggleBox" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Experienced senior manager with strong technical skills and passion for blockchain ecosystem who can lead a global tech team on our cross-chain platform and application development, set the roadmap of technical development and new products, and make presentation of architecture of our products at blockchain conferences and to our customers. </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-Must have a strong blockchain technical background</span>
                        <span>-Management experiences working with global teams</span>
                        <span>-10 years+ in large scale software development experience</span>
                        <span>-Entrepreneurial DNA</span>
                        <span>-Excellent work ethic and professional demeanor</span>
                        <span>-Strong writer and communicator, excellent listener, with superior sales skills and comfort regularly interacting with potential community members</span>
                        <span>-Highly organized and detail-oriented, balanced by ability to get and communicate big picture</span>
                        <span>-Self-starter and independent manager, but good team player and personnel manager</span>
                        <span>-Smart, creative thinker and problem-solver, fast learner, with demonstrated initiative</span>
                        <span>-Previous experiences in network security and cryptography is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Texas - remote candidates may still apply.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comMobDiv}>
                <div className="comMobileP2">
                  <ul className={styles.mbUl}>
                    <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                    <li className={styles.mbuLi2}><em className="cdpXia"><img src={sanjiao} /></em></li>
                  </ul>
                  <div className={styles.mobTitle}>Blockchain Software Engineer</div>
                  <div className={styles.mobleDiv}>
                    <div className={styles.mobleDiv1}>
                      <h1>LOCATION</h1>
                      <span>Austin, Beijing, Remote</span>
                    </div>
                    <div className={styles.mobleDiv2}>
                      <h1>NUMBER</h1>
                      <span>6</span>
                    </div>
                  </div>
                </div>
                <div className="toggleBox2" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Join a team of talented engineers to develop the key technologies for blockchain-based systems, including consensus algorithm, key management, multi-party computation, ring signature, and P2P networking.  Design, develop and test of software to support digital asset creation, management and transfer.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-Experienced in Go/C/C++/Java/JavaScript/Python programming languages, and the full software development life-cycle</span>
                        <span>-Proficient at code optimization and layering, with in-depth understanding of the software architecture and design methodology</span>
                        <span>-5 years of software lifecycle development experiences</span>
                        <span>-Previous experience with blockchain development is a plus</span>
                        <span>-Previous experiences in network security and cryptography is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Beijing, Remote</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comMobDiv}>
                <div className="comMobileP3">
                  <ul className={styles.mbUl}>
                    <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                    <li className={styles.mbuLi2}><em className="cdpXia"><img src={sanjiao} /></em></li>
                  </ul>
                  <div className={styles.mobTitle}>Automation Test Engineer</div>
                  <div className={styles.mobleDiv}>
                    <div className={styles.mobleDiv1}>
                      <h1>LOCATION</h1>
                      <span>Austin, Texas, Remote</span>
                    </div>
                    <div className={styles.mobleDiv2}>
                      <h1>NUMBER</h1>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="toggleBox3" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">Experienced automation test engineer who can develop the integration test plans and lead test automation efforts. Sometimes manual testing will be conducted.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-5+ years of experience in Quality Assurance.</span>
                        <span>-Proven expertise in Go/C/C++/Java/JavaScript/Python – and the ability to write code from scratch,</span>
                        <span> -Prior experience with automation tools are preferred</span>
                        <span>-Must have a solid understanding or experience with Behavior-Driven Development (BDD) or Test-Driven Development (TDD)</span>
                        <span>-A Computer Science degree</span>
                        <span>-Great communication skill </span>
                        <span>-Previous experiences in blockchain is a plus</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Austin, Texas, Remote</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comMobDiv}>
                <div className="comMobileP4">
                  <ul className={styles.mbUl}>
                    <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                    <li className={styles.mbuLi2}><em className="cdpXia"><img src={sanjiao} /></em></li>
                  </ul>
                  <div className={styles.mobTitle}>Local Community Manager</div>
                  <div className={styles.mobleDiv}>
                    <div className={styles.mobleDiv1}>
                      <h1>LOCATION</h1>
                      <span>All</span>
                    </div>
                    <div className={styles.mobleDiv2}>
                      <h1>NUMBER</h1>
                      <span>12</span>
                    </div>
                  </div>
                </div>
                <div className="toggleBox4" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">We require community managers who can engage professionally and efficiently with our community across offline platforms (local meetup groups, conferences) and are comfortable speaking in front of a crowd.</p>
                      <p className="comtdP">As a community manager, you will be responsible for creating and managing global and local community meetup groups. We are looking for candidates who are outgoing, well-connected in their local blockchain communities and have a deep understanding of the Blockchain technology and a driven passion for Wanchain.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>- A deep understanding of Blockchain technology and the cryptocurrency industry.</span>
                        <span>- Experience in community management and/or profound interest in learning to manage a community.</span>
                        <span>- A basic understanding of technical applications and how to explain these terms efficiently.</span>
                        <span>- Local Blockchain community ties. </span>
                        <span>- Able to organize local and global meet-ups for the community. </span>
                        <span>- Entrepreneur/Startup experience (bonus).</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">Competitive pay based on experience + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Applications from all locations are welcome.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.comMobDiv}>
                <div className="comMobileP5">
                  <ul className={styles.mbUl}>
                    <li className={styles.mbuLi1}><span className={styles.liBor}>POSITION</span></li>
                    <li className={styles.mbuLi2}><em className="cdpXia"><img src={sanjiao} /></em></li>
                  </ul>
                  <div className={styles.mobTitle}>Virtual Community Manager</div>
                  <div className={styles.mobleDiv}>
                    <div className={styles.mobleDiv1}>
                      <h1>LOCATION</h1>
                      <span>All</span>
                    </div>
                    <div className={styles.mobleDiv2}>
                      <h1>NUMBER</h1>
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="toggleBox5" id="toggleBox">
                  <div className="w">
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Job Description:</span></h1>
                      <p className="comtdP">We require community managers who can engage professionally and efficiently with our community across online platforms (bitcointalk, reddit, discord and telegram).</p>
                      <p className="comtdP">As an online community manager, you will be responsible for monitoring the online social platforms, giving and explaining information to users about the Wanchain platform, understand and be able to explain technical terms to users and respond to queries.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Requirement:</span></h1>
                      <p className="comtdP">
                        <span>-A deep understanding of Blockchain technology and the cryptocurrency industry.</span>
                        <span>- Fluent in English.</span>
                        <span>- Experience in online community management.</span>
                        <span>- Experience with customer support across social media, email and online chats (e.g. Telegram,Discord, Slack).</span>
                        <span>- Ability to monitor social platforms and use appropriate actions (e.g. deleting spam, banning malicious users).</span>
                        <span>- A basic understanding of technical applications and how to explain these terms to the community.</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Compensation:</span></h1>
                      <p className="comtdP">-Competitive salary + bonus based on performance.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Preferred Location:</span></h1>
                      <p className="comtdP">Applications from all locations are welcome.</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">About Us:</span></h1>
                      <p className="comtdP">Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit www.wanchain.org</p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">Benefits of Working at Wanchain</span></h1>
                      <p className="comtdP">
                        <span>-Competitive compensation (payable in cryptocurrency if desired)</span>
                        <span>-Great support from team members.</span>
                        <span>- Invitations to networking events.</span>
                        <span>- Self-development</span>
                      </p>
                    </div>
                    <div className="tbDiv">
                      <h1><span className="icoSan"></span><span className="comtdH1">To apply please send your resume, Github repository, and/or LinkedIn profile to: </span></h1>
                      <p className="comtdP">info@wanchain.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.fDiv}>
              <h2>About Us</h2>
              <p>Wanchain is developing next generation cross-chain blockchain architecture with privacy protection. Their mission is to re-build the financial services industry and recently raised $35 million in an ICO. For more information please visit </p>
              <h3>www.wanchain.org</h3>
            </div>
          </div>
        </div>
    );
  }
}

export default Career;
