var mysql  = require('mysql');

import mysqlConfig from '../../mysql/mysql.config';
import Date from '../../utils/Date';

var connection = mysql.createConnection({
    host     : mysqlConfig.host,
    user     : mysqlConfig.user,
    password : mysqlConfig.password,
    port: mysqlConfig.port,
    database: mysqlConfig.database,
});

export default function users(req) {
    connection.connect();

    var email = req.body.email; //bodyParser does the magic
    var create_time = new Date().Format("yyyy-MM-dd hh:mm:ss");

    var insertSubscribeSql = 'INSERT INTO wanchain_subscribes(email, create_time) VALUE(?, ?)';
    var insertSubscrbeParams = [email, create_time];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            connection.query(insertSubscribeSql, insertSubscrbeParams,function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------INSERT----------------');
                resolve({result: 'insert success', status: 1});
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });

            connection.end();
        }, 1000);
    });
}
