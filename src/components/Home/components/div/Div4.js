import React, {PropTypes}  from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../../../../store/lang';

import '../div.scss';

class Div4 extends React.Component {

    static propTypes = {
        language: PropTypes.string,
    };

    render() {

        const {language} = this.props;

        return (
            <div className="div4Header">

                <div className="div4HeaderDiv container">
                    {language === 'zn' && <h2><hr className="div1HeaderImg"/>最新通告<hr className="div1HeaderImg"/></h2>}
                    {language === 'en' && <h2><hr className="div1HeaderImg"/>News<hr className="div1HeaderImg"/></h2>}
                    <div className="col-lg-12">
                        <div className="col-lg-4">
                            <a href="https://finance.yahoo.com/news/wanchain-public-blockchain-project-releases-084300788.html" target="_blank">
                            <div className="AstroModule7" >
                                <h2>Wanchain, a Public Blockchain Project...</h2>
                                <p>Wanchain, the first public blockchain project envisioned by the Chinese firm Wanglu Tech, recently released a white paper. Wanchain is a blockchain-based distributed financial infrastructure which allows the exchange of assets among different blockchain networks in a decentralized way. With Wanchain, more organizations are able to develop their own services and innovate in the distributed finance space.</p>
                                <h4>August 3, 2017</h4>
                            </div></a>
                        </div>

                        <a href="http://chainb.com/?P=mpost&id=5425" target="_blank">
                        <div className="col-lg-4">
                            <div className="AstroModule7" >
                                <h2>Wanchain Developed To Spur Inter-Blockchain...</h2>
                                <p>Wanchain's architecture is built on the Ethereum blockchain. As stated in the whitepaper, Wanchain will act as a decentralized bank, allowing individuals to interact across the existing blockchain ecosystem by providing an intermediary platform that makes use of executable distributed code contracts (EDCCs).
                                </p>
                                <h4>August 4, 2017</h4>
                            </div>
                        </div></a>

                        <a href="http://chainb.com/?P=mpost&id=5425" target="_blank">
                            <div className="col-lg-4">
                                <div className="AstroModule7" >
                                    <h2>Wanchain To Enable Interoperability Between...</h2>
                                    <p>Wanchain, a public blockchain project by Chinese firm Wanglu Tech, is building a distributed financial infrastructure on the Ethereum network that allows for the exchange of assets among different blockchain networks. The initiative aims to enable more organizations to easily develop their own services and innovate in the “distributed finance space.”
                                    </p>
                                    <h4>August 3, 2017</h4>
                                </div>
                            </div></a>
                    </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Div4)
