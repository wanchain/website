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
                  <th width="50%">Event Name</th>
                  <th width="25%">Dates</th>
                  <th width="25%">Location</th>
                </tr>
                <tr>
                  <td><a target="_blank" href="https://www.eventbrite.com/e/wanchain-20-wanlabs-meetup-beijng-tickets-48685254908">Wanchain meetup series</a></td>
                  <td>8/18</td>
                  <td>Beijng</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://www.huodongxing.com/event/6452253960000">P.O.D conference</a></td>
                  <td>9/5</td>
                  <td>Beijing</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://shanghai.slush.org">Slush Shanghai</a></td>
                  <td>9/7-9/8</td>
                  <td>Shanghai</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://www.blockchainlabs.org/week2018/index_en.html">Wanxiang Blochain Hackthon</a></td>
                  <td>9/7-9/9</td>
                  <td>Shanghai</td>
                </tr>
                <tr>
                  <td><a target="_blank" href="http://www.blockchainlabs.org/week2018/index_en.html">Shanghai International Blockchain Week tech open day</a></td>
                  <td>9/10</td>
                  <td>Shanghai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p className={styles.eventsText}>To RSVP for the Wanchain European Tour , please send email to ines.b@wanchain.org . We will send you a private invitation closer to the event</p>
    </div>);
  }
}

export default Events;
