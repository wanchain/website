 **** ul ****
 <ul className={styles.countdown}>
    <li><span >{this.state.date.days}</span><small>:</small><p>{this.state.date.ref_days}</p></li>
    <li><span >{this.state.date.hours}</span><small>:</small><p>{this.state.date.ref_hours}</p></li>
    <li><span >{this.state.date.minutes}</span><small>:</small><p>{this.state.date.ref_minutes}</p></li>
    <li><span>{this.state.date.seconds}</span><small style={{opacity: 0}}>:</small><p>{this.state.date.ref_seconds}</p></li>
 </ul>
 
 **** div Zn ****
  <div className={styles.ingBox}>
    <h2 className={styles.ingTitle}>距离众筹结束还有</h2>
    <ul className={styles.countdown}>
        <li><span >{this.state.date.days}</span><small>:</small><p>{this.state.date.ref_days}</p></li>
        <li><span >{this.state.date.hours}</span><small>:</small><p>{this.state.date.ref_hours}</p></li>
        <li><span >{this.state.date.minutes}</span><small>:</small><p>{this.state.date.ref_minutes}</p></li>
        <li><span>{this.state.date.seconds}</span><p>{this.state.date.ref_seconds}</p></li>
    </ul>
 
    <div className="row">
    <div className="col-md-offset-2 col-md-8">
        <div className="progress"></div>
            <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: config.app.icoBar.bar}}></div>
        </div>
    </div>
    <p className={styles.ingDetal}>众筹总量：{config.app.icoBar.amount}        
        <span className={styles.ingDetalSpan}>已完成：<em className="progress-value">{config.app.icoBar.bar}</em></span>
    </p>
  </div>
 
 **** div En ****
   <div className={styles.ingBox}>
     <h2 className={styles.ingTitle}>距离众筹结束还有</h2>
     <ul className={styles.countdown}>
         <li><span >{this.state.date.days}</span><small>:</small><p>{this.state.date.ref_days}</p></li>
         <li><span >{this.state.date.hours}</span><small>:</small><p>{this.state.date.ref_hours}</p></li>
         <li><span >{this.state.date.minutes}</span><small>:</small><p>{this.state.date.ref_minutes}</p></li>
         <li><span>{this.state.date.seconds}</span><p>{this.state.date.ref_seconds}</p></li>
     </ul>
  
     <div className="row">
     <div className="col-md-offset-2 col-md-8">
         <div className="progress"></div>
             <div className="progress-bar progress-bar-info progress-bar-striped active" style={{width: config.app.icoBar.bar}}></div>
         </div>
     </div>
     <p className={styles.ingDetal}>众筹总量：{config.app.icoBar.amount}        
         <span className={styles.ingDetalSpan}>已完成：<em className="progress-value">{config.app.icoBar.bar}</em></span>
     </p>
   </div>
