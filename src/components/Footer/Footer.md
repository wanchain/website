{language === 'zn' &&
                    <div className={styles.FooterformGroup + ' form-group col-lg-4'}>
                        {/* <img src={email}/> */}
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" />
                        <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg"
                               onClick={this.onClick.bind(this)}>{' + '}订阅</a>
                        </div>
                        <p>更多项目请咨询：<span>info@wanchain.org</span></p>
                    </div>
                    }

                    {language === 'en' &&
                    <div className={styles.FooterformGroup + ' form-group col-lg-4'}>
                        {/* <img src={email}/> */}
                        <input type="text" className="form-control" id="name" ref="wanchain_subscribe" placeholder="Please enter the email address" />
                        <div className={styles['submit-area']}>
                            <a className={styles['submit-button'] + ' btn'} data-toggle="modal" data-target=".bs-example-modal-lg"
                               onClick={this.onClick.bind(this)}>{' + '}Subscribe</a>
                        </div>
                        <p>for more information, please contact: <span>info@wanchain.org</span></p>
                    </div>
                    }