import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';
import '../div.scss';

import mark from '../../../../image/mark.png'

class Div1En extends React.Component {
    static propTypes = {
        language: PropTypes.string,
        clientWidth: PropTypes.number,
    };

    render() {
        const {language} = this.props;

        return (
            <div className="container crowd-div1Header">
                <h2> <hr className="crowd-div1HeaderImg"/>ICO plan<hr className="crowd-div1HeaderImg"/></h2>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td> 1 </td>
                        {/*<td>1 ETH : <span>400</span> wancoin</td>*/}
                        <td><span>15% off</span></td>
                        <td>Sep 6, 2017 12:00 --Sep 13, 2017 11:59<small>UTC</small></td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        {/*<td>1 ETH : <span>450</span> wancoin</td>*/}
                        <td><span>5% off</span></td>
                        <td>Sep 13, 2017 12:00 -- Sep 20, 2017 11:59 <small>UTC</small></td>
                    </tr>
                    <tr>
                        <td> 3 </td>
                        {/*<td>1 ETH : <span>600</span> wancoin</td>*/}
                        <td><span>Original Cost</span></td>
                        <td>Sep 20, 2017 12:00 -- Sep 27, 2017 11:59 <small>UTC</small></td>
                    </tr>
                    </tbody>
                </table>

                <div className="crowd-div1HeaderDiv">
                    <h4><img src={mark}/>notices:</h4>
                    <p>
                        Before the ICO starts, exchange ratio based on Ether will be published in accordance with the price of Ether.<br/>
                        When 107.1 million tokens are sold out or when the crowd-funding time is over, the smart contract will be automatically closed.<br/>
                        The minimum contribution limit for each transaction is 0.1ETH. <br/>
                        After the crowd-funding ends, tokens will be allocated to every crowd-funding address by the smart contracts, and these tokens <br/>
                        will be transferred via Ethereum wallets.<br/>
                        When Wanchain is alive, users may exchange their tokens for Wancoins at a ratio of 1:1. The version 1.0 is expected to go online in November 2017.
                    </p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (data) => {
            dispatch(changeLanguage(data))
        },
    };
};

const mapStateToProps = (state) => ({
    language : state.lang.language,
    clientWidth: state.lang.clientWidth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Div1En)


// <img src={line} className="div1HeaderImg" />