import React, {Component, PropTypes} from 'react';

class Content extends Component {
  static propTypes = {
    language: PropTypes.string,

    isShow: PropTypes.string,
    isPopFunc: PropTypes.func,
    download: PropTypes.string,
    offline: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isShow: props.isShow
    };
  }

  render() {
    var isShow = this.props.isShow;

    const styles = require('./Product.scss');
    const {language, offline} = this.props;
    const products = {
      'mac': {
        name: 'WanWalletGui-mac-3.0.27.zip',
        hash: 'e43eb7880f7221b879915de8639c142fdc9fa08f38ca7d81a70247f6d73a47b7'
      },
      'linux': {
        name: 'WanWalletGui-linux64-3.0.27.deb',
        hash: 'c6cae2b4d014815a953f745e43de23730b5ccdf029f02814fb0e410ff4713e00'
      },
      'win': {
        name: 'WanWalletGui-installer-3.0.27.exe',
        hash: '7f68434b2da43455f7ee6dc96c344b4b0b2c9d05fbb5ea254f4f864f65667a58'
      }
    };
    if (offline) {
      products.mac = {
        name: 'WanOfflineWallet-1.0.0-beta_mac.zip',
        hash: 'a1b4d57db47e5c0cf6cea079c8222dd4581b7b84a082f33677c568aa30e111a0'
      };
      products.linux = {
        name: 'WanOfflineWallet-1.0.0-beta_amd64.deb',
        hash: '52b63fd01340f99ae626e1e3111543b113eff7efd9e56d415071b9a10ce78227'
      };
      products.win = {
        name: 'WanOfflineWallet-1.0.0-beta_win.exe',
        hash: '38c9403c28d01790545895b599bad3647e3008b2507f8402891d276da6fdb32c'
      };
    }

    return (
      <div style={{ display: isShow === 'true' ? 'block' : 'none' }}>
        <div className={styles.shadeBox} onClick={this.props.isPopFunc}></div>
        <div className={styles.aggreePopBox}>
          <h1>
            {language === 'zn' ? 'Wanchain钱包应用的条款及细则' : 'Wanchain Wallet Application Terms and Conditions'}
          </h1>
          <span className={styles.closeBtn} onClick={this.props.isPopFunc}>×</span>
          <div className={styles.popupCont}>
            <div>
              <b>1. </b>
              {language === 'zn'
               ? '以下条款和条件（“条款”）适用于Wanchain Foundation Ltd与您之间关于存储任何Wancoin（“WAN”）数字资产（“数字资产”）的任何钱包（“钱包”）之间的关系。由您申请并由Wanchain Foundation Ltd（“Wanchain”）发给您。您承认并接受这些条款中披露的所有风险。在这些条款中，对Wanchain的任何提及均包括Wanchain，其附属公司，高级职员，董事，代理人，雇员，承包商，供应商以及任何相关法人团体。'
               : 'The following terms and conditions (\"Terms\") shall govern the relationship between Wanchain Foundation Ltd and you in relation to any wallet ("Wallet") for the storage of any Wancoin ("WAN") digital asset ("Digital Asset") applied for by you and issued to you by Wanchain Foundation Ltd ("Wanchain"). You acknowledge and accept every risk disclosed in these Terms. In these terms, any reference to Wanchain shall include Wanchain, its affiliates, officers, directors, agents, employees, contractors, suppliers, and any related bodies corporate.'}
            </div>
            <div>
              <b>2. </b>
              {language === 'zn'
               ? '您承认并同意这些条款仅提供有关拥有和维护电子钱包所涉及风险的基本信息，但不能也不会披露所有风险。'
               : 'You acknowledge and agree that these Terms only provide basic information concerning the risks involved with owning and maintaining of the Wallet, but cannot and does not disclose all the risks.'}
            </div>
            <div>
              <b>3. </b>
              {language === 'zn'
               ? '您有责任确保您了解使用电子钱包的所有相关条款，功能，安排，所有可能的风险和其他相关影响，以及您在电子钱包中存储的任何数字资产并仔细根据您的经验和目标，财务状况和资源，特殊需求，风险偏好和任何其他相关情况，考虑是否适合您持有此类数字资产。您应自行负责获取您自己的法律，财务和税务建议或其他专业建议，并同意Wanchain不对与本条款中披露或未披露的任何风险有关的任何损失承担责任。 任何此类损失将由您自行承担绝对风险。'
               : 'It is your sole responsibility to ensure that you understand all the relevant terms, features, arrangements, and all possible risks and other relevant implications of your use of the Wallet, as well as of any Digital Asset you store in your Wallet and carefully consider whether or not it is suitable for you to be holding such Digital Assets given your experience and objectives, financial situation and resources, particular needs, risk appetite and any other relevant circumstances. You are solely responsible for obtaining your own legal, financial and tax advice or other professional advice, as appropriate, and agree that Wanchain shall not be liable for, amongst others, any loss in connection with any risk whether disclosed or not disclosed in these Terms. Any such loss will be at your sole and absolute risk.'}
            </div>
            <div>
              <b>4. </b>
              {language === 'zn'
               ? '您理解并承认使用电子钱包时没有足够的经验和理解加密数字通证（如WAN）和其他基于区块链的软件系统的使用和复杂性，包括对其他加密数字通证存储和传输机制相关的功能性理解，存在重大风险。您声明并保证您拥有足够的经验和理解。'
               : 'You understand and acknowledge that the use of the Wallet without adequate experience with, and understanding of, the usage and intricacies of cryptographic tokens, like WAN, and other blockchain-based software systems, including a functional understanding of storage and transmission mechanisms associated with other cryptographic tokens, carries significant risk. You represent and warrant that you have such adequate experience and understanding.'}
            </div>
            <div>
              <b>5. </b>
              {language === 'zn'
               ? '您的电子钱包可通过存储在密钥库中的私钥进行访问，这些私钥是控制和处理存储在电子钱包中的数字资产所必需的。任何与您的电子钱包相关的必需密钥库和/或私钥的丢失都将导致此类数字资产的丢失。如果您未准确记录用于访问私钥的密钥库，私钥或密码，则可能导致数字资产丢失。您必须将密钥库和密码安全地存储在与主要地点完全分离的一个或多个备份地点中。如果您没有这种经验或专业知识，那么您不应参与或购买数字资产。'
               : 'Your Wallet shall be accessible by way of private key(s) stored in keystore(s), required to control and dispose of the Digital Assets stored in your Wallet. Any loss of requisite keystore and/or private key(s) associated with your Wallet, will result in loss of such Digital Assets. If you do not maintain an accurate record of your keystore(s), private key(s) or password(s) used to access your private key(s), this may lead to the loss of your Digital Assets. You must safely store your keystore(s) and password(s) in one or more backup locations that are well separated from the primary location. If you do not have such experience or expertise, then you should not participate or purchase Digital Assets.'}
            </div>
            <div>
              <b>6. </b>
              {language === 'zn'
               ? '任何获得私钥访问权限的第三方都可以访问您的数字资产。您必须注意不要回复有关您购买数字资产的任何询问，包括但不限于任何声称来自Wanchain或类似外观域名的网站的电子邮件请求。如果您使用允许您或第三方访问和保存私钥的第三方产品，您承认Wanchain不负责保护此类密钥，并且对因盗窃，丢失或错误处理而导致的数字资产丢失概不负责。您将始终保持对您的私钥和/或与电子钱包相关联的任何帐户凭据的控制权，并且不会与任何其他方共享或披露私钥或帐户凭据。'
               : 'Any third party that gains access to your private key may be able to gain access to your Digital Assets. You must take care not to respond to any inquiry regarding your purchase of Digital Assets, including but not limited to, email requests purportedly coming from any website purporting to be from Wanchain or a similar-looking domain. If you use a third-party product which allows you or third parties to access and hold the private keys, you acknowledge that Wanchain is not responsible for safeguarding such keys and it is not responsible for any loss of Digital Assets from theft, loss or mishandling of Digital Assets outside of its control. You will at all times maintain control of your private key and/or any account credentials associated with the Wallet, and will not share or disclose the private key or account credentials with any other party.'}
            </div>
            <div>
              <b>7. </b>
              {language === 'zn'
               ? 'Wanchain没有义务提供，不提供或声称提供，不提供也不应被视为已向您提供任何建议或建议，以使用电子钱包或在电子钱包中持有任何数字资产。'
               : 'Wanchain is not obliged to provide, does not provide or purport to provide, is not providing and shall not be deemed to have provided any advice or recommendation to you to use the Wallet or to hold any Digital Assets within the Wallet.'}
            </div>
            <div>
              <b>8. </b>
              {language === 'zn'
               ? '您有责任确定您是否可以合法使用电子钱包或根据任何适用司法管辖区的法律购买或持有数字资产，如果您不能够根据任何适用的司法管辖区的法律合法地这样做，则不得使用电子钱包或购买或持有任何数字资产。'
               : 'It is your sole responsibility to determine if you can legally use the Wallet or purchase or hold Digital Assets in accordance with the laws of any applicable jurisdiction, and you must not use the Wallet or purchase or hold any Digital Assets if you are not able to legally do so under the laws of any applicable jurisdiction.'}
            </div>
            <div>
              <b>9. </b>
              {language === 'zn'
               ? '您声明并保证，根据任何适用的司法管辖区的法律，您在电子钱包中持有的任何数字资产将不构成或可能被重新定性为证券，商品或任何其他形式的金融或投资产品。'
               : 'You represent and warrant that any Digital Assets held by you within the Wallet will not constitute or be subject to recharacterization as securities, commodities, or any other form of financial or investment product, under the laws of any applicable jurisdiction.'}
            </div>
            <div>
              <b>10. </b>
              {language === 'zn'
               ? '您的数字资产并非旨在代表任何正式或具有法律约束力的投资。在公共市场中具有价值的数字加密资产经常在短期内表现出极大的价格波动。您应该准备好预期数字资产的价格会出现类似的波动，包括​​您的数字资产可能变得毫无价值。'
               : 'Your Digital Assets are not intended to represent any formal or legally binding investment. Cryptographic tokens that possess value in public markets have demonstrated extreme fluctuations in price over short periods of time on a regular basis. You should be prepared to expect similar fluctuations, both down and up, in the price of your Digital Assets, including the possibility that your Digital Assets may become valueless.'}
            </div>
            <div>
              <b>11. </b>
              {language === 'zn'
               ? '对于您的电子钱包中的数字资产，Wanchain不承担任何法律或任何其他义务。您的数字资产不受任何形式的担保，也不构成Wanchain的存款或债项。与银行账户或金融机构账户中持有的现金储备不同，您的电子钱包中持有的数字资产不是由我们持有，而是完全由您持有并自行承担风险，并且不受我们或任何一方的保险或保护，无论是在新加坡还是在别地。您应该考虑专门获取自己的私人保险来为您持有的此类数字资产提供保障。在实用价值损失或丧失的情况下，Wanchain不会安排公共保险人或私人保险向您提供追索权。'
               : 'Wanchain shall not owe any legal or any other obligation to you in respect of your Digital Assets in your Wallet. Your Digital Assets are not in any way guaranteed by, nor do they constitute deposits or obligations of, Wanchain. Unlike cash reserves held in bank accounts or accounts with financial institutions, the Digital Assets held in your Wallet are not held with us and are so held by you entirely at your own sole risk and are not insured or protected by us or any party whether in Singapore or otherwise. You should consider specifically obtaining your own private insurance to insure such Digital Assets held by you. In the event of loss or loss of utility value, there is no public insurer or private insurance arranged by Wanchain to offer recourse to you.'}
            </div>
            <div>
              <b>12. </b>
              {language === 'zn'
               ? '电子钱包和其他相关应用程序和软件托管在一个或多个基于Web的托管服务上，因此易受与网络云数据存储相关的许多风险的影响。此类数据可能包含大量敏感和/或专有信息，这些信息可能会在网络攻击或其他恶意活动的情况下受到损害。类似地，在这种攻击或恶意活动的情况下，钱包及其相关的应用程序和软件可能被中断，并且文件可能暂时不可用。您使用任何硬件和软件与电子钱包互联，也可能导致电子钱包因互操作性失败或无法将第三方系统和设备与电子钱包集成而变得不可用或中断的风险。'
               : 'The Wallet and other related applications and software are hosted on one or more web-based hosting services and are therefore susceptible to a number of risks related to the storage of data on the web in the cloud. Such data may include large amounts of sensitive and or proprietary information, which may be compromised in the event of a cyber attack or other malicious activity. Similarly, the Wallet and its related applications and software may be interrupted and files may become temporarily unavailable in the event of such an attack or malicious activity. Your use of any hardware and software to interface with the Wallet, may also result in the risk of the Wallet becoming unavailable or interrupted, based on a failure of interoperability or an inability to integrate these third-party systems and devices with the Wallet.'}
            </div>
            <div>
              <b>13. </b>
              {language === 'zn'
               ? '有关您的电子钱包和涉及您的电子钱包的交易的信息在Wanchain区块链上被记录并可公开获取，并且可以由公众访问。任何涉及您的电子钱包的交易都可能追溯到您的电子钱包。'
               : 'Information about your Wallet and transactions involving your Wallet is recorded, and is publicly available, on the Wanchain blockchain, and may be accessible by the public. Any transaction involving your Wallet may be traced back to your Wallet.'}
            </div>
            <div>
              <b>14. </b>
              {language === 'zn'
               ? '您使用电子钱包和其他相关应用程序和软件的风险由您自行承担，并且在任何适用法律允许的最大范围内，电子钱包和其他相关应用程序和软件均按“原样”提供给您，不含有任何保证，无论明示或暗示的，包括但不限于暗示保证，质量令人满意性，适销性或适用于特定用途，不侵权以及任何交易或使用交易过程中产生的任何保证。'
               : 'Your use of the Wallet and other related applications and software are at your sole risk, and to the fullest extent permissible under any applicable law, the Wallet and other related applications and software are provided to you on an "as is" basis without warranties of any kind, either express or implied, including, but not limited to, implied warranties, satisfactoriness of quality, merchantability or fitness for a particular purpose, non-infringement, and any warranties arising out of any course of dealing or usage of trade.'}
            </div>
            <div>
              <b>15. </b>
              {language === 'zn'
               ? 'Wanchain不承担任何责任，也不以任何方式保证或保障钱包作为数字资产存储的适用性。此外，由于您的电子钱包和其他相关应用程序或软件基于开源软件，因此存在Wanchain或其他不隶属于Wanchain的第三方可能会在可能影响其核心基础架构的开源软件中引入漏洞或故障，因此导致系统丢失存储在电子钱包或任何其他钱包中的数字资产。'
               : 'Wanchain shall not be liable and does not in any way warrant or guarantee the suitability of the Wallet as a store for Digital Assets. Further, as your Wallet and other related applications or software are based on open-source software, there is a risk that Wanchain or other third parties not affiliated with Wanchain may introduce weaknesses or bugs into such open-source software that may affect its core infrastructural elements and therefore cause the system to lose Digital Assets stored in your Wallet or any other wallet.'}
            </div>
            <div>
              <b>16. </b>
              {language === 'zn'
               ? '代码破解的技术进步，或诸如量子计算机发展等技术进步可能给加密货币和钱包及其相关应用程序和软件带来风险，这可能导致数字资产被盗或丢失。黑客，个人，其他恶意团体或组织可能会尝试以各种方式干涉您的电子钱包或数字资产，包括但不限于恶意软件攻击，拒绝服务攻击，基于共识的攻击，Sybil攻击，smurf和欺骗攻击，可能导致您的数字资产被盗或丢失。此外，与其他类似的去中心化区块链技术一样，您的电子钱包和数字资产在验证涉及您的电子钱包或数字资产的交易过程中容易受到矿工的攻击，包括但不限于双重花费攻击，多数采矿权攻击，自私采矿攻击和竞争条件攻击。任何成功的攻击都会给您的电子钱包和数字资产带来风险，包括但不限于准确执行，记录涉及您的电子钱包和数字资产的交易，以及预期的正确付款操作。对于因本段所述的任何恶意活动而导致的任何损失，Wanchain不承担任何责任。此外，尽管Wanchain没有义务这样做，但Wanchain可能会尝试使用安全措施来更新电子钱包的协议或软件以防止此类恶意活动，但不以任何方式保证它能够及时或成功地做到这一点。'
               : 'Advances in code cracking, or technical advances such as the development of quantum computers, could present risks to cryptocurrencies and the Wallet and its related applications and software, which could result in the theft or loss of Digital Assets. Hackers, individuals, other malicious groups or organizations may attempt to interfere with your Wallet or Digital Assets in a variety of ways, including, but not limited to, malware attacks, denial of service attacks, consensus-based attacks, Sybil attacks, smurfing and spoofing, which may result in the theft or loss of your Digital Assets. Further, as with other similar decentralized, blockchain technology, your Wallet and Digital Assets are susceptible to attacks by miners in the course of validating transactions involving your Wallet or Digital Assets including, but not limited to, double-spend attacks, majority mining power attacks, selfish-mining attacks and race condition attacks. Any successful attacks present a risk to your Wallet and Digital Assets including, but not limited to, accurate execution, recording of transactions involving your Wallet and Digital Assets, and expected proper payment operations. Wanchain shall not in any way be liable for any loss resulting from any of the malicious activity described in this paragraph. Further, although Wanchain has no obligation to do so, Wanchain may attempt to update the protocol or software underlying the Wallet with security measures to prevent such malicious activity, but does not in any way guarantee that it will be able to do so in a timely or successful manner.'}
            </div>
            <div>
              <b>17. </b>
              {language === 'zn'
               ? '市场条件和/或某些加密货币交易所的规则运作会令您的数字资产很难或不可能进行交易，可能会增加数字资产的价值损失风险。'
               : 'Market conditions and/or the operation of the rules of certain cryptocurrency exchanges may increase the risk of loss of value in your Digital Assets by making it difficult or impossible to effect transactions in your Digital Assets.'}
            </div>
            <div>
              <b>18. </b>
              {language === 'zn'
               ? '您承认并理解，涉及您的电子钱包的任何数字资产交易都将收取交易费或您将承担的其他费用。'
               : 'You acknowledge and understand that any transactions of Digital Assets involving your Wallet will be subject to transaction fees or other charges for which you will be liable.'}
            </div>
            <div>
              <b>19. </b>
              {language === 'zn'
               ? '知识产权声明可能对钱包的运作产生不利影响。第三方可以声称与加密数字资产的持有和转移，及其源代码相关的知识产权所有权声明。无论任何知识产权声明或其他法律诉讼的结果如何，此类受到威胁的行为都可能导致对持有数字资产的能力或可行性的信心降低，并可能对您的数字资产的价值产生不利影响。此外，一个胜诉的知识产权声明可能会阻止您访问电子钱包，访问，持有或转移您的数字资产。'
               : 'Intellectual property rights claims may adversely affect the operation of the Wallet. Third parties may assert intellectual property ownership claims relating to the holding and transfer of cryptographic tokens and their source code. Regardless of the merit of any intellectual property claim or other legal action, such threatened action may result in a reduction in confidence in the ability or viability of holding Digital Assets and may adversely affect the value of your Digital Assets. Additionally, a meritorious intellectual property claim could prevent you from accessing the Wallet, or accessing, holding or transferring your Digital Assets.'}
            </div>
            <div>
              <b>20. </b>
              {language === 'zn'
               ? '在许多司法管辖区，加密数字资产，区块链和分布式账本技术的监管状况可能不明确或不稳定。很难预测监管机构如何或是否可以对此类技术及其应用程序应用现有法规，包括您的电子钱包，其相关应用程序和软件以及您的数字资产。同样难以预测立法机构或监管机构如何或是否可以实施相关法律法规的变更。此类监管措施可能会对Wanchain以及您使用电子钱包或访问数字资产的能力产生负面影响。'
               : 'The regulatory status of cryptographic tokens, blockchain and distributed ledger technology may be unclear or unsettled in many jurisdictions. It is difficult to predict how or whether regulatory agencies may apply existing regulation with respect to such technology and its applications, including to your Wallet, its related application and software, and your Digital Assets. It is likewise difficult to predict how or whether legislatures or regulatory agencies may implement changes to the relevant law and regulation. Such regulatory actions may negatively impact Wanchain as well as your ability to use your Wallet or access your Digital Assets.'}
            </div>
            <div>
              <b>21. </b>
              {language === 'zn'
               ? '通过参与涉及数字资产和您的钱包的任何交易，您承认并同意您了解收购，进入，持有和处置相关数字资产的税务影响（包括任何适用的所得税，商品和服务或增值税，印花税和其他税收，预扣税和任何税务报告要求）。任何税务或税务相关义务，无论是新加坡或其他地方的，均为您的唯一和绝对责任。如果任何此类税款由Wanchain支付或要求支付，您应就此类税款补偿Wanchain。您应补偿Wanchain因您未能遵守上述纳税义务而导致的以任何方式对Wanchain施加的任何税务处罚。'
               : 'By entering into any transaction involving Digital Assets and your Wallet, you acknowledge and agree that you are aware of the tax implications (including the implications of any applicable income tax, goods and services or value added taxes, stamp duties and other taxes, withholding tax, and any tax reporting requirements) of acquiring, entering into, holding and disposing of the relevant Digital Assets. Any such tax or tax-related obligations, whether arising in Singapore or otherwise, shall be your sole and absolute responsibility. In the event that any such taxes are paid by or required to be paid by Wanchain, you shall reimburse Wanchain in respect of such taxes. You shall indemnify Wanchain against any tax penalties which may be imposed on Wanchain that result from or in any way relate to your failure to comply with your above-mentioned tax obligations.'}
            </div>
            <div>
              <b>22. </b>
              {language === 'zn'
               ? '您理解并同意您在电子钱包中持有的任何数字资产不会产生任何利息，您无权获得在您的电子钱包中持有数字资产的时间价值的任何补偿。'
               : 'You understand and agree that any Digital Assets held by you within your Wallet will not bear any interest, and you will not be entitled to any compensation for the time value of your holding of the Digital Assets within your Wallet.'}
            </div>
            <div>
              <b>23. </b>
              {language === 'zn'
               ? '您不可撤销地授权Wanchain收集，使用和/或披露与您或您的电子钱包中的交易相关的信息给任何Wanchain的代理商，关联公司或其中任何一方所选择的任何其他第三方，无论其位于何处，和/或Wanchain转让或指派（或可能转让或指派）本条款下的所有或任何权利，利益和义务给其（或通过其）的任何人。Wanchain及任何上述信息接收者可以收集，使用，转移和披露任何法律，法院，监管机构，法律程序，自我监管下的任何义务（合同或其他）所要求的或促进的任何此类信息。机构，政府，监管机构或税务机关。尽管您不再拥有任何数字资产或维护您的电子钱包，但仍有权收集，使用和/或披露此类权利。'
               : 'You irrevocably authorise Wanchain to collect, use, and/or disclose information relating to you or your transactions in your Wallet to any of Wanchain’s agents, affiliates, or any other third parties selected by any of them, wherever situated, and/or to any person to (or through) whom Wanchain transfers or assigns (or may potentially transfer or assign) all or any of its rights, benefits and obligations under these Terms. Wanchain and any aforesaid recipient of information may collect, use, transfer and disclose any such information as required by or in furtherance of any obligation (contractual or otherwise) under or in connection to any law, court, regulator, legal process, self-regulatory bodies, governmental, regulatory, or tax authority. Such authority to collect, use and/or disclose shall continue notwithstanding that you no longer have any Digital Assets or maintain your Wallet.'}
            </div>
            <div>
              <b>24. </b>
              {language === 'zn'
               ? '您将提供Wanchain就您的电子钱包程序所需的所有文件和其他信息，包括但不限于使Wanchain遵守其反洗钱和其他法律或监管要求所需的文件和信息。您声明并保证任何此类信息以及此类文档中包含的任何信息在所有方面都应准确，真实和完整，如果上述任何信息不准确，不真实或不完整，您将立即通知Wanchain 。'
               : 'You will provide all documents and other information required by Wanchain in relation to your Wallet application, including but not limited to documents and information required to enable Wanchain to comply with its anti-money laundering and other legal or regulatory requirements. You represent and warrant that any such information, and any information contained in such documents, shall be accurate, true, and complete in all respects and you will immediately inform Wanchain if any of the above-mentioned information ceases to be accurate, true and complete.'}
            </div>
            <div>
              <b>25. </b>
              {language === 'zn'
               ? '如果钱包或其相关应用程序所基于的Wanchain软件快速普及，对交易处理和分布式应用程序计算的需求可能会急剧上升，并且速度超过软件可用的挖矿能力。这可能会导致此类软件的不稳定，并对您访问电子钱包或数字资产的能力产生负面影响，或者极大地增加您访问电子钱包或数字资产的成本。'
               : 'If the Wanchain software underlying the Wallet or its related applications is rapidly adopted, the demand for transaction processing and distributed application computations could rise dramatically and at a pace that exceeds the mining power available to the software. This could then result in a destabilization of such software and negatively impact your ability to access your Wallet or Digital Assets, or increase prohibitively your costs of accessing your Wallet or Digital Assets.'}
            </div>
            <div>
              <b>26. </b>
              {language === 'zn'
               ? '如果钱包或其相关应用程序所基于的Wanchain软件没有获得足够的兴趣，无论是因为竞争，替代软件，或是因为软件未达到用户的期望，或任何其他原因，该软件可能无法继续运作或按预期运作。这也可能导致Wanchain软件的不稳定，并对您访问电子钱包或数字资产的能力产生负面影响，或者极大地增加您访问电子钱包或数字资产的成本。'
               : 'If the Wanchain software underlying the Wallet or its related applications receives insufficient interest, whether because of competing, alternative software, or because the software has not met the expectations of users, or any other reason, the software may not be able to continue to operate or to operate as intended. This may also result in the destabilization of the Wanchain software and negatively impact your ability to access your Wallet or Digital Assets, or increase prohibitively your costs of accessing your Wallet or Digital Assets.'}
            </div>
            <div>
              <b>27. </b>
              {language === 'zn'
               ? '电子钱包的设计，功能和特性，以及相关的应用程序和软件，将不断发展，Wanchain保留随时更改此类设计，功能和特性的权利。'
               : 'The design, functions and features of your Wallet, as well as its related applications and software, shall be under constant development and Wanchain reserves the right to change such design, functions and features at any time.'}
            </div>
            <div>
              <b>28. </b>
              {language === 'zn'
               ? 'Wanchain及其各自的官员，代表或代理人均不对由于不可抗力，天灾，战争，恐怖主义，工业纠纷，自然灾害，不利天气条件，通讯系统故障或Wanchain无法控制的任何其他因素造成的任何损失或失败或延迟履行本条款规定的义务负责。'
               : 'Neither Wanchain nor their respective officers, delegates or agents shall be liable for any loss or failure or delay in complying with their obligations under these Terms caused by force majeure, act of god, war, terrorism, industrial disputes, natural disaster, adverse weather conditions, failure of communication systems or any other cause beyond the control of Wanchain.'}
            </div>
            <div>
              <b>29. </b>
              {language === 'zn'
               ? '诸如数字资产之类的加密数字通证，以及可用来持有此类数字资产的应用程序，例如钱包，是一种新的且相对未经测试的技术。除了上述风险之外，您使用电子钱包以及购买，持有和使用数字资产还存在其他相关风险，包括Wanchain无法预料到的风险。此类风险可能会进一步成为上述风险的意料之外的变化或组合。此外，当多个风险因素同时产生影响时，这可能导致复合效应，并且可能是不可预测的。'
               : 'Cryptographic tokens such as the Digital Assets, and applications that allow the holding of such Digital Assets, such as the Wallet, are a new and relatively untested technology. In addition to the risks noted above, there are other risks associated with your use of the Wallet and your purchase, holding and use of Digital Assets, including those that Wanchain cannot anticipate. Such risks may further materialise as unanticipated variations or combinations of the risks set out above. In addition, where more than one risk factor has effect simultaneously, this may have a compounding effect, which may not be predictable.'}
            </div>
            <div>
              <b>30. </b>
              {language === 'zn'
               ? '在适用法律允许的范围内，Wanchain不对您因任何数字资产，以及您对钱包的任何使用所引起的或与之相关的任何损失，损害，费用或成本承担责任，或对其进行赔偿，或受其损害，除非此类损失，损害，费用或成本是Wanchain的重大过失或故意不当行为或欺诈的直接结果。在适用法律允许的范围内，此类损失，损害，费用或成本应包括任意类型的任何和全部损害，包括间接，偶然，特殊，示范性或后果性损害，包括利润，商誉和数据的损失。某些司法管辖区不允许排除某些保证，或某些类型损害的赔偿责任的限制或排除。因此，上述某些限制可能对您不适用。这些条款中的任何内容均不影响您的法定权利或排除因Wanchain的重大过失，故意不当行为或欺诈而引起的损害。'
               : 'To the extent permitted by applicable law, Wanchain shall not be liable for, and shall be indemnified and held harmless by, you from and against any loss, damage, expense or cost arising out of or in connection to any of your Digital Assets and any use by you of your Wallet, except if such loss, damage, expense or cost is a direct result of the gross negligence or wilful misconduct or fraud of Wanchain. To the extent permitted by applicable law, such loss, damage, expense, or cost shall include any and all damages of whatever kind, including indirect, incidental, special, exemplary, or consequential damages, including for loss of profits, goodwill and data. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Therefore, some of the above limitations may not apply to you. Nothing in these Terms shall affect your statutory rights or exclude injury arising from gross negligence, wilful misconduct or fraud of Wanchain.'}
            </div>
            <div>
              <b>31. </b>
              {language === 'zn'
               ? '本条款受新加坡法律管辖并由其解释。涉及与本条款相关的所有诉讼，以及您任何WAN ERC-20通证和WAN的交易，您都受新加坡法院的专属管辖权管辖。本协议中的任何内容均不限制Wanchain在任何其他司法管辖区的法院对您或您的资产提起诉讼的权利。'
               : 'These Terms shall be governed by and construed in accordance with Singapore law. You submit to the exclusive jurisdiction of the Singapore courts with regards to all proceedings relating to this these Terms and any of your dealings in the WAN ERC-20 tokens and WAN. Nothing herein shall limit the right of Wanchain to bring proceedings against you or your assets in the courts of any other jurisdiction.'}
            </div>
          </div>
          <div className={styles.TableDiv}>
            <h6>{language === 'zn' ? '请使用SHA256校验工具验证下载文件的数据完整性' : 'Please verify downloaded file\'s data integrity with SHA256 checksum tools'}</h6>
             <table>
               <tr>
                 <th>{language === 'zn' ? '文件名' : 'File Name'}</th>
                 <th>{language === 'zn' ? 'SHA256校验值' : 'Checksum (SHA256)'}</th>
               </tr>
               <tr>
                 <td>{products.win.name}</td>
                 <td>{products.win.hash}</td>
               </tr>
               <tr>
                 <td>{products.mac.name}</td>
                 <td>{products.mac.hash}</td>
               </tr>
               <tr>
                 <td>{products.linux.name}</td>
                 <td>{products.linux.hash}</td>
               </tr>
             </table>
          </div>
          <a onClick={this.props.isPopFunc} href={this.props.download} target="_blank">{language === 'zn' ? '同意' : 'Got it'}</a>
        </div>
      </div>
    );
  }
}

export default Content;
