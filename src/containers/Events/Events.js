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
                  <td>05/07/2018  -  05/07/2018</td>
                  <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://hacksummit.org/hackathon">Hack.Summit Virtual Hackathon</a></td>
                  <td>06/07/2018  -  08/07/2018</td>
                  <td>Virtual</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.fintechweek.com/?gclid=CjwKCAjw9qfZBRA5EiwAiq0Abf9KSPiPlZvPTFUSg5OH-Ha1I4jTJNXo6AdRN0KaH9NjEfeSfRiUohoCWMwQAvD_BwE">London Fintech week</a></td>
                  <td>06/07/2018  -  13/07/2018</td>
                  <td>London, United Kindom</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-30-wanchain-and-partners-asia-tour-2018-feat-jack-lu-tickets-46653927152?aff=ebdssbdestsearch">Wanchain Meetup</a></td>
                  <td>07/07/2018  -  07/07/2018</td>
                  <td>Kuala Lumpur, Malaysia</td>
                </tr>
                <tr>
                  <td>Bitrue & Wanchain Meetup</td>
                  <td>10/07/2018 -  11/07/2018</td>
                  <td>Taipei, Taiwan</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/cryptocurrency-blockchain-20wanchain-and-partners-asia-tour-2018seoul-tickets-46877334369">Wanchain Meetup</a></td>
                  <td>14/07/2018 -  14/07/2018</td>
                  <td>Seoul, South Korea</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>19/07/2018 -  19/07/2018</td>
                  <td>London, United Kindom</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>23/07/2018 -  23/07/2018</td>
                  <td>Amsterdam, Netherlands</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2018</td>
                  <td>25/07/2018 -  25/07/2018</td>
                  <td>Zurich, Switzerland</td>
                </tr>
                <tr>
                  <td>Wanchain European Roadshow 2019</td>
                  <td>27/07/2018 -  27/07/2018</td>
                  <td>Berlin Germany</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.co.uk/e/blockchain-summit-singapore-tickets-42277553300">Blockchain Summit</a></td>
                  <td>28/07/2018 -  28/07/2018</td>
                  <td>Singapore</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://www.xblockchain.tech/">XBlockchain Summit</a></td>
                  <td>09/10/2018  -  10/10/2018</td>
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
