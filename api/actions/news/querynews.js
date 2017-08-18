var mysql  = require('mysql');

import mysqlConfig from '../../mysql/mysql.config';

var connection = mysql.createConnection({
    host     : mysqlConfig.host,
    user     : mysqlConfig.user,
    password : mysqlConfig.password,
    port: mysqlConfig.port,
    database: mysqlConfig.database,
});

export default function querynews(req) {
    connection.connect();

    var limit = req.body.limit;
    var  userGetSql = 'select * FROM wanchain_news ORDER BY best_time DESC limit ? ';
    console.log('sql', userGetSql);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //查 query
            connection.query(userGetSql,[limit], function (err, result) {
                if(err){
                    reject({errors: err.message, status: 0});
                    console.log('[SELECT ERROR] - ',err.message);
                }

                console.log('---------------QUERY NEWS----------------');
                resolve({result: result, status: 1});
                console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
            });
            connection.end();
        }, 1000);
    });
}

