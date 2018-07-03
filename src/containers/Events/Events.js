import React, {Component} from 'react';
import Helmet from 'react-helmet';


class Events extends Component {
  render() {
    const styles = require('./Events.scss');
    const eventsBg = require('./image/eventsBg.png');
    return (<div>
      {<Helmet script={[{src: '/jquery/jquery.min.js'}]} link={[{rel: 'stylesheet'}]}/>}
      <Helmet link={[{rel: 'stylesheet'}]}/>
      <div>
        <div className={styles.eventsBanner}>
          <img src={eventsBg} />
        </div>
        <div className={styles.eventsContent}>
          <div className={styles.w}>
            <em className={styles.unline}></em>
            <table border="0" className={styles.eventsTable}>
              <tbody>
                <tr>
                  <th width="40%">Event Name</th>
                  <th width="40%">Dates</th>
                  <th width="20%">Location</th>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-20-wanchain-and-partners-coming-to-jakarta-tickets-46807312933">Wanchain Meetup</a></td>
                  <td>2018/7/5  -  2018/7/5</td>
                  <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://hacksummit.org/hackathon">Hack.Summit Virtual Hackathon</a></td>
                  <td>2018/7/6  -  2018/7/8</td>
                  <td>Virtual</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.fintechweek.com/?gclid=CjwKCAjw9qfZBRA5EiwAiq0Abf9KSPiPlZvPTFUSg5OH-Ha1I4jTJNXo6AdRN0KaH9NjEfeSfRiUohoCWMwQAvD_BwE">London Fintech week</a></td>
                  <td>2018/7/6  -  2018/7/13</td>
                  <td>London, United Kindom</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-30-wanchain-and-partners-asia-tour-2018-feat-jack-lu-tickets-46653927152?aff=ebdssbdestsearch">Wanchain Meetup</a></td>
                  <td>2018/7/7  -  2018/7/7</td>
                  <td>Kuala Lumpur, Malaysia</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-30-wanchain-and-partners-asia-tour-2018-feat-jack-lu-tickets-46653927152?aff=ebdssbdestsearch">Wanchain Meetup</a></td>
                  <td>2018/7/7  -  2018/7/7</td>
                  <td>Kuala Lumpur, Malaysia</td>
                </tr>
                <tr>
                  <td>Bitrue & Wanchain Meetup</td>
                  <td>2018/7/10 -  2018/7/11</td>
                  <td>Taipei, Taiwan</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-20wanchain-and-partners-asia-tour-2018seoul-tickets-46877334369">Wanchain Meetup</a></td>
                  <td>2018/7/14 -  2018/7/14</td>
                  <td>Seoul, South Korea</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>2018/7/19 -  2018/7/19</td>
                  <td>London, United Kindom</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>2018/7/23 -  2018/7/23</td>
                  <td>Amsterdam, Netherlands</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>2018/7/25 -  2018/7/25</td>
                  <td>Zurich, Switzerland</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2019</td>
                  <td>2018/7/27 -  2018/7/27</td>
                  <td>Berlin Germany</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.co.uk/e/blockchain-summit-singapore-tickets-42277553300">Blockchain Summit</a></td>
                  <td>2018/8/28 -  2018/8/28</td>
                  <td>Singapore</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://www.xblockchain.tech/">XBlockchain Summit</a></td>
                  <td>2018/10/9  -  2018/10/10</td>
                  <td>Bali, Indonesia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Events;
