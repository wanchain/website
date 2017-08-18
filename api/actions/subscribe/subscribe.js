import mysqlConfig from '../../mysql/connectMysql';
import Date from '../../utils/Date';

export default function subscribe(req) {

    var email = req.body.email; //bodyParser does the magic
    var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

    var insertSubscribeSql = 'INSERT INTO wanchain_subscribes(email, create_time) VALUE(?, ?)';
    var insertSubscrbeParams = [email, create_time];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //增
            mysqlConfig.query(insertSubscribeSql, insertSubscrbeParams,function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------INSERT----------------');
                resolve({result: 'insert success', status: 1});
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });
        }, 1000);
    });
}
