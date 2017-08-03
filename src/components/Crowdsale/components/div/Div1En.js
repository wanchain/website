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
        const {clientWidth} = this.props;

        return (
            <div className="container crowd-div1Header">
                <h2> <hr className="crowd-div1HeaderImg"/> Distribution Schedule<hr className="crowd-div1HeaderImg"/></h2>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td> 1 </td>
                        {/*<td>1 ETH : <span>400</span> wancoin</td>*/}
                        <td><span>15% off</span></td>
                        <td>Sep 06, 2017 12:00 -- Sep 13, 2017 11:59 <small>UTC</small></td>
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
                    <h4><img src={mark}/>notes:</h4>
                    {clientWidth > 767 &&
                    <p>
                        <div className="crowd-div4Header-pot"></div>
                        Before the ICO starts, exchange ratio based on Ether will be published in accordance with the Ether price.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        When either 107.1 million tokens are sold or when the crowd-funding time ends, the smart contract will be automatically closed.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        The minimum contribution limit for each transaction is 0.1ETH. <br/>

                        <div className="crowd-div4Header-pot"></div>
                        After the crowd-funding ends, the smart contracts will allocate the tokens to every crowd-funding address,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;and these tokens will be transferred via Ethereum wallets.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        When Wanchain is live, users may exchange their tokens for Wancoins at a 1:1 ratio. Wanchain version 1.0 is expected to go online in November 2017.
                    </p>
                    }

                    {clientWidth <= 767 &&
                    <p>
                        <div className="crowd-div4Header-pot"></div>
                        Before the ICO starts, exchange ratio based on Ether will be published in accordance with the Ether price.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        When either 107.1 million tokens are sold or when the crowd-funding time ends, the smart contract will be automatically closed.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        The minimum contribution limit for each transaction is 0.1ETH. <br/>

                        <div className="crowd-div4Header-pot"></div>
                        After the crowd-funding ends, the smart contracts will allocate the tokens to every crowd-funding address,<br/>
                        and these tokens will be transferred via Ethereum wallets.<br/>

                        <div className="crowd-div4Header-pot"></div>
                        When Wanchain is live, users may exchange their tokens for Wancoins at a 1:1 ratio. Wanchain version 1.0 is expected to go online in November 2017.
                    </p>
                    }

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