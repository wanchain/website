import React, {Component, PropTypes} from 'react';

class Content extends Component {
  static propTypes = {
    isShow: PropTypes.string,
    isPopFunc: PropTypes.func,
    download: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: props.isShow
    };
  }

  render() {
    const styles = require('./Product.scss');

    var isShow = this.props.isShow;
    return (
      <div style={{ display: isShow === 'true' ? 'block' : 'none' }}>
        <div className={styles.shadeBox} onClick={this.props.isPopFunc}></div>
        <div className={styles.aggreePopBox}>
          <h1>
            Wanchain Wallet Application Terms and Conditions
          </h1>
          <span className={styles.closeBtn} onClick={this.props.isPopFunc}>×</span>
          <div className={styles.popupCont}>
            <div>
              <b>1. </b>The following terms and conditions ("Terms") shall govern the relationship between Wanchain Foundation Ltd and you in relation to any wallet ("Wallet") for the storage of any Wancoin ("WAN") digital asset ("Digital Asset") applied for by you and issued to you by Wanchain Foundation Ltd ("Wanchain"). You acknowledge and accept every risk disclosed in these Terms. In these terms, any reference to Wanchain shall include Wanchain, its affiliates, officers, directors, agents, employees, contractors, suppliers, and any related bodies corporate.
            </div>
            <div>
              <b>2. </b>You acknowledge and agree that these Terms only provide basic information concerning the risks involved with owning and maintaining of the Wallet, but cannot and does not disclose all the risks.
            </div>
            <div>
              <b>3. </b>It is your sole responsibility to ensure that you understand all the relevant terms, features, arrangements, and all possible risks and other relevant implications of your use of the Wallet, as well as of any Digital Asset you store in your Wallet and carefully consider whether or not it is suitable for you to be holding such Digital Assets given your experience and objectives, financial situation and resources, particular needs, risk appetite and any other relevant circumstances. You are solely responsible for obtaining your own legal, financial and tax advice or other professional advice, as appropriate, and agree that Wanchain shall not be liable for, amongst others, any loss in connection with any risk whether disclosed or not disclosed in these Terms. Any such loss will be at your sole and absolute risk.
            </div>
            <div>
              <b>4. </b>You understand and acknowledge that the use of the Wallet without adequate experience with, and understanding of, the usage and intricacies of cryptographic tokens, like WAN, and other blockchain-based software systems, including a functional understanding of storage and transmission mechanisms associated with other cryptographic tokens, carries significant risk. You represent and warrant that you have such adequate experience and understanding.
            </div>
            <div>
              <b>5. </b>Your Wallet shall be accessible by way of private key(s) stored in keystore(s), required to control and dispose of the Digital Assets stored in your Wallet. Any loss of requisite keystore and/or private key(s) associated with your Wallet, will result in loss of such Digital Assets. If you do not maintain an accurate record of your keystore(s), private key(s) or password(s) used to access your private key(s), this may lead to the loss of your Digital Assets. You must safely store your keystore(s) and password(s) in one or more backup locations that are well separated from the primary location. If you do not have such experience or expertise, then you should not participate or purchase Digital Assets.
            </div>
            <div>
              <b>6. </b>Any third party that gains access to your private key may be able to gain access to your Digital Assets. You must take care not to respond to any inquiry regarding your purchase of Digital Assets, including but not limited to, email requests purportedly coming from any website purporting to be from Wanchain or a similar-looking domain. If you use a third-party product which allows you or third parties to access and hold the private keys, you acknowledge that Wanchain is not responsible for safeguarding such keys and it is not responsible for any loss of Digital Assets from theft, loss or mishandling of Digital Assets outside of its control. You will at all times maintain control of your private key and/or any account credentials associated with the Wallet, and will not share or disclose the private key or account credentials with any other party.
            </div>
            <div>
              <b>7. </b>Wanchain is not obliged to provide, does not provide or purport to provide, is not providing and shall not be deemed to have provided any advice or recommendation to you to use the Wallet or to hold any Digital Assets within the Wallet.
            </div>
            <div>
              <b>8. </b>It is your sole responsibility to determine if you can legally use the Wallet or purchase or hold Digital Assets in accordance with the laws of any applicable jurisdiction, and you must not use the Wallet or purchase or hold any Digital Assets if you are not able to legally do so under the laws of any applicable jurisdiction.
            </div>
            <div>
              <b>9. </b>You represent and warrant that any Digital Assets held by you within the Wallet will not constitute or be subject to recharacterization as securities, commodities, or any other form of financial or investment product, under the laws of any applicable jurisdiction.
            </div>
            <div>
              <b>10. </b>Your Digital Assets are not intended to represent any formal or legally binding investment. Cryptographic tokens that possess value in public markets have demonstrated extreme fluctuations in price over short periods of time on a regular basis. You should be prepared to expect similar fluctuations, both down and up, in the price of your Digital Assets, including the possibility that your Digital Assets may become valueless.
            </div>
            <div>
              <b>11. </b>Wanchain shall not owe any legal or any other obligation to you in respect of your Digital Assets in your Wallet. Your Digital Assets are not in any way guaranteed by, nor do they constitute deposits or obligations of, Wanchain. Unlike cash reserves held in bank accounts or accounts with financial institutions, the Digital Assets held in your Wallet are not held with us and are so held by you entirely at your own sole risk and are not insured or protected by us or any party whether in Singapore or otherwise. You should consider specifically obtaining your own private insurance to insure such Digital Assets held by you. In the event of loss or loss of utility value, there is no public insurer or private insurance arranged by Wanchain to offer recourse to you.
            </div>
            <div>
              <b>12. </b>The Wallet and other related applications and software are hosted on one or more web-based hosting services and are therefore susceptible to a number of risks related to the storage of data on the web in the cloud. Such data may include large amounts of sensitive and or proprietary information, which may be compromised in the event of a cyber attack or other malicious activity. Similarly, the Wallet and its related applications and software may be interrupted and files may become temporarily unavailable in the event of such an attack or malicious activity. Your use of any hardware and software to interface with the Wallet, may also result in the risk of the Wallet becoming unavailable or interrupted, based on a failure of interoperability or an inability to integrate these third-party systems and devices with the Wallet.
            </div>
            <div>
              <b>13. </b>Information about your Wallet and transactions involving your Wallet is recorded, and is publicly available, on the Wanchain blockchain, and may be accessible by the public. Any transaction involving your Wallet may be traced back to your Wallet.
            </div>
            <div>
              <b>14. </b>Your use of the Wallet and other related applications and software are at your sole risk, and to the fullest extent permissible under any applicable law, the Wallet and other related applications and software are provided to you on an "as is" basis without warranties of any kind, either express or implied, including, but not limited to, implied warranties, satisfactoriness of quality, merchantability or fitness for a particular purpose, non-infringement, and any warranties arising out of any course of dealing or usage of trade.
            </div>
            <div>
              <b>15. </b>Wanchain shall not be liable and does not in any way warrant or guarantee the suitability of the Wallet as a store for Digital Assets. Further, as your Wallet and other related applications or software are based on open-source software, there is a risk that Wanchain or other third parties not affiliated with Wanchain may introduce weaknesses or bugs into such open-source software that may affect its core infrastructural elements and therefore cause the system to lose Digital Assets stored in your Wallet or any other wallet.
            </div>
            <div>
              <b>16. </b>Advances in code cracking, or technical advances such as the development of quantum computers, could present risks to cryptocurrencies and the Wallet and its related applications and software, which could result in the theft or loss of Digital Assets. Hackers, individuals, other malicious groups or organizations may attempt to interfere with your Wallet or Digital Assets in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing, which may result in the theft or loss of your Digital Assets. Further, as with other similar decentralized, blockchain technology, your Wallet and Digital Assets are susceptible to attacks by miners in the course of validating transactions involving your Wallet or Digital Assets including, but not limited to, double-spend attacks, majority mining power attacks, selfish-mining attacks and race condition attacks. Any successful attacks present a risk to your Wallet and Digital Assets including, but not limited to, accurate execution, recording of transactions involving your Wallet and Digital Assets, and expected proper payment operations. Wanchain shall not in any way be liable for any loss resulting from any of the malicious activity described in this paragraph. Further, although Wanchain has no obligation to do so, Wanchain may attempt to update the protocol or software underlying the Wallet with security measures to prevent such malicious activity, but does not in any way guarantee that it will be able to do so in a timely or successful manner.
            </div>
            <div>
              <b>17. </b>Market conditions and/or the operation of the rules of certain cryptocurrency exchanges may increase the risk of loss of value in your Digital Assets by making it difficult or impossible to effect transactions in your Digital Assets.
            </div>
            <div>
              <b>18. </b>You acknowledge and understand that any transactions of Digital Assets involving your Wallet will be subject to transaction fees or other charges for which you will be liable.
            </div>
            <div>
              <b>19. </b>Intellectual property rights claims may adversely affect the operation of the Wallet. Third parties may assert intellectual property ownership claims relating to the holding and transfer of cryptographic tokens and their source code. Regardless of the merit of any intellectual property claim or other legal action, such threatened action may result in a reduction in confidence in the ability or viability of holding Digital Assets and may adversely affect the value of your Digital Assets. Additionally, a meritorious intellectual property claim could prevent you from accessing the Wallet, or accessing, holding or transferring your Digital Assets.
            </div>
            <div>
              <b>20. </b>The regulatory status of cryptographic tokens, blockchain and distributed ledger technology may be unclear or unsettled in many jurisdictions. It is difficult to predict how or whether regulatory agencies may apply existing regulation with respect to such technology and its applications, including to your Wallet, its related application and software, and your Digital Assets. It is likewise difficult to predict how or whether legislatures or regulatory agencies may implement changes to the relevant law and regulation. Such regulatory actions may negatively impact Wanchain as well as your ability to use your Wallet or access your Digital Assets.
            </div>
            <div>
              <b>21. </b>By entering into any transaction involving Digital Assets and your Wallet, you acknowledge and agree that you are aware of the tax implications (including the implications of any applicable income tax, goods and services or value added taxes, stamp duties and other taxes, withholding tax, and any tax reporting requirements) of acquiring, entering into, holding and disposing of the relevant Digital Assets. Any such tax or tax-related obligations, whether arising in Singapore or otherwise, shall be your sole and absolute responsibility. In the event that any such taxes are paid by or required to be paid by Wanchain, you shall reimburse Wanchain in respect of such taxes. You shall indemnify Wanchain against any tax penalties which may be imposed on Wanchain that result from or in any way relate to your failure to comply with your above-mentioned tax obligations.
            </div>
            <div>
              <b>22. </b>You understand and agree that any Digital Assets held by you within your Wallet will not bear any interest, and you will not be entitled to any compensation for the time value of your holding of the Digital Assets within your Wallet.
            </div>
            <div>
              <b>23. </b>You irrevocably authorise Wanchain to collect, use, and/or disclose information relating to you or your transactions in your Wallet to any of Wanchain’s agents, affiliates, or any other third parties selected by any of them, wherever situated, and/or to any person to (or through) whom Wanchain transfers or assigns (or may potentially transfer or assign) all or any of its rights, benefits and obligations under these Terms. Wanchain and any aforesaid recipient of information may collect, use, transfer and disclose any such information as required by or in furtherance of any obligation (contractual or otherwise) under or in connection to any law, court, regulator, legal process, self-regulatory bodies, governmental, regulatory, or tax authority. Such authority to collect, use and/or disclose shall continue notwithstanding that you no longer have any Digital Assets or maintain your Wallet.
            </div>
            <div>
              <b>24. </b>You will provide all documents and other information required by Wanchain in relation to your Wallet application, including but not limited to documents and information required to enable Wanchain to comply with its anti-money laundering and other legal or regulatory requirements. You represent and warrant that any such information, and any information contained in such documents, shall be accurate, true, and complete in all respects and you will immediately inform Wanchain if any of the above-mentioned information ceases to be accurate, true and complete.
            </div>
            <div>
              <b>25. </b>If the Wanchain software underlying the Wallet or its related applications is rapidly adopted, the demand for transaction processing and distributed application computations could rise dramatically and at a pace that exceeds the mining power available to the software. This could then result in a destabilization of such software and negatively impact your ability to access your Wallet or Digital Assets, or increase prohibitively your costs of accessing your Wallet or Digital Assets.
            </div>
            <div>
              <b>26. </b>If the Wanchain software underlying the Wallet or its related applications receives insufficient interest, whether because of competing, alternative software, or because the software has not met the expectations of users, or any other reason, the software may not be able to continue to operate or to operate as intended. This may also result in the destabilization of the Wanchain software and negatively impact your ability to access your Wallet or Digital Assets, or increase prohibitively your costs of accessing your Wallet or Digital Assets.
            </div>
            <div>
              <b>27. </b>The design, functions and features of your Wallet, as well as its related applications and software, shall be under constant development and Wanchain reserves the right to change such design, functions and features at any time.
            </div>
            <div>
              <b>28. </b>Neither Wanchain nor their respective officers, delegates or agents shall be liable for any loss or failure or delay in complying with their obligations under these Terms caused by force majeure, act of god, war, terrorism, industrial disputes, natural disaster, adverse weather conditions, failure of communication systems or any other cause beyond the control of Wanchain.
            </div>
            <div>
              <b>29. </b>Cryptographic tokens such as the Digital Assets, and applications that allow the holding of such Digital Assets, such as the Wallet, are a new and relatively untested technology. In addition to the risks noted above, there are other risks associated with your use of the Wallet and your purchase, holding and use of Digital Assets, including those that Wanchain cannot anticipate. Such risks may further materialise as unanticipated variations or combinations of the risks set out above. In addition, where more than one risk factor has effect simultaneously, this may have a compounding effect, which may not be predictable.
            </div>
            <div>
              <b>30. </b>To the extent permitted by applicable law, Wanchain shall not be liable for, and shall be indemnified and held harmless by, you from and against any loss, damage, expense or cost arising out of or in connection to any of your Digital Assets and any use by you of your Wallet, except if such loss, damage, expense or cost is a direct result of the gross negligence or wilful misconduct or fraud of Wanchain. To the extent permitted by applicable law, such loss, damage, expense, or cost shall include any and all damages of whatever kind, including indirect, incidental, special, exemplary, or consequential damages, including for loss of profits, goodwill and data. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Therefore, some of the above limitations may not apply to you. Nothing in these Terms shall affect your statutory rights or exclude injury arising from gross negligence, wilful misconduct or fraud of Wanchain.
            </div>
            <div>
              <b>31. </b>These Terms shall be governed by and construed in accordance with Singapore law. You submit to the exclusive jurisdiction of the Singapore courts with regards to all proceedings relating to this these Terms and any of your dealings in the WAN ERC-20 tokens and WAN. Nothing herein shall limit the right of Wanchain to bring proceedings against you or your assets in the courts of any other jurisdiction.
            </div>
          </div>
          <div className={styles.TableDiv}>
            <h6>Please verify downloaded file's data integrity with SHA256 checksum tools</h6>
             <table>
               <tr>
                 <th>File Name</th>
                 <th>Checksum (SHA256)</th>
               </tr>
               <tr>
                 <td>WanWalletGui-installer-3.0.25.exe</td>
                 <td>15c7a40ff47e9a521e0e677df66e55c0e0f6ea6e527cc2dcc150f3caa1d90a2e </td>
               </tr>
               <tr>
                 <td>WanWalletGui-mac-3.0.25.zip</td>
                 <td>2efa8f45b54ea37b67a2f38d63fde5704cdb45535c6c9aba62890d4f1d021a7d</td>
               </tr>
               <tr>
                 <td>WanWalletGui-linux64-3.0.25.deb</td>
                 <td>3440de877b05dc5bccfb188cb2d86f00312fc8323cce8ae29d23879ddb0f8037</td>
               </tr>
             </table>
          </div>
          <a onClick={this.props.isPopFunc} href={this.props.download} target="_blank">Got it</a>
        </div>
      </div>
    );
  }
}

export default Content;
